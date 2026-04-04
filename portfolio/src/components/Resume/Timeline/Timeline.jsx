import './Timeline.scss'
import { useEffect, useRef } from 'react'
import TimelineEvent from '../TimelineEvent/TimelineEvent'
import { useTranslation } from 'react-i18next'

function Timeline({
    events,
    activeEventId,
    selectedEventIds,
    onEventClick,
}) {
    const eventRefs = useRef({})
    const { t } = useTranslation('resume')

    useEffect(() => {
        const activeNode = eventRefs.current[activeEventId]
        if (!activeNode) return

        activeNode.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
    }, [activeEventId])

    return (
        <section className="timeline" aria-labelledby="timeline-title">
            <div className="timeline__header">
                <h2 id="timeline-title" className="timeline__title">
                    {t('timeline.title')}
                </h2>
                <p className="timeline__subtitle">
                    {t('timeline.subtitle')}
                </p>
            </div>

            <div className="timeline__wrapper">
                <div className="timeline__line" aria-hidden="true"></div>

                <div className="timeline__events">
                    {events.map((event) => (
                        <TimelineEvent
                            key={event.id}
                            ref={(node) => {
                                eventRefs.current[event.id] = node
                            }}
                            event={event}
                            isActive={activeEventId === event.id}
                            isUnlocked={selectedEventIds.includes(event.id)}
                            onClick={() => onEventClick(event.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline