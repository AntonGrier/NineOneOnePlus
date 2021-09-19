import { FunctionComponent } from 'react'
import axios from 'axios'

const URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000'
    : 'https://htn2021be.herokuapp.com/'

export const getUserInfo = async () => {
  const result = await axios.get(`${URI}/userinfo`)
  console.log(result)
  return result
}

export const InfoTab: FunctionComponent = () => {
  const usr = getUserInfo()
  return <>usr</>
}
