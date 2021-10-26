import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`
export default GlobalStyle;

export const device = {
  mobileSS: `(max-width: 350px)`,
  mobileS: `(max-width: 400px)`,
  mobile: `(max-width: 480px)`,
  mobileL: `(max-width: 600px)`,
  tablet: `(max-width: 769px)`,
  laptopS:`(max-width: 900px)`,
  laptop: `(max-width: 1060px)`,
  desktopS: `(max-width: 1366px)`,
  desktopM: `(max-width: 1660px)`,
  desktopL: `(max-width: 2560px)`,
};
