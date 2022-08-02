import '../styles/global.css'
import { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App({ Component, pageProps }: AppProps) {
    return <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider> 
}