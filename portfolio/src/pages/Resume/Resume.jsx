import './Resume.scss'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import CharacterModal from '../../components/Resume/CharacterModal/CharacterModal'
import CharacterCard from '../../components/Resume/CharacterCard/CharacterCard'
import Timeline from '../../components/Resume/Timeline/Timeline'
import Footer from '../../components/Footer/Footer'
import { characters, timelineEvents } from '../../data/resumeData'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

function Resume() {
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(true)
    const [activeEventId, setActiveEventId] = useState(timelineEvents[0].id)
    const [selectedEventIds, setSelectedEventIds] = useState([])

    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character)
        setIsModalOpen(false)
    }

    const handleEventClick = (eventId) => {
        setActiveEventId(eventId)

        setSelectedEventIds((prev) => {
            if (prev.includes(eventId)) return prev
            return [...prev, eventId]
        })
    }

    const unlockedEvents = useMemo(
        () => timelineEvents.filter((event) => selectedEventIds.includes(event.id)),
        [selectedEventIds]
    )

    const activeEvent = useMemo(
        () => timelineEvents.find((event) => event.id === activeEventId) || timelineEvents[0],
        [activeEventId]
    )

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

        const uniquePush = (array, values) => {
            if (!Array.isArray(values)) return

            values.forEach((value) => {
                if (!array.includes(value)) {
                    array.push(value)
                }
            })
        }

        return unlockedEvents.reduce((profile, event) => {
            const updates = event.updates || {}

            if (updates.birthdate) {
                profile.birthdate = updates.birthdate
            }

            if (updates.location) {
                profile.location = updates.location
            }

            if (updates.drivingLicence) {
                profile.drivingLicence = updates.drivingLicence
            }

            if (updates.languages) {
                uniquePush(profile.languages, updates.languages)
            }

            if (updates.diplomas) {
                uniquePush(profile.diplomas, updates.diplomas)
            }

            if (updates.hobbies) {
                uniquePush(profile.hobbies, updates.hobbies)
            }

            if (updates.hardSkills) {
                uniquePush(profile.hardSkills, updates.hardSkills)
            }

            if (updates.softSkills) {
                uniquePush(profile.softSkills, updates.softSkills)
            }

            return profile
        }, initialProfile)
    }, [unlockedEvents])

    const currentCharacter = selectedCharacter || characters[2]

    return (
        <>
            <ScrollToTop />
            <main className="resume-page">
                {isModalOpen && (
                    <CharacterModal
                        characters={characters}
                        onSelectCharacter={handleCharacterSelect}
                    />
                )}

                <div className="resume-page__top-actions">
                    <Link to="/" className="resume-page__back">
                        Go back home
                    </Link>
                </div>

                <div className="resume-page__container">
                    <aside className="resume-page__sidebar">
                        <CharacterCard
                            character={currentCharacter}
                            fullName="Vincent Chevais"
                            profileData={profileData}
                        />
                    </aside>

                    <section className="resume-page__content">
                        <Timeline
                            events={timelineEvents}
                            activeEventId={activeEventId}
                            selectedEventIds={selectedEventIds}
                            activeEvent={activeEvent}
                            onEventClick={handleEventClick}
                        />
                    </section>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Resume