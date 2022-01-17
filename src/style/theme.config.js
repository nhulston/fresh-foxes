import { createGlobalStyle } from 'styled-components'

export const theme = {
    black: '#131313',
    navbarColor: '#131313E8',
    footerColor: 'black',
    white: '#FFFFFF',
    gray: '#00000022',
    secondary: '#C62467',
    buttonGrad1: '#ff029a',
    buttonGrad2: '#c002ff',
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
    background: ${(props) => props.theme.black};
    scroll-padding-top: 200px;
  }

  body {
    cursor: default;
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
    color: inherit;
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