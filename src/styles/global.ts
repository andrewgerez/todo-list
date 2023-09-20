import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-600']};
    -webkitfont-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
    line-height: 1.4;
  }
`