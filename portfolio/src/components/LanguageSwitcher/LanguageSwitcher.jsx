import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.scss'

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation('common')

    const currentLanguage = i18n.resolvedLanguage || i18n.language
    const isFrench = currentLanguage?.startsWith('fr')

    const handleToggle = (lng) => {
        if (!currentLanguage?.startsWith(lng)) {
            i18n.changeLanguage(lng)
        }
    }

    return (
        <div
            className={`language-switcher ${isFrench ? 'is-fr' : 'is-en'}`}
            role="group"
            aria-label="Language switcher"
        >
            <span className="language-switcher__thumb" aria-hidden="true" />

            <button
                type="button"
                className={`language-switcher__option ${isFrench ? 'active' : ''}`}
                onClick={() => handleToggle('fr')}
                aria-label={t('languageSwitcher.fr')}
                aria-pressed={isFrench}
            >
                <span className="language-switcher__flag">🇫🇷</span>
            </button>

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