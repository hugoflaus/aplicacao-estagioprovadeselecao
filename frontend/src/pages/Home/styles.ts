import styled, { css } from 'styled-components';
import home from '../../assets/home.jpg';
import rodape from '../../assets/rodape-desktop.jpg';
import homeMobile from '../../assets/home-mobile.jpg';
import rodapeMobile from '../../assets/rodape-mobile.jpg';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div`
  height: 100vh;
  background: url(${home}) no-repeat center;
  background-size: cover;

  @media (max-width: 765px) {
    background: url(${homeMobile}) no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -khtml-background-size: cover;
    -moz-background-size: cover;
  }
`;

export const Header = styled.header<ContainerProps>`
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  margin: 0 auto;

  nav {
    a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      transition: opacity 0.2s;

      & + a {
        margin-left: 32px;
      }

      &:hover {
        border-bottom: 1px solid #29abe2;
        opacity: 0.6;
      }
    }
  }
`;

export const Title = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20%;
  font-size: 25px;
`;

interface FormProps {
  hasError: boolean;
}

export const ContainerCadastro = styled.div`
  height: 100vh;
  background: #29abe2;
  background-size: cover;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div<FormProps>`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;

  h1 {
    margin-bottom: 24px;
  }

  form {
    width: auto;
    max-width: 600px;
    padding: 40px;
    input {
      background: #29abe2;
      border: none;
      border-bottom: 1px solid #fff;
      padding: 5px;
      width: 100%;
      margin-bottom: 10px;
    }

    button {
      @media (max-width: 765px) {
        width: 100%;
        margin: 30px 0;
      }
      width: 60%;
      color: #29abe2;
      background: #012d51;
      border: 0;
      font-size: 40px;
      padding: 10px;
      margin: 10% 20%;
    }
  }

  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  &::placeholder {
    color: #a8a8b3;
  }

  /*input {
    margin: 10px 0 10px 0;
    background: #29abe2;
    border: none;
    border-bottom: 2px solid #000;
    width: 400px;
  } */
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const ContainerListarCadastro = styled.div`
  margin: 0 auto;
  padding: 40px 20px;
  max-height: 950px;
  height: 100vh;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Helvetica 25 UltraLight Regular;
    font-size: 25px;
    color: #29abe2;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  table {
    width: 100%;
    border-spacing: 0 8px;
    border-collapse: collapse;
    text-align: center;
    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }

    > thead > tr > th,
    > thead > tr > td,
    > tbody > tr > th,
    > tbody > tr > td,
    > tfoot > tr > th,
    > tfoot > tr > td {
      border-bottom: 1px solid #29abe2;
      border-right: 1px solid #29abe2;
    }

    > thead > tr > :last-child,
    > tbody > tr > :last-child,
    > tfoot > tr > :last-child {
      border-right: 0;
    }

    inner-border > :last-child > tr:last-child > td,
    inner-border > :last-child > tr:last-child > th {
      border-bottom: 0;
    }
  }

  a {
    display: flex;
    margin-top: 30px;
    img {
      width: 30%;
      height: 30%;
    }
  }
`;

export const Rodape = styled.footer`
  height: 40vh;
  background: url(${rodape}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 50px;

  @media (max-width: 765px) {
    background: url(${rodapeMobile}) no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -khtml-background-size: cover;
    -moz-background-size: cover;
  }
`;
