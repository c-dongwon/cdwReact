import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  body{
      font-size:15px;
      font-family: 'Noto Sans KR', sans-serif;
      color:#333;
      line-height: 1.6;      
  }
  a {
      color:#333; text-decoration: none;
  }
`

export default GlobalStyle;