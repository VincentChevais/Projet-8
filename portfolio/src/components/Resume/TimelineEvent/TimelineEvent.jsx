// Styles
import './TimelineEvent.scss'
// Hook React pour gérer les références 
import { forwardRef } from 'react'
// Hook de traduction i18n
import { useTranslation } from 'react-i18next'

// Composant représentant un événement de la timeline du CV
// forwardRef permet au parent (Timeline) de récupérer le nœud DOM de cet article
const TimelineEvent = forwardRef(function TimelineEvent(
    { event, isActive, isUnlocked, onClick },
    ref
) {
    // Fonction de traduction du namespace "resume"
    const { t } = useTranslation('resume')

    // Construit dynamiquement la liste des classes CSS du composant
    // - la classe de base est toujours présente
    // - la classe left/right dépend de event.side
    // - les classes active et unlocked sont ajoutées selon l'état
    const eventClasses = [
        'timeline-event',
        `timeline-event--${event.side}`,
        isActive ? 'timeline-event--active' : '',
        isUnlocked ? 'timeline-event--unlocked' : '',
    ]
        .filter(Boolean) // Supprime les classes vides
        .join(' ')

    return (
        // Élément racine de l'événement
        <article className={eventClasses} ref={ref}>
            {/* Zone de contenu principale à gauche ou à droite selon la classe */}
            <div className="timeline-event__content">
                {/* Carte cliquable de l'événement.*/}
                <button
                    type="button"
                    className="timeline-event__card"
                    onClick={onClick}
                    aria-expanded={isUnlocked}
                >
                    {/* Année affichée en permanence */}
                    <div className="timeline-event__year">{event.year}</div>

                    {/* 
                        Les détails complets ne s'affichent que si l'événement est débloqué.
                        => titre, description et tags.
                    */}
                    {isUnlocked && (
                        <div className="timeline-event__details">
                            <h3 className="timeline-event__title">{event.title}</h3>
                            <p className="timeline-event__description">{event.description}</p>

                            {event.tags?.length > 0 && (
                                <div className="timeline-event__tags">
                                    {event.tags.map((tag) => (
                                        <span
                                            key={tag.label}
                                            className={`timeline-event__tag timeline-event__tag--${tag.category}`}
                                        >
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </button>
            </div>

            {/* Marqueur central sur la ligne de timeline */}
            <div className="timeline-event__marker">
                <button
                    type="button"
                    className="timeline-event__dot-button"
                    onClick={onClick}
                    aria-label={t('timeline.event.ariaLabel', { year: event.year })}
                    aria-pressed={isActive}
                >
                    <span className="timeline-event__dot"></span>
                </button>
            </div>
        </article>
    )
})

export default TimelineEvent