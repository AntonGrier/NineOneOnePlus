import { Router } from '@reach/router'
import { theme } from './theme'
import { DashboardPage } from './dashboardPage'
import { UserPage } from './userPage'
import { ThemeProvider } from '@mui/material/styles'
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router id='router'>
        <UserPage path='/' />
        <DashboardPage path='/dashboard' />
      </Router>
    </ThemeProvider>
  )
}
