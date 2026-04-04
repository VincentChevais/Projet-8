import './Wrapper.scss'
import Hero from '../Hero/Hero'
import About from '../About/About'
import profileImg from '../../assets/profile.webp'
import { useTranslation } from 'react-i18next'

function Wrapper() {
    const { t } = useTranslation('home')
    return (
        <section className="wrapper">
            <div className="wrapper__layout">
                <div className="wrapper__content">
                    <Hero inWrapper />
                    <About inWrapper />
                </div>

                <div className="wrapper__visual">
                    <div className="wrapper__visual-inner">
                        <div className="wrapper__line" aria-hidden="true"></div>

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