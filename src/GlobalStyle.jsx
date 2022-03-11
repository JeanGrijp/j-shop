import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');



  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #F8F3E9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Noto Serif', serif; */
  }
`;