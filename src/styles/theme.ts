import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0080ED',
    },
    secondary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#000000',
    },
    error: {
      main: '#FF0000',
    },
  },
  typography: {
    fontFamily: "'Barlow'",
    h1: {
      display: 'flex',
      fontFamily: 'Barlow',
      fontSize: '38px',
      color: 'black',
      fontWeight: 700,
      justifyContent: 'center',
      marginTop: '35px',
      marginBottom: '25px',
    },
    h2: {
      fontFamily: 'Barlow',
      fontSize: 24,
      lineHeight: '25px',
      color: 'black',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Barlow',
      fontSize: 17,
      lineHeight: '20px',
      margin: '12px 0 20px 0 ',
    },
    h4: {
      fontFamily: 'Barlow, ExtraLight',
      margin: '0 8px 0 8px',
      fontSize: '16px',
      color: 'black',
      fontWeight: 100,
      opacity: 0.8,
    },
    h5: {
      fontSize: 16,
      fontFamily: 'Barlow',
      fontWeight: 520,
      textTransform: 'none',
      color: 'primary',
    },
    h6: {
      fontSize: 13,
      fontFamily: 'Barlow',
      textTransform: 'none',
      color: '#707070',
    },
    body1: {
      fontFamily: 'IBM Plex Sans',
      fontSize: 16,
      lineHeight: '20px',
    },
    overline: {
      fontFamily: 'Barlow',
      fontSize: 16,
      lineHeight: '19px',
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
