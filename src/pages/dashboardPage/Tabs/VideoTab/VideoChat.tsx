import React, { useState, useCallback } from 'react'
import Lobby from './Lobby'
import Room from './Room'
import { getTwilioToken } from './utils'

const VideoChat = () => {
  const [username, setUsername] = useState('')
  const [roomName, setRoomName] = useState('')
  const [token, setToken] = useState(null)

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value)
  }, [])

  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value)
  }, [])

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const token = await getTwilioToken(username, roomName)
      setToken(token)
    },
    [roomName, username],
  )

  const handleLogout = useCallback((event) => {
    setToken(null)
  }, [])

  let render
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    )
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    )
  }
  return render
}

export default VideoChat
