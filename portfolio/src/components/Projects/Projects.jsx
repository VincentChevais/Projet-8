// Styles
import './Projects.scss'
// Hook React pour gérer l'état local et les effets de bord
import { useState } from 'react'
// Hook personnalisé pour gérer les animations de révélation
import useReveal from '../../hooks/useReveal'
import useIsMobile from '../../hooks/useIsMobile.js'
// Icône GitHub
import { FaGithub } from 'react-icons/fa'
// Fonction pour récupérer les données des projets
import { getProjectsData } from '../../data/projectsData'
// Hook de traduction i18n 
import { useTranslation } from 'react-i18next'
// Composant de modal pour afficher les projets
import ProjectModal from '../ProjectModal/ProjectModal'

// Composant de la section "Projects"
function Projects() {
    // Fonction de traduction du namespace "home" et "projectsData"
    const { t } = useTranslation(['home', 'projectsData'])

    // Gestion d'animation au scroll en fonction du media query
    const isMobile = useIsMobile()
    const revealOptions = isMobile
        ? {
            threshold: 0.01,
            rootMargin: '0px 0px -10% 0px',
        }
        : {
            threshold: 0.15,
            rootMargin: '0px',
        }
    // Hook d'animation au scroll 
    const { ref, isVisible } = useReveal(revealOptions)

    // Récupération des données des projets avec traduction
    const projectsData = getProjectsData(t)

    // Index du projet actuellement affiché dans la modal
    // null si aucune modal n'est ouverte
    const [activeIndex, setActiveIndex] = useState(null)

    // Ouvre la modal pour le projet à l'index donné
    const openModal = (index) => {
        setActiveIndex(index)
    }

    // Ferme la modal en réinitialisant l'index actif
    const closeModal = () => {
        setActiveIndex(null)
    }

    // Affiche le projet précédent dans la modal
    // Si on est au début de la liste, revient au dernier projet
    const showPrevProject = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        )
    }

    // Affiche le projet suivant dans la modal
    // Si on est à la fin de la liste, revient au premier projet
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
                {/* En-tête de section */}
                <div className="projects__header">
                    <h2 className="section-heading">
                        <span className="section-heading__number">02.</span>
                        <span className="section-heading__text">
                            {t('projects.title', { ns: 'home' })}
                        </span>
                    </h2>

                    <p className="projects__description">
                        {t('projects.description', { ns: 'home' })}
                    </p>
                </div>

                {/* Grille des cartes projet */}
                <div className="projects__grid">
                    {projectsData.map((project, index) => (
                        <article className="projects__card" key={project.id}>
                            {/* Le bouton entier de la carte est cliquable pour ouvrir la modal */}
                            <button
                                type="button"
                                className="projects__card-button"
                                onClick={() => openModal(index)}
                                aria-label={project.aria.openProject}
                            >
                                {/* Image du projet avec wrapper pour le style */}
                                <div className="projects__image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.aria.imgAlt}
                                        className="projects__image"
                                    />
                                </div>

                                {/* Contenu de la carte projet : titre, description et tags */}
                                <div className="projects__content">
                                    <div className="projects__top">
                                        <h3 className="projects__title">{project.title}</h3>

                                        {/* Lien vers le code GitHub du projet, affiché si l'URL est présente */}
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