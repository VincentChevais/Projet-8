// Styles
import './Timeline.scss'

// Hook React pour gérer les références et les effets de cycle de vie
import { useEffect, useRef } from 'react'

// Composant de la timeline du CV
import TimelineEvent from '../TimelineEvent/TimelineEvent'

// Hook de traduction i18n 
import { useTranslation } from 'react-i18next'

// Composant de la section "Timeline" du CV
function Timeline({
    events,
    activeEventId,
    selectedEventIds,
    onEventClick,
}) {
    // Objet de références vers les nœuds DOM de chaque événement
    const eventRefs = useRef({})

    // Fonction de traduction du namespace "resume"
    const { t } = useTranslation('resume')

    useEffect(() => {
        // Récupère le nœud correspondant à l'événement actif
        const activeNode = eventRefs.current[activeEventId]

        // Si aucun nœud n'est trouvé, on ne fait rien
        if (!activeNode) return

        // Fait défiler la timeline pour centrer l'événement actif à l'écran
        activeNode.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
    }, [activeEventId])

    return (
        <section className="timeline" aria-labelledby="timeline-title">
            {/* En-tête de section */}
            <div className="timeline__header">
                <h2 id="timeline-title" className="timeline__title">
                    {t('timeline.title')}
                </h2>
                <p className="timeline__subtitle">
                    {t('timeline.subtitle')}
                </p>
            </div>

            {/* Zone contenant la ligne verticale et les événements */}
            <div className="timeline__wrapper">
                {/* Ligne décorative centrale */}
                <div className="timeline__line" aria-hidden="true"></div>

                {/* Liste des événements */}
                <div className="timeline__events">
                    {events.map((event) => (
                        <TimelineEvent
                            key={event.id}
                            // Stocke la référence DOM de chaque événement dans eventRefs.current
                            ref={(node) => {
                                eventRefs.current[event.id] = node
                            }}
                            // Données de l'événement
                            event={event}
                            // Indique si l'événement correspond à l'évènement actif 
                            isActive={activeEventId === event.id}
                            // Indique si l'événement a déjà été débloqué / sélectionné
                            isUnlocked={selectedEventIds.includes(event.id)}
                            // Gestion du clic sur un événement
                            onClick={() => onEventClick(event.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline