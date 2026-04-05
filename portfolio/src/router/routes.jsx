import Home from '../pages/Home/Home'
import Resume from '../pages/Resume/Resume'
import { PATHS } from './paths'

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