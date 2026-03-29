import './Hero.scss'
import { ArrowDown } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import profilePhoto from '../../assets/profile.webp'

/*
  Le composant Hero reçoit une prop "inWrapper".
  Permet d’ajouter une classe conditionnelle si Hero est utilisé
  à l’intérieur d’un wrapper particulier.
  - false → si aucune prop n’est envoyée, le Hero fonctionne normalement
*/
function Hero({ inWrapper = false }) {
    return (
        <section className={`hero ${inWrapper ? 'hero--wrapper' : ''}`} id="hero">
            {/* Réseaux sociaux */}
            <div className="hero__socials">
                <a
                    href="https://www.linkedin.com/in/vincent-chevais/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn />
                </a>

                <a
                    href="https://github.com/VincentChevais"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.instagram.com/xevi.deneb/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
            </div>

            {/* Contenu principal du Hero */}
            <div className="hero__container">
                <p className="hero__intro">Hi, my name is</p>

                <h1 className="hero__name">Vincent Chevais</h1>

                <h2 className="hero__tagline">
                    I build things with <span>React & Sass</span>.
                </h2>

                <p className="hero__description">
                    Front-end developer passionate about clean design, scalable
                    architectures, and crafting pixel-perfect interfaces.
                </p>
                <p className="hero__description">
                    Based in Dax, Nouvelle-Aquitaine, France.
                </p>

                {/*Version mobile de la photo.*/}
                <div className="hero__mobile-photo" aria-hidden="true">
                    <div className="hero__mobile-photo-wrapper">
                        <img
                            src={profilePhoto}
                            alt=""
                            className="hero__mobile-photo-img"
                        />
                    </div>
                </div>

                {/* Appels à l’action */}
                <div className="hero__actions">
                    <a
                        href="/cv.pdf"
                        className="hero__button hero__button--cv"
                        download="CV-Vincent-Chevais.pdf"
                    >
                        Download CV
                    </a>
                    <a href="#projects" className="hero__button hero__button--primary">
                        View my work
                    </a>
                </div>
            </div>

            {/*Scroll vers About */}
            <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
                <ArrowDown />
            </a>
        </section>
    )
}

export default Hero