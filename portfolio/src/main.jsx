import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import App from './App.jsx'
import './trad/i18n'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
