import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4DBBEE',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Lexend', 'Roboto', 'Arial'].join(','),
  },
})
