import './Projects.scss'
import Reveal from '../Reveal/Reveal'
import { FaGithub } from 'react-icons/fa'

import sophieImg from '../../assets/projects/sophie-bluel.webp'
import kasaImg from '../../assets/projects/kasa.webp'
import grimoireImg from '../../assets/projects/mon-vieux-grimoire.webp'

const projects = [
    {
        title: "Sophie Bluel – Architecte d'intérieur",
        image: sophieImg,
        description:
            "Development of a dynamic portfolio in JavaScript with API integration, project filtering, and an admin interface. This project also introduced me to Agile working methods.",
        tags: ['JavaScript', 'API', 'Agile'],
        github: 'https://github.com/VincentChevais/OC_Project_3',
    },
    {
        title: 'Kasa',
        image: kasaImg,
        description:
            "Creation of a responsive real estate application with React and Sass, based on reusable components and a clean front-end architecture.",
        tags: ['React', 'Sass', 'React Router'],
        github: 'https://github.com/VincentChevais/kasa',
    },
    {
        title: 'Mon Vieux Grimoire',
        image: grimoireImg,
        description:
            "Back-end development of a book rating API with Node.js, Express and MongoDB, including authentication, CRUD operations and secure data handling.",
        tags: ['Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/VincentChevais/P7-Dev-Web-livres-main',
    },
]

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
                    {projects.map((project) => (
                        <article className="projects__card" key={project.title}>
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