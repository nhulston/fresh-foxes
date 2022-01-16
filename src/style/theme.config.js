import { createGlobalStyle } from 'styled-components'

export const theme = {
    background: '#131313',
    backgroundOpacity: '#131313E8',
    white: '#FFFFFF',
    gray: '#00000022',
    black: '#12183A',
    secondary: '#FF0302',
    secondaryGradient: '#5c00ff',
    openAnimation: '#0F0F0F',
}

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    background: ${(props) => props.theme.background};
    scroll-padding-top: 200px;
  }

  body {
    cursor: default;
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
  }

  li{
    list-style: none;
  }

  button {
    border: none;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  
`;