import './Resume.scss'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import useScrollToTop from '../../hooks/useScrollToTop.js'
import Header from '../../components/Header/Header'
import CharacterModal from '../../components/Resume/CharacterModal/CharacterModal'
import CharacterCard from '../../components/Resume/CharacterCard/CharacterCard'
import Timeline from '../../components/Resume/Timeline/Timeline'
import CompletionModal from '../../components/Resume/CompletionModal/CompletionModal'
import Footer from '../../components/Footer/Footer'
import { getResumeData } from '../../data/resumeData'

function Resume() {
    const { t } = useTranslation(['resume', 'resumeData'])

    const { characters, timelineEvents, finalCharacter } = useMemo(
        () => getResumeData(t),
        [t]
    )

    // ✅ ON STOCKE L’ID AU LIEU DE L’OBJET
    const [selectedCharacterId, setSelectedCharacterId] = useState(null)

    const [isModalOpen, setIsModalOpen] = useState(true)
    const [activeEventId, setActiveEventId] = useState(timelineEvents[0]?.id || null)
    const [selectedEventIds, setSelectedEventIds] = useState([])
    const [showCompletionBanner, setShowCompletionBanner] = useState(false)

    const [isCompletionModalOpen, setIsCompletionModalOpen] = useState(false)
    const [completionEvent, setCompletionEvent] = useState(null)

    const sidebarRef = useRef(null)
    const hasCompletedOnceRef = useRef(false)

    // ✅ ON NE STOCKE QUE L’ID
    const handleCharacterSelect = (character) => {
        setSelectedCharacterId(character.id)
        setIsModalOpen(false)
    }

    const handleCloseCompletionModal = () => {
        setIsCompletionModalOpen(false)
    }

    const handleEventClick = (eventId) => {
        setActiveEventId(eventId)

        const nextSelectedEventIds = selectedEventIds.includes(eventId)
            ? selectedEventIds
            : [...selectedEventIds, eventId]

        setSelectedEventIds(nextSelectedEventIds)

        const lastEvent = timelineEvents[timelineEvents.length - 1]
        const isClickingLastEvent = eventId === lastEvent.id
        const completesJourney = nextSelectedEventIds.length === timelineEvents.length

        if (isClickingLastEvent && completesJourney) {
            setCompletionEvent(lastEvent)
            setIsCompletionModalOpen(true)
        }
    }

    const isJourneyComplete = selectedEventIds.length === timelineEvents.length

    useEffect(() => {
        if (!isJourneyComplete || hasCompletedOnceRef.current) return

        hasCompletedOnceRef.current = true

        if (sidebarRef.current) {
            sidebarRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }

        const bannerTimer = setTimeout(() => {
            setShowCompletionBanner(true)
        }, 250)

        return () => clearTimeout(bannerTimer)
    }, [isJourneyComplete])

    const profileData = useMemo(() => {
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

        const addUniqueItems = (targetArray, items) => {
            items.forEach((item) => {
                if (!targetArray.includes(item)) {
                    targetArray.push(item)
                }
            })
        }

        selectedEventIds.forEach((eventId) => {
            const event = timelineEvents.find((item) => item.id === eventId)
            if (!event?.updates) return

            const updates = event.updates

            if (updates.birthdate) initialProfile.birthdate = updates.birthdate
            if (updates.location) initialProfile.location = updates.location
            if (updates.drivingLicence) {
                initialProfile.drivingLicence = updates.drivingLicence
            }

            if (updates.languages) addUniqueItems(initialProfile.languages, updates.languages)
            if (updates.diplomas) addUniqueItems(initialProfile.diplomas, updates.diplomas)
            if (updates.hobbies) addUniqueItems(initialProfile.hobbies, updates.hobbies)
            if (updates.hardSkills) addUniqueItems(initialProfile.hardSkills, updates.hardSkills)
            if (updates.softSkills) addUniqueItems(initialProfile.softSkills, updates.softSkills)
        })

        return initialProfile
    }, [selectedEventIds, timelineEvents])

    // ✅ ON RECONSTRUIT LE CHARACTER À CHAQUE RENDER
    const selectedCharacter = characters.find(
        (character) => character.id === selectedCharacterId
    )

    const displayedCharacter = isJourneyComplete
        ? finalCharacter
        : selectedCharacter

    return (
        useScrollToTop(),
        <main className="resume-page">
            <Header variant="resume" />

            {isModalOpen && (
                <CharacterModal
                    characters={characters}
                    onSelectCharacter={handleCharacterSelect}
                />
            )}

            {!isModalOpen && selectedCharacter && (
                <>
                    <div className="resume-page__container">
                        <aside className="resume-page__sidebar" ref={sidebarRef}>
                            <CharacterCard
                                character={displayedCharacter}
                                fullName="Vincent Chevais"
                                profileData={profileData}
                                isJourneyComplete={isJourneyComplete}
                                showCompletionBanner={showCompletionBanner}
                            />
                        </aside>

                        <section className="resume-page__timeline">
                            <Timeline
                                events={timelineEvents}
                                activeEventId={activeEventId}
                                selectedEventIds={selectedEventIds}
                                onEventClick={handleEventClick}
                            />
                        </section>
                    </div>

                    <CompletionModal
                        isOpen={isCompletionModalOpen}
                        onClose={handleCloseCompletionModal}
                        character={selectedCharacter}
                        finalCharacter={finalCharacter}
                        event={completionEvent}
                    />

                    <Footer />
                </>
            )}
        </main>
    )
}

export default Resume