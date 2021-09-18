import { makeStyles } from '@mui/styles'
import VideocamIcon from '@mui/icons-material/Videocam'
import VideocamOffIcon from '@mui/icons-material/VideocamOff'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { IconButton, Typography } from '@mui/material'
import { RouteComponentProps } from '@reach/router'
import { FunctionComponent, useState } from 'react'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    background: 'black',
  },
  iconFooter: {},
  icon: {
    borderRadius: '30px',
    padding: '10px',
    color: 'rgb(90,90,90)',
    backgroundColor: '#C4C4C4',
  },
  iconRed: {
    backgroundColor: 'red',
    color: 'white',
  },
  userProfile: {
    paddingTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const CallPage: FunctionComponent<RouteComponentProps> = () => {
  const { root, iconFooter, icon, iconRed, userProfile } = useStyles()
  const [videoEnabled, setVideoEnabled] = useState(false)
  const [audioMuted, setAudioMuted] = useState(true)
  const [muted, setMuted] = useState(true)

  return (
    <div className={root}>
      <div className={userProfile}>
        <IconButton disabled style={{ fontSize: '100px' }}>
          <AccountCircleIcon fontSize='inherit' style={{ color: 'white' }} />
        </IconButton>
        <Typography style={{ color: 'white' }} variant='body1'>
          Liang Liu
        </Typography>
        <Typography style={{ color: 'white' }} variant='caption'>
          2:21
        </Typography>
      </div>
      <div className={iconFooter}>
        <IconButton
          onClick={() => setVideoEnabled((prev) => !prev)}
          disableRipple
        >
          {videoEnabled ? (
            <VideocamIcon fontSize='large' className={icon} />
          ) : (
            <VideocamOffIcon fontSize='large' className={clsx(icon, iconRed)} />
          )}
        </IconButton>

        <IconButton
          onClick={() => setAudioMuted((prev) => !prev)}
          disableRipple
        >
          {audioMuted ? (
            <VolumeOffIcon fontSize='large' className={clsx(icon, iconRed)} />
          ) : (
            <VolumeUpIcon fontSize='large' className={icon} />
          )}
        </IconButton>

        <IconButton onClick={() => setMuted((prev) => !prev)} disableRipple>
          {muted ? (
            <MicIcon fontSize='large' className={icon} />
          ) : (
            <MicOffIcon fontSize='large' className={clsx(icon, iconRed)} />
          )}
        </IconButton>
      </div>
    </div>
  )
}
