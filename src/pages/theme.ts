import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#44CCEE',
      main: '#4DBBEE',
      dark: '#44AAEE',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Lexend', 'Roboto', 'Arial'].join(','),
  },
})
