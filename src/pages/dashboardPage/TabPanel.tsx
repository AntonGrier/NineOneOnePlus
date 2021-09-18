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
        display: value === index ? 'block' : 'none',
        boxSizing: 'border-box',
        height: '100%',
        ...other,
      }}
    >
      {children}
    </Box>
  )
}
