import { createGlobalStyle } from 'styled-components';

// https://www.npmjs.com/package/@fontsource/noto-sans-kr -> 폰트 쉽게 적용해봤는데 bold 처리가 안되서 일단 롤백함
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    margin: 0;
    padding: 0;
  }
  body {
    height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  ol, ul, li {
    list-style: none;
  }
  span {
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
  }
  #root {
    width: 100%;
    min-height: 100vh;
  }
  select { 
    -webkit-appearance: none; /* 네이티브 외형 감추기 */ 
    -moz-appearance: none; 
    appearance: none; 
  }
  /* IE 10, 11의 네이티브 화살표 숨기기 */ 
  select::-ms-expand { 
    display: none; 
  }
  .fade-appear, .fade-enter {
    opacity: 0;
    transform: translateX(30px);
  }
  .fade-appear-active, .fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 300ms linear 150ms;
  }
  .fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 150ms linear;
  }
`;

export default GlobalStyle;
