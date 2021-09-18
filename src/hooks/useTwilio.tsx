import { useState, useEffect } from 'react'
import Participant from '../pages/dashboardPage/Tabs/VideoTab/Participant'
import Video from 'twilio-video'

const roomName = 'room'

export const useTwilio = (token: string, isMobile = false) => {
  const [room, setRoom] = useState<any>(null)
  const [participant, setParticipant] = useState<any>(null)

  useEffect(() => {
    const participantConnected = (participant: any) => {
      setParticipant(participant)
    }

    const participantDisconnected = (participant: any) => {
      setParticipant(null)
    }

    Video.connect(token, {
      name: roomName,
    }).then((room) => {
      setRoom(room)
      room.on('participantConnected', participantConnected)
      room.on('participantDisconnected', participantDisconnected)
      room.participants.forEach(participantConnected)
    })

    return () => {
      setRoom((currentRoom: any) => {
        if (currentRoom && currentRoom.localParticipant.state === 'connected') {
          currentRoom.localParticipant.tracks.forEach(function (
            trackPublication: any,
          ) {
            trackPublication.track.stop()
          })
          currentRoom.disconnect()
          return null
        } else {
          return currentRoom
        }
      })
    }
  }, [token])

  const remoteParticipant = participant ? (
    <Participant
      key={participant.sid}
      participant={participant}
      isMobile={isMobile}
    />
  ) : null

  const localParticipant = room ? (
    <Participant
      key={room.localParticipant.sid}
      participant={room.localParticipant}
      currentUser
      isMobile={isMobile}
    />
  ) : null

  return { remoteParticipant, localParticipant }
}
