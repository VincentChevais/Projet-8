import './CompletionModal.scss'
import { useEffect } from 'react'
import { X } from 'lucide-react'

function CompletionModal({
    isOpen,
    onClose,
    character,
    finalCharacter,
    event,
}) {
    useEffect(() => {
        if (!isOpen) return

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        window.addEventListener('keydown', handleEscape)

        return () => window.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose])

    if (!isOpen || !event || !character || !finalCharacter) return null

    return (
        <div
            className={`completion-modal ${isOpen ? 'completion-modal--open' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="completion-modal-title"
        >
            <div
                className="completion-modal__overlay"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="completion-modal__content">
                <button
                    type="button"
                    className="completion-modal__close"
                    onClick={onClose}
                    aria-label="Close completion modal"
                >
                    <X size={20} />
                </button>

                <div className="completion-modal__header">
                    <div className="completion-modal__character-stage">
                        <div className="completion-modal__character completion-modal__character--current">
                            <div className="completion-modal__avatar-wrapper">
                                <img
                                    src={character.image}
                                    alt={character.label}
                                    className="completion-modal__avatar"
                                />
                            </div>

                            <p className="completion-modal__label">
                                {character.label}
                            </p>
                        </div>

                        <div className="completion-modal__character completion-modal__character--developer">
                            <div className="completion-modal__avatar-wrapper completion-modal__avatar-wrapper--glow">
                                <img
                                    src={finalCharacter.image}
                                    alt={finalCharacter.label}
                                    className="completion-modal__avatar"
                                />
                            </div>

                            <p className="completion-modal__label completion-modal__label--developer">
                                {finalCharacter.label}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="completion-modal__body">
                    <p className="completion-modal__year">{event.year}</p>

                    <h2
                        id="completion-modal-title"
                        className="completion-modal__title"
                    >
                        {event.title}
                    </h2>

                    <p className="completion-modal__description">
                        {event.description}
                    </p>

                    <div className="completion-modal__tags">
                        {event.tags?.map((tag) => (
                            <span
                                key={`${event.id}-${tag.label}`}
                                className={`completion-modal__tag completion-modal__tag--${tag.category}`}
                            >
                                {tag.label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompletionModal