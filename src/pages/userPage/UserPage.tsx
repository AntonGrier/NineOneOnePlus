import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { RouteComponentProps } from '@reach/router'
import { FunctionComponent, useEffect, useState } from 'react'
import { AssistancePage } from './assistance'
import { UserInfoPage } from './userInfo'
import CallIcon from '@mui/icons-material/Call'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { makeStyles, ThemeProvider } from '@mui/styles'
import { theme } from '../theme'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
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
    marginBottom: '10vh',
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
    color: `${theme.palette.primary.main}!important`,
  },
})

enum Location {
  Assistance = 'Assistance',
  UserInfo = 'UserInfo',
}

export const UserPage: FunctionComponent<RouteComponentProps> = () => {
  const { root, content, bottomNavigation, selected, bottomNavigationAction } =
    useStyles()
  const [location, setLocation] = useState(Location.Assistance)

  return (
    <div className={root}>
      <div className={content}>
        {location === Location.Assistance ? (
          <AssistancePage />
        ) : (
          <UserInfoPage />
        )}
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
