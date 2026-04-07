// Styles 
import './ProjectModal.scss'
// Hook React pour gérer les effets de cycle de vie
import { useEffect } from 'react'
// Icône GitHub
import { FaGithub } from 'react-icons/fa'
// Icônes de navigation et fermeture
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
// Hook de traduction i18n
import { useTranslation } from 'react-i18next'

// Composant de modale affichant le détail d'un projet
function ProjectModal({
    project,
    currentIndex,
    totalProjects,
    onClose,
    onPrev,
    onNext,
}) {
    // Fonction de traduction du namespace "home"
    const { t } = useTranslation('home')

    useEffect(() => {
        // Empêche le scroll de la page derrière la modale
        document.body.style.overflow = 'hidden'

        // Gestion des raccourcis clavier :
        // - Échap : fermer
        // - Flèche gauche : projet précédent
        // - Flèche droite : projet suivant
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') onPrev()
            if (e.key === 'ArrowRight') onNext()
        }

        window.addEventListener('keydown', handleKeyDown)

        // Nettoyage à la fermeture / au démontage
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [onClose, onPrev, onNext])

    // Si aucun projet n'est fourni, on n'affiche rien
    if (!project) return null

    // Ferme la modale uniquement si on clique sur l'overlay,
    // et non sur le contenu interne
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className="project-modal"
            onClick={handleOverlayClick}
            aria-hidden="true"
        >
            {/* Bouton de navigation vers le projet précédent */}
            <button
                type="button"
                className="project-modal__nav project-modal__nav--prev"
                onClick={onPrev}
                aria-label={t('modal.previous')}
            >
                <ChevronLeft size={28} />
            </button>

            {/* Bouton de navigation vers le projet suivant */}
            <button
                type="button"
                className="project-modal__nav project-modal__nav--next"
                onClick={onNext}
                aria-label={t('modal.next')}
            >
                <ChevronRight size={28} />
            </button>

            {/* Fenêtre principale de dialogue */}
            <div
                className="project-modal__dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                aria-describedby="project-modal-description"
            >
                {/* Bouton de fermeture */}
                <button
                    type="button"
                    className="project-modal__close"
                    onClick={onClose}
                    aria-label={t('modal.close')}
                >
                    <X size={22} />
                </button>

                {/* Zone média : image du projet */}
                <div className="project-modal__media">
                    <img
                        src={project.image}
                        alt={project.aria?.imgAlt || project.title}
                        className="project-modal__image"
                    />
                </div>

                {/* Contenu textuel de la modale */}
                <div className="project-modal__content">
                    <div className="project-modal__header">
                        {/* Compteur de position dans la liste des projets */}
                        <p className="project-modal__counter">
                            {currentIndex + 1} / {totalProjects}
                        </p>

                        {/* Métadonnées : année et/ou rôle */}
                        {(project.year || project.role) && (
                            <p className="project-modal__meta">
                                {project.year && <span>{project.year}</span>}
                                {project.year && project.role && <span> • </span>}
                                {project.role && <span>{project.role}</span>}
                            </p>
                        )}

                        {/* Titre principal du projet */}
                        <h3 id="project-modal-title" className="project-modal__title">
                            {project.title}
                        </h3>
                    </div>

                    {/* Description longue du projet si disponible, sinon description courte */}
                    <p
                        id="project-modal-description"
                        className="project-modal__description"
                    >
                        {project.longDescription || project.description}
                    </p>

                    {/* Liste des fonctionnalités si elle existe */}
                    {project.features?.length > 0 && (
                        <div className="project-modal__section">
                            <h4 className="project-modal__section-title">
                                {t('modal.featuresTitle')}
                            </h4>

                            <ul className="project-modal__features">
                                {project.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Liste des technologies / tags si elle existe */}
                    {project.tags?.length > 0 && (
                        <div className="project-modal__section">
                            <h4 className="project-modal__section-title">
                                {t('modal.stackTitle')}
                            </h4>

                            <div className="project-modal__tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-modal__tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Liens externes : code source, démo live, label éventuel */}
                    <div className="project-modal__links">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="project-modal__link"
                                aria-label={
                                    project.aria?.viewGithubCode ||
                                    `${t('modal.github')} ${project.title}`
                                }
                            >
                                <FaGithub />
                                <span>{t('modal.github')}</span>
                            </a>
                        )}

                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="project-modal__link"
                                aria-label={`${t('modal.liveDemo')} ${project.title}`}
                            >
                                <ExternalLink size={18} />
                                <span>{t('modal.liveDemo')}</span>
                            </a>
                        )}

                        {/* Label complémentaire du projet */}
                        <p className="project-modal__tag">
                            {project.label}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal