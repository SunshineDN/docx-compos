import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @page {
    size: A4;
    margin: 10mm 10mm 10mm;
  }

  html {
    font-size: 135%;
    font-family: 'Inter', sans-serif;
  }

  #invisible {
    display: none;
  }
`;
