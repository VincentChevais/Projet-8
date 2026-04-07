import { Routes, Route } from 'react-router-dom'
// Importation de la configuration des routes.
import { routes } from './router/routes'


// Composant racine de l'application et routing.
// Il parcourt la configuration des routes et génère les <Route /> dynamiquement.
function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  )
}

export default App