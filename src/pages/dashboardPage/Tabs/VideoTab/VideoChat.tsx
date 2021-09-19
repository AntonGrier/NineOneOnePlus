import React, { useState, useCallback } from 'react'
import Lobby from './Lobby'
import Room from './Room'
import { getTwilioToken } from './utils'

const VideoChat = () => {
  const [username, setUsername] = useState('operator')
  const [roomName, setRoomName] = useState('room')
  const [token, setToken] = useState(null)

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const token = await getTwilioToken(username, roomName)
      setToken(token)
    },
    [roomName, username],
  )

  let render
  if (token) {
    render = <Room roomName={roomName} token={token} />
  } else {
    render = <Lobby handleSubmit={handleSubmit} />
  }
  return render
}

export default VideoChat
