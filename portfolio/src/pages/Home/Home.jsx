import { lazy, Suspense } from 'react'
import Header from '../../components/Header/Header'
import Wrapper from '../../components/Wrapper/Wrapper'
import Footer from '../../components/Footer/Footer'

const Skills = lazy(() => import('../../components/Skills/Skills'))
const Projects = lazy(() => import('../../components/Projects/Projects'))
const Contact = lazy(() => import('../../components/Contact/Contact'))

function Home() {
    return (
        <>
            <Header />
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