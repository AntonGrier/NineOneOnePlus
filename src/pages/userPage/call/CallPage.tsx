import { makeStyles } from '@mui/styles'
import VideocamIcon from '@mui/icons-material/Videocam'
import VideocamOffIcon from '@mui/icons-material/VideocamOff'
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Box, IconButton, Typography } from '@mui/material'
import { navigate, RouteComponentProps } from '@reach/router'
import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import clsx from 'clsx'
import { formatCallDuration } from '../../../utils'
import { useTwilio } from '../../../hooks'
import { Video } from './Video'
import { getTwilioToken } from '../../dashboardPage/Tabs/VideoTab/utils'

const useStyles = makeStyles({
  root: {
    background: 'black',
    position: 'relative',
    height: '100%',
  },
  iconFooter: { zIndex: 5 },
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
    marginTop: '30px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 5,
    background: '#00000050',
    borderRadius: '15px',
  },
})

interface CallPageProps extends RouteComponentProps {
  callDuration: string
  resetTimer: () => void
  setCalling: Dispatch<SetStateAction<boolean>>
}

export const CallPage: FunctionComponent<CallPageProps> = ({
  callDuration,
  resetTimer,
  setCalling,
}) => {
  const { root, iconFooter, icon, iconRed, userProfile } = useStyles()
  const [token, setToken] = useState<null | string>(null)
  const [videoEnabled, setVideoEnabled] = useState(false)

  // fetch twilio token
  useEffect(() => {
    const fetchTwilioToken = async () => {
      try {
        const token = await getTwilioToken('caller') // TODO: fill in username with something?
        setToken(token)
      } catch (err) {
        console.log(err)
      } finally {
        // do something
      }
    }

    fetchTwilioToken()
  }, [])

  return (
    <div className={root}>
      {token && <Video token={token} />}
      <Box
        sx={{
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconButton
          style={{
            position: 'absolute',
            left: '5%',
            top: '5%',
            zIndex: 3,
            background: '#00000050',
          }}
          onClick={() => navigate('/')}
        >
          <ArrowBackIosIcon fontSize='large' style={{ color: 'white' }} />
        </IconButton>
        <div className={userProfile}>
          <IconButton disabled style={{ fontSize: '100px' }}>
            <AccountCircleIcon fontSize='inherit' style={{ color: 'white' }} />
          </IconButton>
          <Typography style={{ color: 'white' }} variant='body1'>
            Operator
          </Typography>
          <Typography style={{ color: 'white' }} variant='caption'>
            {callDuration}
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
              <VideocamOffIcon
                fontSize='large'
                className={clsx(icon, iconRed)}
              />
            )}
          </IconButton>

          <IconButton
            onClick={() => {
              setCalling(false)
              navigate('/')
              resetTimer()
            }}
            disableRipple
          >
            <PhoneDisabledIcon
              fontSize='large'
              className={clsx(icon, iconRed)}
            />
          </IconButton>
        </div>
      </Box>
    </div>
  )
}
