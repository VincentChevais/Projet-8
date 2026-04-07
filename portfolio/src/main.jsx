// Styles
import './styles/main.scss'
// Importation de React et des fonctions nécessaires pour le rendu.
import { StrictMode } from 'react'
// Importation de la fonction de création du root React.
import { createRoot } from 'react-dom/client'
// Importation du composant de routage pour gérer les routes de l'application.
import { BrowserRouter } from 'react-router-dom'
// Importation du composant racine de l'application.
import App from './App.jsx'
// Initialisation de l'internationalisation (i18n).
import './trad/i18n'

// Point d'entrée de l'application React.
// - Monte l'app dans #root
// - Active le routing (BrowserRouter)
// - Active StrictMode pour détecter les problèmes potentiels en dev
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
