import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#FF5555',
      main: '#F95151',
      dark: '#EE5555',
      // contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Lexend', 'Roboto', 'Arial'].join(','),
  },
})
