import { FunctionComponent } from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import { makeStyles } from '@mui/styles'
import { IconButton, Typography } from '@mui/material'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  icon: {
    background: '#4DBBEE',
    color: 'white',
    borderRadius: '22px',

    width: '100px',
    height: '100px',
  },
})

export const AssistancePage: FunctionComponent = () => {
  const { root, icon } = useStyles()

  return (
    <div>
      <Typography>Title</Typography>
      <IconButton
        style={{
          borderRadius: '22px',
          // width: '100px',
          // height: '100px',
        }}
      >
        <PhoneInTalkIcon className={icon} />
      </IconButton>
    </div>
  )
}
