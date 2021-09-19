import { Grid, Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system'
import { RouteComponentProps } from '@reach/router'
import { FunctionComponent, useEffect, useState } from 'react'
import { TopBar } from './TopBar'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import TextsmsIcon from '@mui/icons-material/Textsms'
import PhoneIcon from '@mui/icons-material/Phone'
import { GeoMap } from '../../ui'
import { TabPanel } from './TabPanel'
import { InfoTab, VideoTab } from './Tabs'
import { ChatTab } from './Tabs/ChatTab'
import { getTwilioToken } from './Tabs/VideoTab/utils'

export const DashboardPage: FunctionComponent<RouteComponentProps> = () => {
  const [value, setValue] = useState(0)
  const [token, setToken] = useState<string | undefined>(undefined)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  // fetch twilio token
  useEffect(() => {
    const fetchTwilioToken = async () => {
      try {
        const token = await getTwilioToken('username') // TODO: fill in username with something?
        setToken(token)
      } catch (err) {
        console.log(err)
      } finally {
        // do something
      }
    }

    fetchTwilioToken()
  }, [])

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
          <Grid item xs={5} sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* Tabs go here */}
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='icon label tabs example'
              sx={{ width: '100%' }}
              centered
            >
              <Tab
                icon={<AccountBoxIcon />}
                sx={{ flexGrow: 1 }}
                label='Info'
              />
              <Tab icon={<PhoneIcon />} sx={{ flexGrow: 1 }} label='Calls' />
              <Tab icon={<TextsmsIcon />} sx={{ flexGrow: 1 }} label='Chat' />
            </Tabs>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              <TabPanel value={value} index={0} p={3}>
                <InfoTab />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <VideoTab />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ChatTab />
              </TabPanel>
            </Box>
          </Grid>
          <Grid item xs={7} sx={{ backgroundColor: '#ccc' }}>
            <GeoMap></GeoMap>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
