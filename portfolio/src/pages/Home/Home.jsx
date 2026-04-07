// Outils React pour le chargement différé de certains composants
import { lazy, Suspense } from 'react'
// Composants toujours chargés immédiatement
import Header from '../../components/Header/Header'
import Wrapper from '../../components/Wrapper/Wrapper'
import Footer from '../../components/Footer/Footer'
// Hook qui remonte automatiquement en haut de page au changement de route
import useScrollToTop from '../../hooks/useScrollToTop'

// Chargement différé des sections plus basses de la page
// Cela permet d'alléger le chargement initial
const Skills = lazy(() => import('../../components/Skills/Skills'))
const Projects = lazy(() => import('../../components/Projects/Projects'))
const Contact = lazy(() => import('../../components/Contact/Contact'))

// Page d'accueil
function Home() {
    // Remonte en haut de page à l'arrivée sur la route
    useScrollToTop()

    return (
        <>
            {/* En-tête principal */}
            <Header variant="home" />

            {/* Contenu principal de la page */}
            <main>
                {/* Partie haute : Hero + About via le composant Wrapper */}
                <Wrapper />

                {/* 
                    Les sections suivantes sont chargées en lazy.
                    fallback={null} signifie qu'aucun loader visuel n'est affiché
                    pendant leur chargement.
                */}
                <Suspense fallback={null}>
                    <Projects />
                    <Skills />
                    <Contact />
                </Suspense>
            </main>

            {/* Pied de page */}
            <Footer />
        </>
    )
}

export default Home