import { Dispatch, FunctionComponent, SetStateAction } from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import { makeStyles } from '@mui/styles'
import { IconButton, Typography } from '@mui/material'
import { navigate } from '@reach/router'

const useStyles = makeStyles({
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
    background: '#4DBBEE',
    color: 'white',
    borderRadius: '60px',
    padding: '10px',
  },
  title: {
    textAlign: 'center',
  },
})

export const AssistancePage: FunctionComponent<{
  startTimer: () => void
  setCalling: Dispatch<SetStateAction<boolean>>
}> = ({ startTimer, setCalling }) => {
  const { root, icon, iconButton, title } = useStyles()

  return (
    <div className={root}>
      <Typography variant='h3' className={title}>
        First Responders
      </Typography>
      <IconButton
        onClick={() => {
          navigate('call')
          startTimer()
          setCalling(true)
        }}
        className={iconButton}
      >
        <PhoneInTalkIcon fontSize='inherit' className={icon} />
      </IconButton>
    </div>
  )
}
