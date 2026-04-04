import { lazy, Suspense } from 'react'
import Header from '../../components/Header/Header'
import Wrapper from '../../components/Wrapper/Wrapper'
import Footer from '../../components/Footer/Footer'
import useScrollToTop from '../../hooks/useScrollToTop'

const Skills = lazy(() => import('../../components/Skills/Skills'))
const Projects = lazy(() => import('../../components/Projects/Projects'))
const Contact = lazy(() => import('../../components/Contact/Contact'))

function Home() {
    useScrollToTop()
    return (
        <>
            <Header variant="home" />
            <main>
                <Wrapper />

                <Suspense fallback={null}>
                    <Skills />
                    <Projects />
                    <Contact />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}

export default Home