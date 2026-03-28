import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const currentLanguage = i18n.resolvedLanguage || i18n.language;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher">
            <button
                type="button"
                onClick={() => changeLanguage('fr')}
                className={currentLanguage?.startsWith('fr') ? 'active' : ''}
                aria-label="Passer le site en français"
            >
                🇫🇷 FR
            </button>

            <button
                type="button"
                onClick={() => changeLanguage('en')}
                className={currentLanguage?.startsWith('en') ? 'active' : ''}
                aria-label="Switch site language to English"
            >
                🇬🇧 EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;