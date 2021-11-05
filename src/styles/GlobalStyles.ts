import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    &::before {
      box-sizing: border-box;
    }
    &::after {
      box-sizing: border-box;
    }
  }
  html, body {
    line-height: 1;
    font-size: 10px;
    font-family: 'S-Core Dream', 'Roboto', 'Noto Sans KR', sans-serif;
    letter-spacing: -0.05rem;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.default};
    transition-property: background-color;
  }
  ol, ul, li {
    list-style: none;
  }
  button, input, select, textarea {
    background-color: transparent;
    outline: none;
    border: 0;
  }
  textarea {
    font-family: inherit;
    overflow: auto;
    outline: none;
    box-shadow: none;
    resize: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
