import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'sonner'
import { ThemeProvider } from 'styled-components'

import { Dashboard } from './pages/Dashboard'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Toaster richColors />
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>,
)
