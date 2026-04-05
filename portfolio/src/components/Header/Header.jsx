import { useState } from 'react'
import './Header.scss'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import useScrollToTop from '../../hooks/useScrollToTop'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { PATHS } from '../../router/paths'

function Header({ variant = 'home' }) {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation('common')
    const closeMenu = () => setIsOpen(false)
    const scrollToTop = useScrollToTop()

    const isResume = variant === 'resume'

    return (
        <header className="header">
            <div className="header__container">

                <div
                    className="header__logo"
                    onClick={scrollToTop}
                    role="button"
                    tabIndex={0}
                    aria-label={t('header.aria.scrollTop')}
                >
                    &lt;dev /&gt;
                </div>

                {/* DESKTOP NAV */}
                <nav className="header__nav header__nav--desktop">
                    {isResume ? (
                        <>
                            <Link to={PATHS.home}>
                                {t('header.nav.backHome')}
                            </Link>
                        </>
                    ) : (
                        <>
                            <a href="#about">{t('header.nav.about')}</a>
                            <a href="#skills">{t('header.nav.skills')}</a>
                            <a href="#projects">{t('header.nav.projects')}</a>
                            <a href="#contact">{t('header.nav.contact')}</a>
                        </>
                    )}

                    <LanguageSwitcher />
                </nav>

                {/* BURGER */}
                <button
                    className="header__burger"
                    type="button"
                    aria-label={
                        isOpen
                            ? t('header.aria.closeMenu')
                            : t('header.aria.openMenu')
                    }
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE NAV */}
            <nav className={`header__mobile ${isOpen ? 'header__mobile--open' : ''}`}>
                {isResume ? (
                    <>
                        <Link to={PATHS.home} onClick={closeMenu}>
                            {t('header.nav.backHome')}
                        </Link>
                    </>
                ) : (
                    <>
                        <a href="#about" onClick={closeMenu}>{t('header.nav.about')}</a>
                        <a href="#skills" onClick={closeMenu}>{t('header.nav.skills')}</a>
                        <a href="#projects" onClick={closeMenu}>{t('header.nav.projects')}</a>
                        <a href="#contact" onClick={closeMenu}>{t('header.nav.contact')}</a>
                    </>
                )}

                <LanguageSwitcher />
            </nav>
        </header>
    )
}

export default Header