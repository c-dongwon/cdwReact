//npm i styled-reset 리셋설치 명령어
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  body{
    font-size: 15px;
    font-family: 'Noto Sans KR', sans-serif;
    color: #fff;
    background-color: #333;
  }
  a{
    color:red;
    text-decoration: none;
  }
`

export default GlobalStyle;