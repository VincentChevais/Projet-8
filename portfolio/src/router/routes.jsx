// Pages de l'application
import Home from '../pages/Home/Home'
import Resume from '../pages/Resume/Resume'
// Constantes de chemins de navigation
import { PATHS } from './paths'

// Tableau de configuration des routes de l'application.
// Chaque objet associe un chemin à un composant de page.
export const routes = [
    {
        path: PATHS.home,
        element: <Home />,
    },
    {
        path: PATHS.resume,
        element: <Resume />,
    },
]