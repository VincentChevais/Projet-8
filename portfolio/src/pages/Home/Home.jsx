import { lazy, Suspense } from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'

const About = lazy(() => import('../../components/About/About'))
const Skills = lazy(() => import('../../components/Skills/Skills'))
const Projects = lazy(() => import('../../components/Projects/Projects'))
const Contact = lazy(() => import('../../components/Contact/Contact'))

function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />

                <Suspense fallback={null}>
                    <About />
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