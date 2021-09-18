import axios from 'axios'

const URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000'
    : 'https://firstresponders.herokuapp.com' // TODO: change to production URL

export const getTwilioToken = async (
  username: string,
  roomname: string = 'room',
) => {
  const result = await axios.post(`${URI}/login`, { username, roomname })
  return result.data.token
}
