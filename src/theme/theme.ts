import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7c3aed', // violet-600
      light: '#a78bfa',
      dark: '#5b21b6',
    },
    secondary: {
      main: '#06b6d4', // cyan-500
      light: '#22d3ee',
      dark: '#0891b2',
    },
    background: {
      default: '#0b0f19', // base canvas
      paper: '#111827', // elevated surfaces
    },
    text: {
      primary: '#e5e7eb',
      secondary: '#9ca3af',
    },
    divider: 'rgba(148,163,184,0.2)'
  },
  typography: {
    fontFamily: 'Inter, "IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '48px',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '32px',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '24px',
    },
    h4: {
      fontWeight: 600,
      fontSize: '18px',
    },
    body1: {
      fontSize: '16px',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '14px',
      lineHeight: 1.6,
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0b0f19',
          backgroundImage: 'linear-gradient(to right, rgba(124,58,237,0.12), rgba(6,182,212,0.12))',
          boxShadow: '0 1px 0 0 rgba(148,163,184,0.12)'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 18px',
        },
        containedPrimary: {
          backgroundImage: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
          color: '#0b0f19',
          '&:hover': {
            filter: 'brightness(1.05)'
          }
        },
        outlined: {
          borderColor: 'rgba(124,58,237,0.5)',
          '&:hover': {
            borderColor: '#7c3aed',
            backgroundColor: 'rgba(124,58,237,0.08)'
          }
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))',
          boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
          borderRadius: '14px',
          border: '1px solid rgba(148,163,184,0.12)'
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        }
      }
    }
  },
})

export default theme
