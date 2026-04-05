// Styles
import './Contact.scss'
// Hooks d'animation
import useReveal from '../../hooks/useReveal'
// Icônes des réseaux sociaux
import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram } from 'react-icons/fa'
// Formulaire avec Formspree
import { useForm, ValidationError } from '@formspree/react'
// Hook de traduction i18n
import { useTranslation } from 'react-i18next'

// Composant de la section "Contact"
function Contact() {

    // useForm : hook de Formspree pour gérer l'état du formulaire et la soumission
    // - state : contient l'état du formulaire (succès, erreurs, envoi en cours)
    // - handleSubmit : fonction à appeler lors du submit
    const [state, handleSubmit] = useForm('xvzvojza')

    // Fonction de traduction du namespace "home"
    const { t } = useTranslation('home')

    // Hook pour gérer l'apparition animée
    // - ref : référence attachée à l'élément à observer pour la révélation
    // - isVisible : passe à true quand l'élément devient visible à l'écran
    const { ref, isVisible } = useReveal()

    return (
        <section className="contact" id="contact">

            {/* Contenu principal du Contact avec animation de révélation */}
            <div
                ref={ref}
                className={`contact__container reveal ${isVisible ? 'reveal--visible' : ''}`}
            >

                {/* Titre de la section avec numéro et texte */}
                <h2 className="section-heading">
                    <span className="section-heading__number">04.</span>
                    <span className="section-heading__text">{t('contact.title')}</span>
                </h2>

                {/* Introduction avant le formulaire */}
                <p className="contact__intro">
                    {t('contact.intro')}
                </p>

                {/* Formulaire de contact */}
                {/* Affiche le formulaire tant que l'envoi n'est pas réussi, sinon affiche un message de succès */}
                {!state.succeeded ? (
                    <form className="contact__form" autoComplete="on" onSubmit={handleSubmit}>

                        {/* Champ nom avec validation et message d'erreur */}
                        <div className="contact__field">
                            <label htmlFor="name">{t('contact.form.nameLabel')}</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                autoComplete="name"
                                required
                                minLength={2}
                                maxLength={60}
                                pattern="^[A-Za-zÀ-ÿ' -]{2,60}$"
                                title={t('contact.form.nameError')}
                                placeholder={t('contact.form.namePlaceholder')}
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                                className="contact__error"
                            />
                        </div>

                        {/* Champ email avec validation et message d'erreur */}
                        <div className="contact__field">
                            <label htmlFor="email">{t('contact.form.emailLabel')}</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                required
                                maxLength={120}
                                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                title={t('contact.form.emailError')}
                                placeholder={t('contact.form.emailPlaceholder')}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="contact__error"
                            />
                        </div>

                        {/* Champ message avec validation et message d'erreur */}
                        <div className="contact__field">
                            <label htmlFor="message">{t('contact.form.messageLabel')}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                required
                                minLength={5}
                                maxLength={1000}
                                placeholder={t('contact.form.messagePlaceholder')}
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                                className="contact__error"
                            />
                        </div>

                        {/* Bouton d'envoi avec état de soumission */}
                        <button
                            type="submit"
                            className={`contact__cta ${state.submitting ? 'contact__cta--sending' : ''}`}
                            disabled={state.submitting}
                        >
                            {state.submitting ? t('contact.form.sending') : t('contact.form.send')}
                        </button>
                    </form>
                ) : (
                    /* Message de succès après envoi réussi */
                    <div className="contact__success">
                        <div className="contact__sent-badge">{t('contact.success.badge')}</div>
                        <h3>{t('contact.success.title')}</h3>
                        <p>{t('contact.success.message')}</p>
                    </div>
                )}

                {/* Liens vers les réseaux sociaux */}
                <div className="contact__infos">
                    <a
                        href="mailto:v.chevais@gmail.com"
                        className="contact__info"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                        <span>v.chevais@gmail.com</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/vincent-chevais/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact__info"
                        aria-label="LinkedIn"

                    >
                        <FaLinkedinIn />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/VincentChevais"
                        target="_blank"
                        rel="noreferrer"
                        className="contact__info"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://www.instagram.com/xevi.deneb/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact__info"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </section >
    )
}

export default Contact