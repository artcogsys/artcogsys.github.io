import "../styles/global.css";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "../styles/global.css";
import styles from "../styles/utils.module.css";
import Footer from "../components/footer";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

/**
 * Wrapper Component: Wraps a Next App and the Material CSS around the content of the website.
 * @param Component The component to wrap around.
 * @param pageProps The props that should be hoisted to the Component.
 * @returns 
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
            <Footer></Footer>
      
    </ThemeProvider>
  );
}
