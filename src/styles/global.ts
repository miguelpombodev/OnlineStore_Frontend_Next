import { createGlobalStyle } from 'styled-components';

const createGlobalStyles = createGlobalStyle`
    :root {
        --black: #000000;
        --black-lighter: #333333;
        --blue-light: #6933FF;
        --blue: #5429CC;
        --darker-white: #d9d9d9;
        --gray: #969CB3;
        --gray-darker: #4D4D4D;
        --green: #33CC95;
        --main: #363f5f;
        --red: #E52E4D;
        --text-title: #363F5F;
        --white: #FFFFFF;
        --golden-yellow: #f0b022;
        
        --background: #F0F2F5;
        
        --font-default: "Bebas Neue", cursive;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

  h1, h2, h3, h4, h5, strong {
    font-weight: 600;
  }

  p {
  font-family: var(--font-default);

  }

  input, button {
    border: 0;
    border-radius: 12px;
  }
  
  button {
    cursor: pointer;
  }

  .swiper-container {
    width: 80%;
    height: 10%;
  }
  .swiper-slide {
    text-align: center;
    width: 100% !important;
  }
`;

export default createGlobalStyles;
