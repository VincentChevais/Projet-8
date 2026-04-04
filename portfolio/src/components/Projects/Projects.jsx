import './Projects.scss'
import { useState } from 'react'
import useReveal from '../../hooks/useReveal'
import { FaGithub } from 'react-icons/fa'
import { getProjectsData } from '../../data/projectsData'
import { useTranslation } from 'react-i18next'
import ProjectModal from '../ProjectModal/ProjectModal'

function Projects() {
    const { t } = useTranslation(['home', 'projectsData'])
    const { ref, isVisible } = useReveal()
    const projectsData = getProjectsData(t)

    const [activeIndex, setActiveIndex] = useState(null)

    const openModal = (index) => {
        setActiveIndex(index)
    }

    const closeModal = () => {
        setActiveIndex(null)
    }

    const showPrevProject = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        )
    }

    const showNextProject = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
        )
    }

    return (
        <section className="projects" id="projects">
            <div
                ref={ref}
                className={`projects__container reveal ${isVisible ? 'reveal--visible' : ''}`}
            >
                <div className="projects__header">
                    <h2 className="section-heading">
                        <span className="section-heading__number">03.</span>
                        <span className="section-heading__text">
                            {t('projects.title', { ns: 'home' })}
                        </span>
                    </h2>

                    <p className="projects__description">
                        {t('projects.description', { ns: 'home' })}
                    </p>
                </div>

                <div className="projects__grid">
                    {projectsData.map((project, index) => (
                        <article className="projects__card" key={project.id}>
                            <button
                                type="button"
                                className="projects__card-button"
                                onClick={() => openModal(index)}
                                aria-label={project.aria.openProject}
                            >
                                <div className="projects__image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.aria.imgAlt}
                                        className="projects__image"
                                    />
                                </div>

                                <div className="projects__content">
                                    <div className="projects__top">
                                        <h3 className="projects__title">{project.title}</h3>

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="projects__github"
                                                aria-label={project.aria.viewGithubCode}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FaGithub />
                                            </a>
                                        )}
                                    </div>

                                    <p className="projects__text">{project.description}</p>

                                    <div className="projects__tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </button>
                        </article>
                    ))}
                </div>
            </div>

            {activeIndex !== null && (
                <ProjectModal
                    project={projectsData[activeIndex]}
                    currentIndex={activeIndex}
                    totalProjects={projectsData.length}
                    onClose={closeModal}
                    onPrev={showPrevProject}
                    onNext={showNextProject}
                />
            )}
        </section>
    )
}

export default Projects