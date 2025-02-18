import { createGlobalStyle } from 'styled-components'

export const Colors = {
  white: '#eee',
  black: '#111',
  gray: '#ffebd9',
  lightGray: '#A3A3A3',
  mainPink: '#E66767',
  darkPink: '#FFEBD9',
  green: '#10AC84',
  background: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }

    body {
        background-color: ${Colors.black};
        color: ${Colors.white};
        padding-top: 40px;
    }

    .container{
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
  `
