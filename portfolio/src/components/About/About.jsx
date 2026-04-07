// Styles
import './About.scss'
// Hooks d'animation
import useReveal from '../../hooks/useReveal'
// Hook de traduction i18n 
// Trans injecte des balises React dans les traductions
import { useTranslation, Trans } from 'react-i18next'


// Composant de la section "À propos"
function About() {

    // Fonction de traduction du namespace "home"
    const { t } = useTranslation('home')

    // Hook pour gérer l'apparition animée
    // - ref : référence attachée à l'élément à observer pour la révélation
    // - isVisible : passe à true quand l'élément devient visible à l'écran
    const { ref, isVisible } = useReveal()

    return (
        <section className="about about--wrapper" id="about">

            {/* Contenu principal du About avec animation de révélation */}
            <div ref={ref} className={`about__container reveal ${isVisible ? 'reveal--visible' : ''}`}>

                {/* Titre de la section avec numéro et texte */}
                <h2 className="section-heading">
                    <span className="section-heading__number">01.</span>
                    <span className="section-heading__text">{t('about.title')}</span>
                </h2>

                {/* Paragraphes */}
                <p>
                    {t('about.paragraph1')}
                </p>
                <p>
                    <Trans
                        t={t}
                        i18nKey="about.paragraph2"
                        components={{
                            strong: <strong />,
                            ocLink: (
                                <a
                                    href="https://www.openclassrooms.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={t('about.aria.link1')}
                                />
                            ),
                        }}
                    />
                </p>
                <p>
                    {t('about.paragraph3')}
                </p>
                <p>
                    <Trans
                        t={t}
                        i18nKey="about.paragraph4"
                        components={[<strong />]}
                    />
                </p>

                {/* Bouton d'appel à l'action */}
                <div className="about__ctas" >
                    <a href="#contact" className="about__cta" aria-label={t('about.aria.button')}>
                        {t('about.cta')}
                    </a>
                    <a href="#projects" className="about__cta" aria-label={t('about.aria.button2')}>
                        {t('about.cta2')}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About