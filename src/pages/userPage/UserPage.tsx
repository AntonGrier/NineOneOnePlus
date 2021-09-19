import {
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  Typography,
} from '@mui/material'
import { navigate, RouteComponentProps } from '@reach/router'
import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react'
import { AssistancePage } from './assistance'
import { UserInfoPage } from './userInfo'
import CallIcon from '@mui/icons-material/Call'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import { makeStyles } from '@mui/styles'
import { theme } from '../theme'
import clsx from 'clsx'
import { GeoMap } from '../../ui'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  content: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    overflowY: 'auto',
  },
  bottomNavigation: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    zIndex: 99,
  },
  bottomNavigationAction: {
    color: 'black!important',
  },
  selected: {
    color: `${theme.palette.primary.dark}!important`,
  },
})

enum Location {
  Assistance = 'Assistance',
  UserInfo = 'UserInfo',
}

interface UserPageProps extends RouteComponentProps {
  calling: boolean
  setCalling: Dispatch<SetStateAction<boolean>>
  startTimer: () => void
  callDuration: string
}

export const UserPage: FunctionComponent<UserPageProps> = ({
  calling,
  setCalling,
  startTimer,
  callDuration,
}) => {
  const { root, content, bottomNavigation, selected, bottomNavigationAction } =
    useStyles()
  const [location, setLocation] = useState(Location.Assistance)

  return (
    <div className={root}>
      {calling && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            right: '2%',
            bottom: '7%',
            zIndex: 99,
          }}
        >
          <IconButton
            onClick={() => navigate('/call')}
            style={{
              fontSize: '40px',
              marginBottom: '-10px',
            }}
          >
            <PhoneInTalkIcon
              fontSize='inherit'
              style={{
                padding: '10px',
                color: 'white',
                backgroundColor: '#F95151',
                borderRadius: '50px',
              }}
            />
          </IconButton>
          <Typography
            variant='subtitle2'
            style={{ fontWeight: 'bold', color: '#F95151' }}
          >
            {callDuration}
          </Typography>
        </div>
      )}
      <div className={content}>
        <div
          style={{
            display: location !== Location.Assistance ? 'none' : undefined,
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: !calling ? 'none' : undefined,
            }}
          >
            <GeoMap user />
          </div>
          <div
            style={{ height: '100%', display: calling ? 'none' : undefined }}
          >
            <AssistancePage setCalling={setCalling} startTimer={startTimer} />
          </div>
        </div>

        <div
          style={{
            display: location === Location.Assistance ? 'none' : undefined,
          }}
        >
          <UserInfoPage />
        </div>
      </div>
      <BottomNavigation
        className={bottomNavigation}
        showLabels
        value={location}
        onChange={(_, newValue) => setLocation(newValue)}
      >
        <BottomNavigationAction
          className={clsx(
            bottomNavigationAction,
            location === Location.Assistance && selected,
          )}
          value={Location.Assistance}
          label='Assistance'
          icon={<CallIcon />}
        />
        <BottomNavigationAction
          className={clsx(
            bottomNavigationAction,
            location === Location.UserInfo && selected,
          )}
          value={Location.UserInfo}
          label='User Info'
          icon={<PersonOutlineIcon />}
        />
      </BottomNavigation>
    </div>
  )
}
