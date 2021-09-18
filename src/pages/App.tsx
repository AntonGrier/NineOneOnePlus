import { Router, Link } from '@reach/router'
import { DashboardPage } from './dashboardPage'
import { UserPage } from './userPage'
import { CallPage } from './userPage/call'
export const App = () => {
  return (
    <Router id='router'>
      <UserPage path='/' />
      <DashboardPage path='dashboard' />
      <CallPage path='call' />
    </Router>
  )
}
