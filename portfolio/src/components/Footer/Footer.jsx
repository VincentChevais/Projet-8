import './Footer.scss'
import { FaGithub } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

function Footer() {
    const { t } = useTranslation('common')
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">
                    {t('footer.text', { year: new Date().getFullYear() })}
                </p>

                <div className="footer__links">
                    <a
                        href="https://github.com/ton-profil/ton-portfolio"
                        target="_blank"
                        rel="noreferrer"
                        className="footer__link"
                    >
                        <FaGithub />
                        <span>{t('footer.repo')}</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer