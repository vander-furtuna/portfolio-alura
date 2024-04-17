import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*  {
  margin: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

html, body {
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.gray[900]};
  scroll-behavior: smooth;
}

  /* width */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.gray[900]};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.primary[300]};
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.primary[500]};
}

`
