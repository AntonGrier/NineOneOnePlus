import { Dispatch, FunctionComponent, SetStateAction } from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import { makeStyles } from '@mui/styles'
import { Button, IconButton, Theme, Typography } from '@mui/material'
import { navigate } from '@reach/router'
import logo from './../../../ui/logo.png'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  iconButton: {
    fontSize: '100px!important',
    padding: 0,
  },
  icon: {
    background: theme.palette.primary.main,
    color: 'white',
    borderRadius: '60px',
    padding: '10px',
  },
}))

export const AssistancePage: FunctionComponent<{
  startTimer: () => void
  setCalling: Dispatch<SetStateAction<boolean>>
}> = ({ startTimer, setCalling }) => {
  const { root, icon, iconButton } = useStyles()

  return (
    <div className={root}>
      <img src={logo} />
      <Button
        style={{ borderRadius: '50px', padding: '0 50px' }}
        variant='contained'
        onClick={() => {
          navigate('call')
          startTimer()
          setCalling(true)
        }}
        className={iconButton}
        endIcon={
          <IconButton disabled style={{ fontSize: '40px' }}>
            <PhoneInTalkIcon fontSize='inherit' className={icon} />
          </IconButton>
        }
      >
        <Typography variant='h4'>Call</Typography>
      </Button>
    </div>
  )
}
