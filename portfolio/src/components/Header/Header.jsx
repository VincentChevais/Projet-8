import { useState } from 'react'
import './Header.scss'
import { Menu, X } from 'lucide-react'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation('common')
    const closeMenu = () => setIsOpen(false)

    return (
        <header className="header">
            <div className="header__container">

                <div className="header__logo" onClick={ScrollToTop} role="button" tabIndex={0} aria-label={t('header.aria.logo')}>
                    &lt;dev /&gt;
                </div>

                <nav className="header__nav header__nav--desktop">
                    <a href="#about">{t('header.nav.about')}</a>
                    <a href="#skills">{t('header.nav.skills')}</a>
                    <a href="#projects">{t('header.nav.projects')}</a>
                    <a href="#contact">{t('header.nav.contact')}</a>
                    <LanguageSwitcher />
                </nav>

                <button
                    className="header__burger"
                    type="button"
                    aria-label={isOpen ? t('header.aria.closeMenu') : t('header.aria.openMenu')}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <nav className={`header__mobile ${isOpen ? 'header__mobile--open' : ''}`}>
                <a href="#about" onClick={closeMenu}>{t('header.nav.about')}</a>
                <a href="#skills" onClick={closeMenu}>{t('header.nav.skills')}</a>
                <a href="#projects" onClick={closeMenu}>{t('header.nav.projects')}</a>
                <a href="#contact" onClick={closeMenu}>{t('header.nav.contact')}</a>
                <LanguageSwitcher />
            </nav>
        </header>
    )
}

export default Header