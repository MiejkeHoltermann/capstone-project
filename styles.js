import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    font-family: system-ui;
    width: 360px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
    padding-bottom: 1rem;
  }
`;
