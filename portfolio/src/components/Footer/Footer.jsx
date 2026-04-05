//Styles
import './Footer.scss'
// Icône GitHub
import { FaGithub } from 'react-icons/fa'
// Hook de traduction i18n
import { useTranslation } from 'react-i18next'

// Composant "Footer"
function Footer() {

    // URL du dépôt GitHub du projet
    const REPO_URL = "https://github.com/ton-profil/ton-portfolio"

    // Fonction de traduction du namespace "common"
    const { t } = useTranslation('common')

    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Texte de copyright avec année dynamique */}
                <p className="footer__text">
                    {t('footer.text', { year: new Date().getFullYear() })}
                </p>

                {/* Liens vers le dépôt GitHub */}
                <div className="footer__links">
                    <a
                        href={REPO_URL}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer__link"
                        aria-label={t('footer.aria')}
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