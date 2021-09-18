import React, { useState, useEffect, useRef } from 'react'

interface Props {
  participant: any
  currentUser: boolean
}

const Participant = ({ participant, currentUser }: Props) => {
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
    <CurrentUserVideo audioRef={audioRef} videoRef={videoRef} />
  ) : (
    <OtherUserVideo audioRef={audioRef} videoRef={videoRef} />
  )
}

interface VideoProps {
  videoRef: any
  audioRef: any
}

export const CurrentUserVideo = ({ videoRef, audioRef }: VideoProps) => {
  return (
    <div>
      <video ref={videoRef} autoPlay={true} />
      <audio ref={audioRef} autoPlay={true} muted={true} />
    </div>
  )
}

export const OtherUserVideo = ({ videoRef, audioRef }: VideoProps) => {
  return (
    <div>
      <video ref={videoRef} autoPlay={true} />
      <audio ref={audioRef} autoPlay={true} muted={true} />
    </div>
  )
}

export default Participant
