import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#68A4C4',
      light: '#85b6cf',
      dark: '#1e4356',
    },
    secondary: {
      main: '#4fa6d5',
      light: '#45beff',
    },
    background: {
      default: '#f3f8fa',
      paper: '#fff',
    },
    text: {
      primary: '#444',
      secondary: '#666',
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      fontSize: '48px',
    },
    h2: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      fontSize: '28px',
    },
    h3: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      fontSize: '26px',
    },
    h4: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 600,
      fontSize: '18px',
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '14px',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e4356',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontWeight: 500,
          padding: '12px 32px',
        },
        contained: {
          backgroundColor: '#68A4C4',
          '&:hover': {
            backgroundColor: '#85b6cf',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 5px 26px 0 rgba(68, 88, 144, 0.14)',
          borderRadius: '8px',
        },
      },
    },
  },
})

export default theme
