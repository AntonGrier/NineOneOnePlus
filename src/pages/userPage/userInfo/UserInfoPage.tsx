import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { FunctionComponent } from 'react'
import { UserInfoFormController } from './UserInfoFormController'

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
      <IconButton disabled style={{ fontSize: '150px' }}>
        <AccountCircleIcon fontSize='inherit' style={{ color: 'grey' }} />
      </IconButton>
      <UserInfoFormController />
    </div>
  )
}
