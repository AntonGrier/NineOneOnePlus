import { Button, Typography } from '@mui/material'
import { navigate, RouteComponentProps } from '@reach/router'
import { FunctionComponent } from 'react'
import logo from './../../ui/logo.png'

export const GetStartedPage: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <img src={logo} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Button
          color='primary'
          variant='outlined'
          style={{
            backgroundColor: 'white',
            borderWidth: '5px',
            margin: '10px',
            width: '300px',
            borderRadius: '30px',
            padding: '10px 25px',
          }}
          onClick={() => navigate('login')}
        >
          <Typography variant='h4'>Login</Typography>
        </Button>
        <Button
          color='primary'
          variant='contained'
          style={{
            margin: '10px',
            width: '300px',
            borderRadius: '30px',
            padding: '10px 25px',
          }}
          onClick={() => navigate('sign-up')}
        >
          <Typography variant='h4'>Sign Up</Typography>
        </Button>
      </div>
    </div>
  )
}
