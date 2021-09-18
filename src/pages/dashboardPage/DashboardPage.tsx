import { Grid, Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system'
import { RouteComponentProps } from '@reach/router'
import { FunctionComponent, useState } from 'react'
import { TopBar } from './TopBar'
import PhoneIcon from '@mui/icons-material/Phone'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonPinIcon from '@mui/icons-material/PersonPin'

export const DashboardPage: FunctionComponent<RouteComponentProps> = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <TopBar />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container sx={{ height: '100%' }}>
          <Grid item xs={5}>
            {/* Tabs go here */}
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='icon label tabs example'
              sx={{ width: '100%' }}
              centered
            >
              <Tab icon={<PhoneIcon />} sx={{ flexGrow: 1 }} label='Info' />
              <Tab icon={<FavoriteIcon />} sx={{ flexGrow: 1 }} label='Video' />
              <Tab icon={<PersonPinIcon />} sx={{ flexGrow: 1 }} label='Chat' />
            </Tabs>
          </Grid>
          <Grid item xs={7} sx={{ backgroundColor: '#ccc' }}>
            {/* Map should go here */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
