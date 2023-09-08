import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --lightOrange: #ffaf3b;
    --darkOrange: #ef8344;
    --lightTeal: #006f7a;
    --darkTeal: #00938c;
    --lightBlue: #105688;
    --darkBlue: #0a3d62;
    --red: #934d29;
  }

  body {
    margin: auto;
    padding: 0;
    font-family: system-ui;
    @media (min-width: 500px) {
      width: 500px;
    }
  }

  #__next {
    width:100%;
  }

  p {
    margin:0;
  }
  `;
