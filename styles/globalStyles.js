import { createGlobalStyle } from 'styled-components';
import { device } from '@styles/device'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    font-family: Raleway, sans-serif;
    margin: 0 32px;
    min-width: 350px;
    padding-top: calc(76px + 64px); // space for nav bar
    @media ${device.tablet} { 
      margin: 0 64px;
    }
  }
`;

export default GlobalStyle;