import { Router } from '@reach/router'
import { theme } from './theme'
import { DashboardPage } from './dashboardPage'
import { UserPage } from './userPage'
import { CallPage } from './userPage/call'
import { ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import { useStopWatch } from '../hooks'
import { formatCallDuration } from '../utils'

export const App = () => {
  const [calling, setCalling] = useState(false)
  const { startTimer, resetTimer, timer } = useStopWatch()
  const callDuration = formatCallDuration(timer)

  return (
    <ThemeProvider theme={theme}>
      <Router id='router'>
        <UserPage
          calling={calling}
          setCalling={setCalling}
          startTimer={startTimer}
          callDuration={callDuration}
          path='/'
        />
        <DashboardPage path='dashboard' />
        <CallPage
          path='call'
          setCalling={setCalling}
          callDuration={callDuration}
          resetTimer={resetTimer}
        />
      </Router>
    </ThemeProvider>
  )
}
