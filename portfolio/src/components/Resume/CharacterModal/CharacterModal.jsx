import './CharacterModal.scss'
import { useTranslation } from 'react-i18next'

function CharacterModal({ characters, onSelectCharacter }) {
    const { t } = useTranslation('resume')

    return (
        <div className="character-modal" role="dialog" aria-modal="true" aria-labelledby="character-modal-title">
            <div className="character-modal__overlay"></div>

            <div className="character-modal__content">
                <h1 id="character-modal-title" className="character-modal__title">
                    {t('characterModal.title')}
                </h1>

                <p className="character-modal__subtitle">
                    {t('characterModal.subtitle')}
                </p>

                <div className="character-modal__list">
                    {characters.map((character) => (
                        <button
                            key={character.id}
                            type="button"
                            className="character-modal__item"
                            onClick={() => onSelectCharacter(character)}
                        >
                            <div className="character-modal__avatar-wrapper">
                                <img
                                    src={character.image}
                                    alt={character.label}
                                    className="character-modal__avatar"
                                />
                            </div>

                            <span className="character-modal__label">{character.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CharacterModal