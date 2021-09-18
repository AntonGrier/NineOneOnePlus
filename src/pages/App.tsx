import { Router } from '@reach/router'
import { theme } from './theme'
import { DashboardPage } from './dashboardPage'
import { UserPage } from './userPage'
import { CallPage } from './userPage/call'
import { ThemeProvider } from '@mui/styles'
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router id='router'>
      <UserPage path='/' />
      <DashboardPage path='dashboard' />
      <CallPage path='call' />
    </Router></ThemeProvider>
  )
}
