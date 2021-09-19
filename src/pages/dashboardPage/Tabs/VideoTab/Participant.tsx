import { Box } from '@mui/system'
import React, { useState, useEffect, useRef } from 'react'

interface Props {
  participant: any
  currentUser?: boolean
  isMobile?: boolean
}

const Participant = ({ participant, currentUser, isMobile }: Props) => {
  const [videoTracks, setVideoTracks] = useState<any>([])
  const [audioTracks, setAudioTracks] = useState<any>([])

  const videoRef = useRef<any>()
  const audioRef = useRef<any>()

  const trackpubsToTracks = (trackMap: any) =>
    Array.from(trackMap.values())
      .map((publication: any) => publication.track)
      .filter((track) => track !== null)

  useEffect(() => {
    setVideoTracks(trackpubsToTracks(participant.videoTracks))
    setAudioTracks(trackpubsToTracks(participant.audioTracks))

    const trackSubscribed = (track: any) => {
      if (track.kind === 'video') {
        setVideoTracks((videoTracks: any) => [...videoTracks, track])
      } else if (track.kind === 'audio') {
        setAudioTracks((audioTracks: any) => [...audioTracks, track])
      }
    }

    const trackUnsubscribed = (track: any) => {
      if (track.kind === 'video') {
        setVideoTracks((videoTracks: any) =>
          videoTracks.filter((v: any) => v !== track),
        )
      } else if (track.kind === 'audio') {
        setAudioTracks((audioTracks: any) =>
          audioTracks.filter((a: any) => a !== track),
        )
      }
    }

    participant.on('trackSubscribed', trackSubscribed)
    participant.on('trackUnsubscribed', trackUnsubscribed)

    return () => {
      setVideoTracks([])
      setAudioTracks([])
      participant.removeAllListeners()
    }
  }, [participant])

  useEffect(() => {
    const videoTrack: any = videoTracks[0]
    if (videoTrack) {
      videoTrack.attach(videoRef.current)
      return () => {
        videoTrack.detach()
      }
    }
  }, [videoTracks])

  useEffect(() => {
    const audioTrack: any = audioTracks[0]
    if (audioTrack) {
      audioTrack.attach(audioRef.current)
      return () => {
        audioTrack.detach()
      }
    }
  }, [audioTracks])

  return currentUser ? (
    <CurrentUserVideo
      audioRef={audioRef}
      videoRef={videoRef}
      isMobile={isMobile}
    />
  ) : (
    <OtherUserVideo
      audioRef={audioRef}
      videoRef={videoRef}
      isMobile={isMobile}
    />
  )
}

interface VideoProps {
  videoRef: any
  audioRef: any
  isMobile?: boolean
}

export const OtherUserVideo = ({
  videoRef,
  audioRef,
  isMobile,
}: VideoProps) => {
  return (
    <Box
      sx={
        isMobile
          ? { height: '100%', position: 'fixed', zIndex: 1, width: '100%' }
          : { height: '100%' }
      }
    >
      <video
        ref={videoRef}
        autoPlay={true}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      />
      <audio ref={audioRef} autoPlay={true} muted={true} />
    </Box>
  )
}

export const CurrentUserVideo = ({
  isMobile,
  videoRef,
  audioRef,
}: VideoProps) => {
  return (
    <Box
      sx={{
        width: isMobile ? '160px' : '200px',
        height: 'auto',
        position: 'absolute',
        bottom: isMobile ? 80 : 20,
        right: 20,
        zIndex: 2,
      }}
    >
      <video
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        ref={videoRef}
        autoPlay={true}
      />
      <audio ref={audioRef} autoPlay={true} muted={true} />
    </Box>
  )
}

export default Participant
