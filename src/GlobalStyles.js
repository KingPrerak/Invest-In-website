import { createGlobalStyle } from 'styled-components';
import nav from './images/rev.jpg'
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  src: url('/fonts/Poppins-Regular.ttf') format('truetype');
  /* Add more font variations if needed (e.g., bold, italic) */
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {npm start

    font-family: 'Sedan SC'; /* Use Sedan SC as the primary font */
    background: url(${nav}) no-repeat center center; // Set the background image
    background-size: cover;
    color: #333;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    background-color: FFFFFF;
    color: #000000;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: white;
  }
`;

export default GlobalStyle;
