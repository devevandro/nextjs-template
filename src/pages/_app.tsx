import { ThemeProvider, Theme } from '@mui/material/styles';

import { theme } from '@styles/theme';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  );
}

export default MyApp;
