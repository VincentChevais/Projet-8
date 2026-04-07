// Styles du composant
import './CharacterCard.scss'

// Hooks React
import { useEffect, useRef, useState } from 'react'

// Icône du bouton de téléchargement
import { Download } from 'lucide-react'

// Hook de traduction i18n
import { useTranslation } from 'react-i18next'

// Composant de fiche personnage / profil
function CharacterCard({
    character,
    fullName,
    profileData,
    isJourneyComplete = false,
    showCompletionBanner = false,
}) {
    // Déstructure les données du profil pour simplifier la lecture du composant
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

    // Tableau contenant les IDs des tags récemment ajoutés
    // Il permet d'appliquer une animation temporaire aux nouveaux éléments
    const [newTags, setNewTags] = useState([])

    // Référence contenant la liste précédente des IDs affichés
    // useRef conserve la valeur entre les renders sans déclencher de rerender
    const prevTagsRef = useRef([])

    // Fonction de traduction du namespace "resume"
    const { t } = useTranslation('resume')

    // Transforme une valeur simple ou un tableau en tableau exploitable
    const toArray = (value) => {
        if (!value) return []
        return Array.isArray(value) ? value : [value]
    }

    // Construit un ID unique pour chaque tag
    const buildTagId = (group, field, value) => `${group}-${field}-${value}`

    useEffect(() => {
        // Liste complète des IDs actuellement visibles dans la carte
        const currentTagIds = [
            ...toArray(birthdate).map((item) => buildTagId('misc', 'birthdate', item)),
            ...toArray(location).map((item) => buildTagId('misc', 'location', item)),
            ...toArray(drivingLicence).map((item) => buildTagId('misc', 'drivingLicence', item)),
            ...toArray(languages).map((item) => buildTagId('misc', 'language', item)),
            ...toArray(diplomas).map((item) => buildTagId('diploma', 'item', item)),
            ...toArray(hobbies).map((item) => buildTagId('hobby', 'item', item)),
            ...toArray(hardSkills).map((item) => buildTagId('hard-skill', 'item', item)),
            ...toArray(softSkills).map((item) => buildTagId('soft-skill', 'item', item)),
        ]

        // IDs affichés au render précédent
        const prevTagIds = prevTagsRef.current

        // Garde uniquement les IDs qui viennent d'apparaître
        const addedTagIds = currentTagIds.filter((tagId) => !prevTagIds.includes(tagId))

        if (addedTagIds.length > 0) {
            // Active l'état "nouveau" pour ces tags
            setNewTags(addedTagIds)

            // Retire cet état après un court délai
            const timeout = setTimeout(() => {
                setNewTags([])
            }, 1400)

            // Met à jour la référence avec l'état actuel
            prevTagsRef.current = currentTagIds

            // Nettoyage du timer si le composant se met à jour avant la fin
            return () => clearTimeout(timeout)
        }

        // Met à jour la référence même s'il n'y a pas de nouveaux tags
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

    // Fonction unique pour afficher des tags
    // Elle fonctionne aussi bien pour :
    // - une valeur simple
    // - un tableau
    // - un état vide
    //
    // Paramètres :
    // - items : valeur simple ou tableau
    // - emptyLabel : texte affiché si vide
    // - tone : variante visuelle du tag (misc, diploma, hobby, skill...)
    // - group / field : servent à construire un ID unique
    // - extraClass : classe CSS supplémentaire optionnelle
    const renderTags = ({
        items,
        emptyLabel,
        tone,
        group,
        field,
        extraClass = '',
    }) => {
        const normalizedItems = toArray(items)

        // Si aucun élément, on affiche l'état vide
        if (normalizedItems.length === 0) {
            return <span className="character-card__empty">{emptyLabel}</span>
        }

        return normalizedItems.map((item) => {
            const tagId = buildTagId(group, field, item)
            const isNew = newTags.includes(tagId)

            return (
                <span
                    key={tagId}
                    className={`character-card__tag character-card__tag--${tone} ${extraClass} ${isNew ? 'character-card__tag--new' : ''
                        }`}
                >
                    {item}
                </span>
            )
        })
    }

    return (
        // Section principale de la carte
        // La classe --completed permet d'adapter le style quand le parcours est terminé
        <section
            className={`character-card ${isJourneyComplete ? 'character-card--completed' : ''}`}
            aria-labelledby="character-card-title"
        >
            {/* Bannière optionnelle de fin de parcours */}
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

            {/* Grille principale des panneaux */}
            <div className="character-card__grid">
                {/* Panneau identité */}
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

                            {/* Le label de la classe change de style si le parcours est terminé */}
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

                {/* Panneau Misc */}
                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">{t('characterCard.misc')}</h2>

                    <div className="character-card__misc-grid">
                        <div className="character-card__misc-item">
                            <span className="character-card__misc-label">
                                {t('characterCard.birthdate')}
                            </span>
                            <div className="character-card__tags character-card__tags--misc">
                                {renderTags({
                                    items: birthdate,
                                    emptyLabel: '—',
                                    tone: 'misc',
                                    group: 'misc',
                                    field: 'birthdate',
                                    extraClass: 'character-card__tag--small',
                                })}
                            </div>
                        </div>

                        <div className="character-card__misc-item">
                            <span className="character-card__misc-label">
                                {t('characterCard.location')}
                            </span>
                            <div className="character-card__tags character-card__tags--misc">
                                {renderTags({
                                    items: location,
                                    emptyLabel: '—',
                                    tone: 'misc',
                                    group: 'misc',
                                    field: 'location',
                                    extraClass: 'character-card__tag--small',
                                })}
                            </div>
                        </div>

                        <div className="character-card__misc-item">
                            <span className="character-card__misc-label">
                                {t('characterCard.drivingLicence')}
                            </span>
                            <div className="character-card__tags character-card__tags--misc">
                                {renderTags({
                                    items: drivingLicence,
                                    emptyLabel: '—',
                                    tone: 'misc',
                                    group: 'misc',
                                    field: 'drivingLicence',
                                    extraClass: 'character-card__tag--small',
                                })}
                            </div>
                        </div>

                        <div className="character-card__misc-item">
                            <span className="character-card__misc-label">
                                {t('characterCard.languages')}
                            </span>
                            <div className="character-card__tags character-card__tags--misc">
                                {renderTags({
                                    items: languages,
                                    emptyLabel: '—',
                                    tone: 'misc',
                                    group: 'misc',
                                    field: 'language',
                                    extraClass: 'character-card__tag--small',
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Panneau diplômes */}
                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">{t('characterCard.diplomas')}</h2>
                    <div className="character-card__tags">
                        {renderTags({
                            items: diplomas,
                            emptyLabel: t('characterCard.emptyStates.diplomas'),
                            tone: 'diploma',
                            group: 'diploma',
                            field: 'item',
                        })}
                    </div>
                </div>

                {/* Panneau hobbies */}
                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">{t('characterCard.hobbies')}</h2>
                    <div className="character-card__tags">
                        {renderTags({
                            items: hobbies,
                            emptyLabel: t('characterCard.emptyStates.hobbies'),
                            tone: 'hobby',
                            group: 'hobby',
                            field: 'item',
                        })}
                    </div>
                </div>

                {/* Panneau compétences techniques */}
                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">
                        {t('characterCard.hardSkills')}
                    </h2>
                    <div className="character-card__tags">
                        {renderTags({
                            items: hardSkills,
                            emptyLabel: t('characterCard.emptyStates.hardSkills'),
                            tone: 'skill',
                            group: 'hard-skill',
                            field: 'item',
                        })}
                    </div>
                </div>

                {/* Panneau compétences douces */}
                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">
                        {t('characterCard.softSkills')}
                    </h2>
                    <div className="character-card__tags">
                        {renderTags({
                            items: softSkills,
                            emptyLabel: t('characterCard.emptyStates.softSkills'),
                            tone: 'skill',
                            group: 'soft-skill',
                            field: 'item',
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CharacterCard