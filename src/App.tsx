import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import AuthLayout from './routes/Auth/AuthLayout'
import CssBaseLine from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
  ThemeProvider,
  createTheme,
  useColorScheme,
} from '@mui/material/styles'

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
})
export function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  return (
    <ThemeProvider theme={theme} noSsr>
      <BrowserRouter>
        <CssBaseLine enableColorScheme />
        <Routes>
          <Route path="/" element={<AuthLayout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
