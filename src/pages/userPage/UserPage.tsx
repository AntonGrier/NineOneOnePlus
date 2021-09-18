import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { RouteComponentProps } from '@reach/router'
import { FunctionComponent, useEffect, useState } from 'react'
import { AssistancePage } from './assistance'
import { UserInfoPage } from './userInfo'
import CallIcon from '@mui/icons-material/Call'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
})

enum Location {
  Assistance = 'Assistance',
  UserInfo = 'UserInfo',
}

export const UserPage: FunctionComponent<RouteComponentProps> = () => {
  const { root } = useStyles()
  const [location, setLocation] = useState(Location.Assistance)

  // useEffect(() => {}, [location])

  return (
    <div className={root}>
      {location === Location.Assistance ? <AssistancePage /> : <UserInfoPage />}
      <BottomNavigation
        showLabels
        value={location}
        onChange={(_, newValue) => setLocation(newValue)}
      >
        <BottomNavigationAction
          value={Location.Assistance}
          label='Assistance'
          icon={<CallIcon />}
        />
        <BottomNavigationAction
          value={Location.UserInfo}
          label='User Info'
          icon={<PersonOutlineIcon />}
        />
      </BottomNavigation>
    </div>
  )
}
