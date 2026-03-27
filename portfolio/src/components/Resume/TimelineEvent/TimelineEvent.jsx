import { forwardRef } from 'react'
import './TimelineEvent.scss'

const TimelineEvent = forwardRef(function TimelineEvent(
    { event, isActive, isUnlocked, onClick },
    ref
) {
    const eventClasses = [
        'timeline-event',
        `timeline-event--${event.side}`,
        isActive ? 'timeline-event--active' : '',
        isUnlocked ? 'timeline-event--unlocked' : '',
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <article className={eventClasses} ref={ref}>
            <div className="timeline-event__content">
                <button
                    type="button"
                    className="timeline-event__card"
                    onClick={onClick}
                    aria-expanded={isUnlocked}
                >
                    <div className="timeline-event__year">{event.year}</div>

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

            <div className="timeline-event__marker">
                <button
                    type="button"
                    className="timeline-event__dot-button"
                    onClick={onClick}
                    aria-label={`Open milestone ${event.year}`}
                    aria-pressed={isActive}
                >
                    <span className="timeline-event__dot"></span>
                </button>
            </div>
        </article>
    )
})

export default TimelineEvent