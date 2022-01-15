import React from "react";
import {ThemeProvider} from "styled-components";
import {GlobalStyles, theme} from "../style/theme.config";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <Component {...pageProps}/>
      </ThemeProvider>
  );
}

export default MyApp
