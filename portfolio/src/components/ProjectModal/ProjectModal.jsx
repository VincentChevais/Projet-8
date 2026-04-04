import './ProjectModal.scss'
import { useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function ProjectModal({
    project,
    currentIndex,
    totalProjects,
    onClose,
    onPrev,
    onNext,
}) {
    const { t } = useTranslation('home')

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') onPrev()
            if (e.key === 'ArrowRight') onNext()
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [onClose, onPrev, onNext])

    if (!project) return null

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className="project-modal"
            onClick={handleOverlayClick}
            role="presentation"
        >
            <button
                type="button"
                className="project-modal__nav project-modal__nav--prev"
                onClick={onPrev}
                aria-label={t('modal.previous')}
            >
                <ChevronLeft size={28} />
            </button>

            <button
                type="button"
                className="project-modal__nav project-modal__nav--next"
                onClick={onNext}
                aria-label={t('modal.next')}
            >
                <ChevronRight size={28} />
            </button>
            <div
                className="project-modal__dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                aria-describedby="project-modal-description"
            >
                <button
                    type="button"
                    className="project-modal__close"
                    onClick={onClose}
                    aria-label={t('modal.close')}
                >
                    <X size={22} />
                </button>



                <div className="project-modal__media">
                    <img
                        src={project.image}
                        alt={project.aria?.imgAlt || project.title}
                        className="project-modal__image"
                    />
                </div>

                <div className="project-modal__content">
                    <div className="project-modal__header">
                        <p className="project-modal__counter">
                            {currentIndex + 1} / {totalProjects}
                        </p>

                        {(project.year || project.role) && (
                            <p className="project-modal__meta">
                                {project.year && <span>{project.year}</span>}
                                {project.year && project.role && <span> • </span>}
                                {project.role && <span>{project.role}</span>}
                            </p>
                        )}

                        <h3 id="project-modal-title" className="project-modal__title">
                            {project.title}
                        </h3>
                    </div>

                    <p
                        id="project-modal-description"
                        className="project-modal__description"
                    >
                        {project.longDescription || project.description}
                    </p>

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal