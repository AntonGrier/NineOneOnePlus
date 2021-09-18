import { IconButton } from '@mui/material'
import { FunctionComponent } from 'react'
import avatar from './avatar.jpg'

export const Avatar: FunctionComponent = () => {
  return (
    <IconButton disabled>
      <img
        src={avatar}
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '100px',
        }}
      />
    </IconButton>
  )
}
