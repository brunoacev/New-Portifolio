import GlobalStyle from "../src/global/reset";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
