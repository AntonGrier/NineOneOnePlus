import { Box } from '@mui/material'
import { SystemCssProperties } from '@mui/system'

interface TabPanelProps extends SystemCssProperties {
  children?: React.ReactNode
  index: number
  value: number
}

export function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <Box
      sx={{
        display: value === index ? 'flex' : 'none',
        boxSizing: 'border-box',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        ...other,
      }}
    >
      {children}
    </Box>
  )
}
