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

.title { 
  margin: 0;
  position: fixed;
  text-align: center;
  top: 14rem;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  z-index: 1;
  @media (min-width: 500px) {
    width: 500px;
  }}

  .subtitle {
    color: teal;
    width: 90%;
    text-align: center;
    font-size: 1.4em;
    margin: 2rem 0 0.6rem 0;
  }

  .label {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    text-align: center;
  }

  .invisibleLabel {
    font-size: 0;
  }

  .defaultInput {
    color: darkgrey;
    font-size: 1rem;
    border-radius: 2rem;
    padding: 0.4rem 1rem;
    background-color: white;
  }

  .lowkeyInput {
    padding: 0.3rem 0.6rem;
    border: none;
    font-size:1rem;
    &::placeholder {
    opacity: 1;
  }
    &:hover {
      border: 1px solid darkgrey;
      border-radius: 0.3rem;  
    }
    &:focus {
      border: 1px solid darkgrey;
      border-radius: 0.3rem;
      outline: none;
    }
  }

  .mainContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    @media (min-width: 500px) {
     width: 500px;
    }
  }

  .loadingAnimation {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 50vw;
  }
`;
