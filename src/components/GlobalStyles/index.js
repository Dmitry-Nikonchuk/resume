import { createGlobalStyle } from "styled-components";
import * as normalizeCss from 'normalize.css';

const GlobalStyles = createGlobalStyle`
  {normalizeCss}

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyles;
