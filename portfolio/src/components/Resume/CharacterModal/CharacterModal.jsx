// Styles
import './CharacterModal.scss'

// Hook de traduction i18n
import { useTranslation } from 'react-i18next'

// Composant de modal pour la sélection d'un personnage
function CharacterModal({ characters, onSelectCharacter }) {

    // Fonction de traduction du namespace "resume"
    const { t } = useTranslation('resume')

    return (
        <div className="character-modal" role="dialog" aria-modal="true" aria-labelledby="character-modal-title">
            {/* Overlay visuel derrière la modale */}
            <div className="character-modal__overlay"></div>

            {/* Fenêtre de contenu au-dessus de l'overlay */}
            <div className="character-modal__content">
                {/* Titre principal de la modale */}
                <h1 id="character-modal-title" className="character-modal__title">
                    {t('characterModal.title')}
                </h1>

                {/* Sous-titre */}
                <p className="character-modal__subtitle">
                    {t('characterModal.subtitle')}
                </p>

                {/* Liste des personnages disponibles */}
                <div className="character-modal__list">
                    {characters.map((character) => (
                        <button
                            key={character.id}
                            type="button"
                            className="character-modal__item"
                            onClick={() => onSelectCharacter(character)}
                        >
                            {/* Avatar du personnage */}
                            <div className="character-modal__avatar-wrapper">
                                <img
                                    src={character.image}
                                    alt={character.label}
                                    className="character-modal__avatar"
                                />
                            </div>

                            {/* Libellé du personnage */}
                            <span className="character-modal__label">{character.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CharacterModal