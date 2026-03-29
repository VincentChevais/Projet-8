import './Projects.scss'
import Reveal from '../Reveal/Reveal'
import { FaGithub } from 'react-icons/fa'
import projectsData from '../../data/projectsData'

function Projects() {
    return (
        <section className="projects" id="projects">
            <Reveal className="projects__container">
                <div className="projects__header">
                    <h2 className="section-heading">
                        <span className="section-heading__number">03.</span>
                        <span className="section-heading__text">Projects</span>
                    </h2>

                    <p className="projects__description">
                        A selection of projects that helped me strengthen my front-end and
                        back-end skills through concrete, hands-on development challenges.
                    </p>
                </div>

                <div className="projects__grid">
                    {projectsData.map((project) => (
                        <article className="projects__card" key={project.id}>
                            <div className="projects__image-wrapper">
                                <img
                                    src={project.image}
                                    alt={`Preview of ${project.title}`}
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
                                        aria-label={`Open GitHub repository for ${project.title}`}
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
            </Reveal>
        </section>
    )
}

export default Projects