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

  input {
    background-color: ${(props) => props.theme['gray-500']};
    border: 1px solid ${(props) => props.theme['gray-500']};
    border-radius: 8px;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 1px ${(props) => props.theme['purple-700']};
    }
  }

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 8px;
    font-weight: bold;

    background-color: ${(props) => props.theme['blue-700']};

    &:hover {
      background-color: ${(props) => props.theme['blue-500']};
      cursor: pointer;
    }
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
  }
`