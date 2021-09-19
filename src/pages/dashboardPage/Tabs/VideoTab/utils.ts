import axios from 'axios'

const URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000'
    : 'https://htn2021be.herokuapp.com/'

export const getTwilioToken = async (
  username: string,
  roomname: string = 'room',
) => {
  const result = await axios.post(`${URI}/login`, { username, roomname })
  return result.data.token
}
