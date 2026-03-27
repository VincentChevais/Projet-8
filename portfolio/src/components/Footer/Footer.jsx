import './Footer.scss'
import { FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">
                    Designed and built with care © {new Date().getFullYear()}
                </p>

                <div className="footer__links">
                    <a
                        href="https://github.com/ton-profil/ton-portfolio"
                        target="_blank"
                        rel="noreferrer"
                        className="footer__link"
                    >
                        <FaGithub />
                        <span>View portfolio repository</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer