// Styles
import './CompletionModal.scss'
// Librairie de gestion de focus pour les modales
import { FocusTrap } from 'focus-trap-react'
// Hook React pour gérer les effets de cycle de vie
import { useEffect } from 'react'
// Icône de fermeture
import { X } from 'lucide-react'

// Composant de modal de complétion
function CompletionModal({
    isOpen,
    onClose,
    character,
    finalCharacter,
    event,
}) {
    useEffect(() => {
        // Si la modale n'est pas ouverte, on ne fait rien
        if (!isOpen) return

        // Ferme la modale avec la touche Échap
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        window.addEventListener('keydown', handleEscape)

        // Nettoyage à la fermeture ou au démontage du composant
        return () => window.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose])

    // Si les données nécessaires ne sont pas disponibles,
    // la modale ne s'affiche pas
    if (!isOpen || !event || !character || !finalCharacter) return null

    return (
        <FocusTrap
            active={isOpen}
            focusTrapOptions={{
                returnFocusOnDeactivate: false,
                onDeactivate: () => {
                    if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur()
                    }
                }
            }}
        >
            <div
                className={`completion-modal ${isOpen ? 'completion-modal--open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="completion-modal-title"
            >
                {/* Overlay cliquable pour fermer la modale */}
                <div
                    className="completion-modal__overlay"
                    onClick={onClose}
                    aria-hidden="true"
                />

                {/* Fenêtre de contenu */}
                <div className="completion-modal__content">
                    {/* Bouton de fermeture dans le coin supérieur droit */}
                    <button
                        type="button"
                        className="completion-modal__close"
                        onClick={onClose}
                        aria-label="Close completion modal"
                    >
                        <X size={20} />
                    </button>

                    {/* En-tête visuel avec transition du personnage actuel vers la version finale */}
                    <div className="completion-modal__header">
                        <div className="completion-modal__character-stage">
                            {/* Personnage actuel */}
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

                            {/* Personnage final / transformé */}
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

                    {/* Corps de la modale */}
                    <div className="completion-modal__body">
                        <p className="completion-modal__year">{event.year}</p>

                        {/* Titre principal */}
                        <h2
                            id="completion-modal-title"
                            className="completion-modal__title"
                        >
                            {event.title}
                        </h2>

                        {/* Description de l'événement */}
                        <p className="completion-modal__description">
                            {event.description}
                        </p>

                        {/* Liste des tags associés à l'événement */}
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
        </FocusTrap >
    )
}

export default CompletionModal