// Styles de la page Resume
import './Resume.scss'
// Hooks React
import { useEffect, useMemo, useRef, useState } from 'react'
// Hook de traduction i18n
import { useTranslation } from 'react-i18next'
// Hook de scroll automatique en haut de page
import useScrollToTop from '../../hooks/useScrollToTop.js'
// Composants de la page
import Header from '../../components/Header/Header'
import CharacterModal from '../../components/Resume/CharacterModal/CharacterModal'
import CharacterCard from '../../components/Resume/CharacterCard/CharacterCard'
import Timeline from '../../components/Resume/Timeline/Timeline'
import CompletionModal from '../../components/Resume/CompletionModal/CompletionModal'
import Footer from '../../components/Footer/Footer'
// Données de la page Resume
import { getResumeData } from '../../data/resumeData'

// Page Resume
function Resume() {
    // Fonction de traduction.
    // Cette page utilise les namespaces "resume" et "resumeData"
    const { t } = useTranslation(['resume', 'resumeData'])

    // Remonte en haut de page à l'arrivée sur la route
    useScrollToTop()

    // Construit les données traduites de la page
    const { characters, timelineEvents, finalCharacter } = useMemo(
        () => getResumeData(t),
        [t]
    )

    // Personnage sélectionné par son ID
    const [selectedCharacterId, setSelectedCharacterId] = useState(null)

    // État de la modale de sélection du personnage
    const [isModalOpen, setIsModalOpen] = useState(true)

    // ID de l'événement actuellement actif dans la timeline
    const [activeEventId, setActiveEventId] = useState(timelineEvents[0]?.id || null)

    // Liste des événements déjà sélectionnés / débloqués
    const [selectedEventIds, setSelectedEventIds] = useState([])

    // Affiche la bannière de complétion sur la carte personnage
    const [showCompletionBanner, setShowCompletionBanner] = useState(false)

    // État de la modale de complétion finale
    const [isCompletionModalOpen, setIsCompletionModalOpen] = useState(false)

    // Événement final à afficher dans la modale de complétion
    const [completionEvent, setCompletionEvent] = useState(null)

    // Référence vers la sidebar contenant la CharacterCard
    const sidebarRef = useRef(null)

    // Empêche de rejouer plusieurs fois la logique de complétion
    const hasCompletedOnceRef = useRef(false)

    // Sélectionne un personnage et ferme la modale de départ
    const handleCharacterSelect = (character) => {
        setSelectedCharacterId(character.id)
        setIsModalOpen(false)
    }

    // Ferme la modale de complétion
    const handleCloseCompletionModal = () => {
        setIsCompletionModalOpen(false)
    }

    // Gère le clic sur un événement de la timeline
    const handleEventClick = (eventId) => {
        // Met à jour l'événement actif
        setActiveEventId(eventId)

        // Ajoute l'événement à la liste des événements sélectionnés
        // seulement s'il n'y est pas déjà
        const nextSelectedEventIds = selectedEventIds.includes(eventId)
            ? selectedEventIds
            : [...selectedEventIds, eventId]

        setSelectedEventIds(nextSelectedEventIds)

        // Vérifie si le clic concerne le dernier événement
        const lastEvent = timelineEvents[timelineEvents.length - 1]
        const isClickingLastEvent = eventId === lastEvent.id

        // Vérifie si tous les événements ont été complétés
        const completesJourney = nextSelectedEventIds.length === timelineEvents.length

        // Si le dernier événement complète le parcours,
        // on ouvre la modale de complétion
        if (isClickingLastEvent && completesJourney) {
            setCompletionEvent(lastEvent)
            setIsCompletionModalOpen(true)
        }
    }

    // Indique si le parcours complet a été terminé
    const isJourneyComplete = selectedEventIds.length === timelineEvents.length

    useEffect(() => {
        // Si le parcours n'est pas terminé ou que la logique a déjà été jouée,
        // on ne fait rien
        if (!isJourneyComplete || hasCompletedOnceRef.current) return

        hasCompletedOnceRef.current = true

        // Fait remonter visuellement la sidebar dans le viewport
        if (sidebarRef.current) {
            sidebarRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }

        // Affiche la bannière avec un petit délai
        const bannerTimer = setTimeout(() => {
            setShowCompletionBanner(true)
        }, 250)

        return () => clearTimeout(bannerTimer)
    }, [isJourneyComplete])

    // Construit progressivement les données du profil
    // à partir des événements sélectionnés
    const profileData = useMemo(() => {
        // Structure de départ du profil
        const initialProfile = {
            birthdate: '',
            location: '',
            drivingLicence: '',
            languages: [],
            diplomas: [],
            hobbies: [],
            hardSkills: [],
            softSkills: [],
        }

        // Ajoute des éléments dans un tableau sans doublons
        const addUniqueItems = (targetArray, items) => {
            items.forEach((item) => {
                if (!targetArray.includes(item)) {
                    targetArray.push(item)
                }
            })
        }

        // Parcourt les événements déjà débloqués
        selectedEventIds.forEach((eventId) => {
            const event = timelineEvents.find((item) => item.id === eventId)
            if (!event?.updates) return

            const updates = event.updates

            // Champs simples
            if (updates.birthdate) initialProfile.birthdate = updates.birthdate
            if (updates.location) initialProfile.location = updates.location
            if (updates.drivingLicence) {
                initialProfile.drivingLicence = updates.drivingLicence
            }

            // Champs sous forme de listes
            if (updates.languages) addUniqueItems(initialProfile.languages, updates.languages)
            if (updates.diplomas) addUniqueItems(initialProfile.diplomas, updates.diplomas)
            if (updates.hobbies) addUniqueItems(initialProfile.hobbies, updates.hobbies)
            if (updates.hardSkills) addUniqueItems(initialProfile.hardSkills, updates.hardSkills)
            if (updates.softSkills) addUniqueItems(initialProfile.softSkills, updates.softSkills)
        })

        return initialProfile
    }, [selectedEventIds, timelineEvents])

    // Reconstitue le personnage sélectionné à partir de son ID
    const selectedCharacter = characters.find(
        (character) => character.id === selectedCharacterId
    )

    // Si le parcours est terminé, on affiche la version finale du personnage
    const displayedCharacter = isJourneyComplete
        ? finalCharacter
        : selectedCharacter

    return (
        <main className="resume-page">
            {/* Header spécifique à la page Resume */}
            <Header variant="resume" />

            {/* Modale initiale de sélection du personnage */}
            {isModalOpen && (
                <CharacterModal
                    characters={characters}
                    onSelectCharacter={handleCharacterSelect}
                />
            )}

            {/* Une fois le personnage choisi, on affiche la page */}
            {!isModalOpen && selectedCharacter && (
                <>
                    <div className="resume-page__container">
                        {/* Sidebar sticky avec la carte personnage */}
                        <aside className="resume-page__sidebar" ref={sidebarRef}>
                            <CharacterCard
                                character={displayedCharacter}
                                fullName="Vincent Chevais"
                                profileData={profileData}
                                isJourneyComplete={isJourneyComplete}
                                showCompletionBanner={showCompletionBanner}
                            />
                        </aside>

                        {/* Timeline du parcours */}
                        <section className="resume-page__timeline">
                            <Timeline
                                events={timelineEvents}
                                activeEventId={activeEventId}
                                selectedEventIds={selectedEventIds}
                                onEventClick={handleEventClick}
                            />
                        </section>
                    </div>

                    {/* Modale de complétion finale */}
                    <CompletionModal
                        isOpen={isCompletionModalOpen}
                        onClose={handleCloseCompletionModal}
                        character={selectedCharacter}
                        finalCharacter={finalCharacter}
                        event={completionEvent}
                    />

                    {/* Footer de la page */}
                    <Footer />
                </>
            )}
        </main>
    )
}

export default Resume