// Styles 
import './Wrapper.scss'
// Composants enfants
import Hero from '../Hero/Hero'
import About from '../About/About'
// Photo de profil
import profileImg from '../../assets/profile.webp'
// Hook de traduction i18n
import { useTranslation } from 'react-i18next'

// Composant de la section "Wrapper" qui englobe Hero et About avec une mise en page spécifique
function Wrapper() {
    // Fonction de traduction du namespace "home"
    const { t } = useTranslation('home')
    return (
        <section className="wrapper">
            <div className="wrapper__layout">
                {/* Colonne principale : contenu textuel et sections */}
                <div className="wrapper__content">
                    <Hero />
                    <About />
                </div>

                {/* Colonne visuelle affichée sur les desktops */}
                <div className="wrapper__visual">
                    <div className="wrapper__visual-inner">
                        {/* Ligne décorative verticale */}
                        <div className="wrapper__line" aria-hidden="true"></div>

                        {/* Ligne décorative verticale */}
                        <div className="wrapper__photo-shell">
                            <div className="wrapper__photo-wrapper">
                                <img
                                    src={profileImg}
                                    alt={t('hero.aria.image')}
                                    className="wrapper__photo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wrapper