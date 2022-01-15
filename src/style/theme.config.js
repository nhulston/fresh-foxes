import { createGlobalStyle } from 'styled-components'

export const theme = {
    background: '#160A6D',
    backgroundOpacity: '#160A6DEE',
    white: '#FEFEFE',
    black: '#12183A',
    secondary: '#C04CFD',
    secondaryGradient: '#5c00ff',
    openAnimation: '#0b0537',
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