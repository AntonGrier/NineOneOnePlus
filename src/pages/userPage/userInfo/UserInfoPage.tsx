import { IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { FunctionComponent } from 'react'
import { Avatar } from '../../../ui/Avatar'
import { UserInfoFormController } from './UserInfoFormController'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    paddingTop: '10vh',
  },
})

export const UserInfoPage: FunctionComponent = () => {
  const { root } = useStyles()

  return (
    <div className={root}>
      <Typography variant='h4'>Your Information</Typography>
      <div style={{ position: 'relative' }}>
        <Avatar />
        <IconButton
          style={{
            color: 'black',
            position: 'absolute',
            bottom: '0',
            left: '80%',
          }}
        >
          <ControlPointIcon fontSize='large' />
        </IconButton>
      </div>
      <UserInfoFormController />
    </div>
  )
}
