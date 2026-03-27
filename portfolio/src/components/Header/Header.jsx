import { useState } from 'react'
import './Header.scss'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    return (
        <header className="header">
            <div className="header__container">

                <div className="header__logo" onClick={ScrollToTop} role="button" tabIndex={0} aria-label="Scroll to top">
                    &lt;dev /&gt;
                </div>

                <nav className="header__nav header__nav--desktop">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <Link to="/resume">Resume</Link>
                </nav>

                <button
                    className="header__burger"
                    type="button"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <nav className={`header__mobile ${isOpen ? 'header__mobile--open' : ''}`}>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
                <Link to="/resume" onClick={closeMenu}>
                    Resume
                </Link>
            </nav>
        </header>
    )
}

export default Header