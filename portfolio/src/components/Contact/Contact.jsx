import './Contact.scss'
import Reveal from '../Reveal/Reveal'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react'

function Contact() {
    const [state, handleSubmit] = useForm('xvzvojza')

    return (
        <section className="contact" id="contact">
            <Reveal className="contact__container">
                <h2 className="section-heading">
                    <span className="section-heading__number">04.</span>
                    <span className="section-heading__text">Contact</span>
                </h2>

                <p className="contact__intro">
                    Have a project in mind or an opportunity to discuss? Feel free to reach out.
                </p>

                {!state.succeeded ? (
                    <form className="contact__form" autoComplete="on" onSubmit={handleSubmit} >
                        <div className="contact__field">
                            <label htmlFor="name">Your full name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                autoComplete="name"
                                required
                                minLength={2}
                                maxLength={60}
                                pattern="^[A-Za-zÀ-ÿ' -]{2,60}$"
                                title="Please enter a valid name."
                                placeholder="John Doe"
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                                className="contact__error"
                            />
                        </div>

                        <div className="contact__field">
                            <label htmlFor="email">Your email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                required
                                maxLength={120}
                                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                title="Please enter a valid email address."
                                placeholder="john@email.com"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="contact__error"
                            />
                        </div>

                        <div className="contact__field">
                            <label htmlFor="message">Your message</label>
                            <textarea
                                id="message"
                                name="message"
                                autoComplete="off"
                                rows="6"
                                required
                                minLength={5}
                                maxLength={1000}
                                placeholder="Tell me about your project, your opportunity, or just say hello..."
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
                            {state.submitting ? 'Sending...' : 'Send message'}
                        </button>
                    </form>
                ) : (
                    <div className="contact__success">
                        <div className="contact__sent-badge">Sent ✓</div>
                        <h3>Message sent</h3>
                        <p>Thanks for your message. I’ll get back to you as soon as possible.</p>
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
                        href="https://www.linkedin.com/in/ton-profil"
                        target="_blank"
                        rel="noreferrer"
                        className="contact__info"
                    >
                        <FaLinkedinIn />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/ton-profil"
                        target="_blank"
                        rel="noreferrer"
                        className="contact__info"
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                </div>
            </Reveal>
        </section>
    )
}

export default Contact