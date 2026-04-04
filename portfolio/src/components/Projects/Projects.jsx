import './Projects.scss'
import useReveal from '../../hooks/useReveal'
import { FaGithub } from 'react-icons/fa'
import { getProjectsData } from '../../data/projectsData'
import { useTranslation } from 'react-i18next'

function Projects() {
    const { t } = useTranslation(['home', 'projectsData'])
    const { ref, isVisible } = useReveal()
    const projectsData = getProjectsData(t)

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
                    {projectsData.map((project) => (
                        <article className="projects__card" key={project.id}>
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

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="projects__github"
                                        aria-label={project.aria.viewGithubCode}
                                    >
                                        <FaGithub />
                                    </a>
                                </div>

                                <p className="projects__text">{project.description}</p>

                                <div className="projects__tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects