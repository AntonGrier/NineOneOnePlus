import { Router, Link } from '@reach/router'
import { DashboardPage } from './dashboardPage'
import { UserPage } from './userPage'
export const App = () => {
  return (
    <Router id='router'>
      <UserPage path='/' />
      <DashboardPage path='dashboard' />
    </Router>
  )
}
