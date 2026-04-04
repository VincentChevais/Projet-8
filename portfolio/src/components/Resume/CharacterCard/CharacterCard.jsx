import './CharacterCard.scss'
import { useEffect, useRef, useState } from 'react'
import { Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function CharacterCard({
    character,
    fullName,
    profileData,
    isJourneyComplete = false,
    showCompletionBanner = false,
}) {
    const {
        birthdate,
        location,
        drivingLicence,
        languages,
        diplomas,
        hobbies,
        hardSkills,
        softSkills,
    } = profileData

    const [newTags, setNewTags] = useState([])
    const prevTagsRef = useRef([])
    const { t } = useTranslation('resume')

    useEffect(() => {
        const currentTagIds = [
            ...(birthdate ? [`misc-birthdate-${birthdate}`] : []),
            ...(location ? [`misc-location-${location}`] : []),
            ...(drivingLicence ? [`misc-driving-${drivingLicence}`] : []),
            ...(languages || []).map((item) => `misc-language-${item}`),
            ...(diplomas || []).map((item) => `diploma-${item}`),
            ...(hobbies || []).map((item) => `hobby-${item}`),
            ...(hardSkills || []).map((item) => `skill-${item}`),
            ...(softSkills || []).map((item) => `skill-${item}`),
        ]

        const prevTagIds = prevTagsRef.current
        const addedTagIds = currentTagIds.filter((tag) => !prevTagIds.includes(tag))

        if (addedTagIds.length > 0) {
            setNewTags(addedTagIds)

            const timeout = setTimeout(() => {
                setNewTags([])
            }, 1400)

            prevTagsRef.current = currentTagIds

            return () => clearTimeout(timeout)
        }

        prevTagsRef.current = currentTagIds
    }, [
        birthdate,
        location,
        drivingLicence,
        languages,
        diplomas,
        hobbies,
        hardSkills,
        softSkills,
    ])

    const renderTags = (items, emptyLabel, category, extraClass = '') => {
        if (!items || items.length === 0) {
            return <span className="character-card__empty">{emptyLabel}</span>
        }

        return items.map((item) => {
            const tagId =
                category === 'misc'
                    ? `misc-language-${item}`
                    : `${category}-${item}`

            const isNew = newTags.includes(tagId)

            return (
                <span
                    key={`${category}-${item}`}
                    className={`character-card__tag character-card__tag--${category} ${extraClass} ${isNew ? 'character-card__tag--new' : ''
                        }`}
                >
                    {item}
                </span>
            )
        })
    }

    return (
        <section
            className={`character-card ${isJourneyComplete ? 'character-card--completed' : ''
                }`}
            aria-labelledby="character-card-title"
        >
            {showCompletionBanner && (
                <div className="character-card__completion-banner">
                    <div className="character-card__completion-text">
                        <p className="character-card__completion-eyebrow">
                            {t('characterCard.completionBanner.eyebrow')}
                        </p>
                        <p className="character-card__completion-subtitle">
                            {t('characterCard.completionBanner.subtitle')}
                        </p>
                    </div>

                    <a
                        href="/cv.pdf"
                        className="character-card__completion-button"
                        download="CV-Vincent-Chevais.pdf"
                    >
                        <Download size={16} />
                        <span>{t('characterCard.completionBanner.download')}</span>
                    </a>
                </div>
            )}

            <div className="character-card__grid">
                <div className="character-card__panel character-card__panel--identity">
                    <p className="character-card__eyebrow">{t('characterCard.selected')}</p>

                    <div className="character-card__header">
                        <div className="character-card__avatar-wrapper">
                            <img
                                src={character.image}
                                alt={character.label}
                                className="character-card__avatar"
                            />
                        </div>

                        <div className="character-card__identity">
                            <h1 id="character-card-title" className="character-card__name">
                                {fullName}
                            </h1>

                            <p
                                className={`character-card__class ${isJourneyComplete
                                    ? 'character-card__class--developer'
                                    : 'character-card__class--initial'
                                    }`}
                            >
                                {character.label}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">{t('characterCard.misc')}</h2>

                    <div className="character-card__misc-grid">
                        <div className="character-card__misc-item">
                            <span className="character-card__misc-label">{t('characterCard.birthdate')}</span>
                            <div className="character-card__tags character-card__tags--misc">
                                {birthdate ? (
                                    <span
                                        className={`character-card__tag character-card__tag--misc character-card__tag--small ${newTags.includes(`misc-birthdate-${birthdate}`)
                                            ? 'character-card__tag--new'
                                            : ''
                                            }`}
                                    >
                                        {birthdate}
                                    </span>
                                ) : (
                                    <span className="character-card__empty">—</span>
                                )}
                            </div>
                        </div>

                        <div className="character-card__misc-item">
                            <span className="character-card__misc-label">{t('characterCard.location')}</span>
                            <div className="character-card__tags character-card__tags--misc">
                                {location ? (
                                    <span
                                        className={`character-card__tag character-card__tag--misc character-card__tag--small ${newTags.includes(`misc-location-${location}`)
                                            ? 'character-card__tag--new'
                                            : ''
                                            }`}
                                    >
                                        {location}
                                    </span>
                                ) : (
                                    <span className="character-card__empty">—</span>
                                )}
                            </div>
                        </div>

                        <div className="character-card__misc-item">
                            <span className="character-card__misc-label">{t('characterCard.drivingLicence')}</span>
                            <div className="character-card__tags character-card__tags--misc">
                                {drivingLicence ? (
                                    <span
                                        className={`character-card__tag character-card__tag--misc character-card__tag--small ${newTags.includes(`misc-driving-${drivingLicence}`)
                                            ? 'character-card__tag--new'
                                            : ''
                                            }`}
                                    >
                                        {drivingLicence}
                                    </span>
                                ) : (
                                    <span className="character-card__empty">—</span>
                                )}
                            </div>
                        </div>

                        <div className="character-card__misc-item">
                            <span className="character-card__misc-label">{t('characterCard.languages')}</span>
                            <div className="character-card__tags character-card__tags--misc">
                                {renderTags(
                                    languages,
                                    '—',
                                    'misc',
                                    'character-card__tag--small'
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">{t('characterCard.diplomas')}</h2>
                    <div className="character-card__tags">
                        {renderTags(diplomas, t('characterCard.emptyStates.diplomas'), 'diploma')}
                    </div>
                </div>

                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">{t('characterCard.hobbies')}</h2>
                    <div className="character-card__tags">
                        {renderTags(hobbies, t('characterCard.emptyStates.hobbies'), 'hobby')}
                    </div>
                </div>

                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">{t('characterCard.hardSkills')}</h2>
                    <div className="character-card__tags">
                        {renderTags(hardSkills, t('characterCard.emptyStates.hardSkills'), 'skill')}
                    </div>
                </div>

                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">{t('characterCard.softSkills')}</h2>
                    <div className="character-card__tags">
                        {renderTags(softSkills, t('characterCard.emptyStates.softSkills'), 'skill')}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CharacterCard