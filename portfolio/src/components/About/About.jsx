import './About.scss'
import useReveal from '../../hooks/useReveal'
import { useTranslation, Trans } from 'react-i18next'

function About({ inWrapper = false }) {
    const { t } = useTranslation('home')
    const { ref, isVisible } = useReveal()
    return (
        <section className={`about ${inWrapper ? 'about--wrapper' : ''}`} id="about">
            <div ref={ref} className={`about__container reveal ${isVisible ? 'reveal--visible' : ''}`}>

                <div className="about__content">
                    <h2 className="section-heading">
                        <span className="section-heading__number">01.</span>
                        <span className="section-heading__text">{t('about.title')}</span>
                    </h2>

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
                    <a href="#contact" className="about__cta" aria-label={t('about.aria.button')}>
                        {t('about.cta')}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About