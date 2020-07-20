import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    color:#fff;
    -webkit-font-smoothing: antialiased;
  }


  button{
    cursor: pointer;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 500;
  }

  input{
    color: #fff;
  }

`;
