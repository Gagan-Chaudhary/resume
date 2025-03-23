import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Blue color from your PDF
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    }
  },
  typography: {
    fontFamily: 'Calibri, Arial, sans-serif',
    h1: {
      fontSize: '28px',
      fontWeight: 700,
      textTransform: 'uppercase',
      marginBottom: '4px',
    },
    h2: {
      fontSize: '22px',
      fontWeight: 600,
      color: '#2196f3',
      textTransform: 'uppercase',
      borderBottom: '2px solid #2196f3',
      paddingBottom: '4px',
      marginBottom: '12px',
    },
    h3: {
      fontSize: '18px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '16px',
    },
    body2: {
      fontSize: '14px',
    }
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          height: '24px',
          borderRadius: '12px',
          backgroundColor: '#e3f2fd',
          color: '#2196f3',
          margin: '4px',
        }
      }
    }
  }
});