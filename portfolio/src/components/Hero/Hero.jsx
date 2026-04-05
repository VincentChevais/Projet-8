import './Hero.scss'
import { ArrowDown } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import profilePhoto from '../../assets/profile.webp'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { PATHS } from '../../router/paths'

/*
  Le composant Hero reçoit une prop "inWrapper".
  Permet d’ajouter une classe conditionnelle si Hero est utilisé
  à l’intérieur d’un wrapper particulier.
  - false → si aucune prop n’est envoyée, le Hero fonctionne normalement
*/
function Hero({ inWrapper = false }) {
    const { t } = useTranslation('home')
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