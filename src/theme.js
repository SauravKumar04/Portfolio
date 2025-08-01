import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B415FF',
      light: '#D665FF',
      dark: '#8A0FCC',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#DF8909',
      light: '#FFB23D',
      dark: '#B56E00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#161513',
      paper: 'rgba(30, 30, 30, 0.98)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.85)',
    },
    success: {
      main: '#4CAF50',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: '4.5rem',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      '@media (max-width:900px)': {
        fontSize: '3.2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      '@media (max-width:900px)': {
        fontSize: '2.8rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.005em',
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:900px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6,
      '@media (max-width:600px)': {
        fontSize: '1.125rem',
      },
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      letterSpacing: '0.01em',
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px !important',
          paddingRight: '24px !important',
          '@media (max-width:600px)': {
            paddingLeft: '16px !important',
            paddingRight: '16px !important',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          padding: '14px 32px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
            transition: 'left 0.6s ease',
          },
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
            '&::before': {
              left: '100%',
            },
          },
          '&:active': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #DF8909 0%, #B415FF 100%)',
          color: '#ffffff',
          '&:hover': {
            background: 'linear-gradient(135deg, #FFB23D 0%, #D665FF 100%)',
            boxShadow: '0 12px 40px rgba(180, 21, 255, 0.4)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          color: '#ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            borderWidth: '2px',
            borderColor: '#B415FF',
            backgroundColor: 'rgba(180, 21, 255, 0.15)',
            boxShadow: '0 8px 30px rgba(180, 21, 255, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 30, 30, 0.98)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
          },
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(180, 21, 255, 0.2)',
            border: '1px solid rgba(180, 21, 255, 0.3)',
            '&::before': {
              background: 'linear-gradient(90deg, transparent, rgba(180, 21, 255, 0.4), transparent)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, rgba(223, 137, 9, 0.15) 0%, rgba(180, 21, 255, 0.15) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          fontWeight: 500,
          fontSize: '0.875rem',
          padding: '8px 4px',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(135deg, rgba(223, 137, 9, 0.25) 0%, rgba(180, 21, 255, 0.25) 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 15px rgba(180, 21, 255, 0.2)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(180, 21, 255, 0.4)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#B415FF',
              borderWidth: '2px',
              boxShadow: '0 0 0 4px rgba(180, 21, 255, 0.1)',
            },
            '&.Mui-focused': {
              background: 'rgba(255, 255, 255, 0.08)',
            },
          },
          '& .MuiInputLabel-outlined': {
            '&.Mui-focused': {
              color: '#B415FF',
            },
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 8,
          borderRadius: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
        },
        bar: {
          borderRadius: 4,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            animation: 'shimmer 2s infinite',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(22, 21, 19, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        },
      },
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0px 2px 8px rgba(0, 0, 0, 0.12)',
    '0px 4px 16px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.18)',
    '0px 12px 32px rgba(0, 0, 0, 0.22)',
    '0px 16px 40px rgba(0, 0, 0, 0.25)',
    '0px 20px 48px rgba(180, 21, 255, 0.15)',
    '0px 24px 56px rgba(223, 137, 9, 0.15)',
    '0px 32px 64px rgba(0, 0, 0, 0.3)',
    '0px 40px 80px rgba(0, 0, 0, 0.35)',
    ...Array(15).fill('0px 48px 96px rgba(0, 0, 0, 0.4)'),
  ],
});

export default theme;