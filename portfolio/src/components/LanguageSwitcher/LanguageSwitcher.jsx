// Styles
import './LanguageSwitcher.scss'
// Hooks de traduction i18n
import { useTranslation } from 'react-i18next'

// Composant de switch de langue
const LanguageSwitcher = () => {
    // t : traduction
    // i18n : accès à la langue actuelle et à la fonction changeLanguage
    const { t, i18n } = useTranslation('common')

    // Détermine la langue active (français ou anglais)
    const currentLanguage = i18n.resolvedLanguage || i18n.language

    // Détermine si la langue active est le français
    const isFrench = currentLanguage?.startsWith('fr')

    // Fonction pour changer la langue
    const handleToggle = (lng) => {
        if (!currentLanguage?.startsWith(lng)) {
            i18n.changeLanguage(lng)
        }
    }

    return (
        // Conteneur des boutons
        <div
            className={`language-switcher ${isFrench ? 'is-fr' : 'is-en'}`}
            role="group"
            aria-label="Language switcher"
        >
            {/* Curseur de sélection animé */}
            <span className="language-switcher__thumb" aria-hidden="true" />

            {/* Bouton français */}
            <button
                type="button"
                className={`language-switcher__option ${isFrench ? 'active' : ''}`}
                onClick={() => handleToggle('fr')}
                aria-label={t('languageSwitcher.fr')}
                aria-pressed={isFrench}
            >
                <span className="language-switcher__flag">🇫🇷</span>
            </button>

            {/* Bouton anglais */}
            <button
                type="button"
                className={`language-switcher__option ${!isFrench ? 'active' : ''}`}
                onClick={() => handleToggle('en')}
                aria-label={t('languageSwitcher.en')}
                aria-pressed={!isFrench}
            >
                <span className="language-switcher__flag">🇬🇧</span>
            </button>
        </div>
    )
}

export default LanguageSwitcher