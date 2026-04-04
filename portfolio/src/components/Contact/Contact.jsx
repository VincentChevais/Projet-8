import './Contact.scss'
import Reveal from '../Reveal/Reveal'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react'
import { useTranslation } from 'react-i18next'

function Contact() {
    const [state, handleSubmit] = useForm('xvzvojza')
    const { t } = useTranslation('home')


    return (
        <section className="contact" id="contact">
            <Reveal className="contact__container">
                <h2 className="section-heading">
                    <span className="section-heading__number">04.</span>
                    <span className="section-heading__text">{t('contact.title')}</span>
                </h2>

                <p className="contact__intro">
                    {t('contact.intro')}
                </p>

                {!state.succeeded ? (
                    <form className="contact__form" autoComplete="on" onSubmit={handleSubmit} >
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

                        <div className="contact__field">
                            <label htmlFor="message">{t('contact.form.messageLabel')}</label>
                            <textarea
                                id="message"
                                name="message"
                                autoComplete="off"
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

                        <button
                            type="submit"
                            className={`contact__cta ${state.submitting ? 'contact__cta--sending' : ''}`}
                            disabled={state.submitting}
                        >
                            {state.submitting ? t('contact.form.sending') : t('contact.form.send')}
                        </button>
                    </form>
                ) : (
                    <div className="contact__success">
                        <div className="contact__sent-badge">{t('contact.success.badge')}</div>
                        <h3>{t('contact.success.title')}</h3>
                        <p>{t('contact.success.message')}</p>
                    </div>
                )}

                <div className="contact__infos">
                    <a
                        href="mailto:v.chevais@gmail.com"
                        className="contact__info"
                    >
                        <FaEnvelope />
                        <span>v.chevais@gmail.com</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/vincent-chevais/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact__info"
                    >
                        <FaLinkedinIn />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/VincentChevais"
                        target="_blank"
                        rel="noreferrer"
                        className="contact__info"
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://www.instagram.com/xevi.deneb/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact__info"
                    >
                        <FaInstagram />
                        <span>Instagram</span>
                    </a>
                </div>
            </Reveal>
        </section>
    )
}

export default Contact