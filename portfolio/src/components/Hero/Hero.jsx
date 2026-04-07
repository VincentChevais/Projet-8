// Styles
import './Hero.scss'
// SVG
import { ArrowDown } from 'lucide-react'
// Icônes des réseaux sociaux
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
// Photo de profil
import profilePhoto from '../../assets/profile.webp'
// Hook de traduction i18n
import { useTranslation } from 'react-i18next'
// Composant de navigation interne React Router
import { Link } from 'react-router-dom'
// Constantes centralisant les routes de l'application
import { PATHS } from '../../router/paths'

// Composant de la section "Hero"
function Hero() {
    // Fonction de traduction du namespace "home"
    const { t } = useTranslation('home')
    return (
        <section className="hero " id="hero">

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
                <p className="hero__intro">{t('hero.title')}</p>

                <h1 className="hero__name">Vincent Chevais</h1>

                <h2 className="hero__tagline">
                    {t('hero.tagline')}<span>React & Sass</span>.
                </h2>

                <p className="hero__description">
                    {t('hero.description1')}
                </p>
                <p className="hero__description">
                    {t('hero.description2')}
                </p>

                {/*Version mobile de la photo.*/}
                <div className="hero__mobile-photo" aria-hidden="true">
                    <div className="hero__mobile-photo-wrapper">
                        <img
                            src={profilePhoto}
                            alt={t('hero.aria.image')}
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
                        aria-label={t('hero.aria.downloadCv')}
                    >
                        {t('hero.downloadCv')}
                    </a>

                    <Link to={PATHS.resume}
                        className="hero__button hero__button--primary"
                        aria-label={t('hero.aria.viewWork')}
                    >
                        {t('hero.viewWork')}
                    </Link>

                </div>
            </div>

            {/*Scroll vers About */}
            <a href="#about" className="hero__scroll" aria-label={t('hero.aria.scroll')}>
                <ArrowDown />
            </a>
        </section>
    )
}

export default Hero