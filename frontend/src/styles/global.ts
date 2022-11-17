import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;
