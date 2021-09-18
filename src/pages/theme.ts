import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#44CCEE',
      main: '#4DBBEE',
      dark: '#44AAEE',
    },
  },
  typography: {
    fontFamily: ['Lexend', 'Roboto', 'Arial'].join(','),
  },
})
