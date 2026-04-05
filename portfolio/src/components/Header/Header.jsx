// Styles
import './Header.scss'
// Hook pour gérer l'état local du menu mobile
import { useState } from 'react'
// Icônes du bouton burger
import { Menu, X } from 'lucide-react'
// Composant de navigation interne React Router
import { Link } from 'react-router-dom'
// Constantes centralisant les routes de l'application
import { PATHS } from '../../router/paths'
// Hook personnalisé pour remonter en haut de la page
import useScrollToTop from '../../hooks/useScrollToTop'
// Composant permettant de changer la langue du site
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
// Hook de traduction i18n
import { useTranslation } from 'react-i18next'

// Composant Header
// Le prop "variant" permet d'adapter le contenu selon la page affichée
function Header({ variant = 'home' }) {
    // État du menu mobile (ouvert ou fermé)
    const [isOpen, setIsOpen] = useState(false)

    // Fonction de traduction du namespace "common"
    const { t } = useTranslation('common')

    // Fonction qui remonte la page en haut
    const scrollToTop = useScrollToTop()

    // Indique si le header est utilisé sur la page "resume"
    const isResume = variant === 'resume'

    // Ferme le menu mobile
    const closeMenu = () => setIsOpen(false)

    // Liste centralisée des liens d'ancrage de la page d'accueil
    const navItems = [
        { href: '#about', label: t('header.nav.about') },
        { href: '#skills', label: t('header.nav.skills') },
        { href: '#projects', label: t('header.nav.projects') },
        { href: '#contact', label: t('header.nav.contact') },
    ]

    // Génère les liens de navigation
    // Le paramètre isMobile ferme le menu mobile au clic
    const renderNavLinks = (isMobile = false) => {
        // Cas spécial : sur la page résumé, on n'affiche qu'un lien de retour à l'accueil
        if (isResume) {
            return (
                <Link to={PATHS.home} onClick={isMobile ? closeMenu : undefined}>
                    {t('header.nav.backHome')}
                </Link>
            )
        }

        // Cas standard : sur la page d'accueil, on affiche les liens vers les sections
        return navItems.map(({ href, label }) => (
            <a
                key={href}
                href={href}
                onClick={isMobile ? closeMenu : undefined}
            >
                {label}
            </a>
        ))
    }

    return (
        // En-tête principal du site
        <header className="header">
            <div className="header__container">

                {/* Logo cliquable */}
                <button
                    className="header__logo"
                    type="button"
                    onClick={scrollToTop}
                    aria-label={t('header.aria.scrollTop')}
                >
                    &lt;dev /&gt;
                </button>

                {/* Navigation desktop */}
                <nav
                    className="header__nav header__nav--desktop"
                    aria-label={t('header.aria.mainNav')}
                >
                    {renderNavLinks()}
                    <LanguageSwitcher />
                </nav>

                {/* Bouton burger sur mobile */}
                <button
                    className="header__burger"
                    type="button"
                    aria-label={
                        isOpen
                            ? t('header.aria.closeMenu')
                            : t('header.aria.openMenu')
                    }
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {/* Icône dynamique selon l'état du menu */}
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Navigation mobile repliable */}
            <nav
                id="mobile-navigation"
                className={`header__mobile ${isOpen ? 'header__mobile--open' : ''}`}
                aria-label={t('header.aria.mobileNav')}
            >
                {renderNavLinks(true)}
                <LanguageSwitcher />
            </nav>
        </header>
    )
}


export default Header