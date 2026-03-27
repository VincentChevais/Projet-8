import './CharacterCard.scss'

function CharacterCard({ character, fullName, profileData }) {
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

    const renderTags = (items, emptyLabel, category, extraClass = '') => {
        if (!items || items.length === 0) {
            return <span className="character-card__empty">{emptyLabel}</span>
        }

        return items.map((item) => (
            <span
                key={item}
                className={`character-card__tag character-card__tag--${category} ${extraClass}`.trim()}
            >
                {item}
            </span>
        ))
    }

    return (
        <section className="character-card" aria-labelledby="character-card-title">
            <div className="character-card__grid">
                <div className="character-card__panel character-card__panel--identity">
                    <p className="character-card__eyebrow">Character selected</p>

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
                            <p className="character-card__class">{character.label}</p>
                        </div>
                    </div>
                </div>

                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">Misc</h2>

                    <div className="character-card__misc-grid">
                        <div className="character-card__misc-item">
                            <span className="character-card__misc-label">Birthdate</span>
                            <div className="character-card__tags character-card__tags--misc">
                                {birthdate ? (
                                    <span className="character-card__tag character-card__tag--misc character-card__tag--small">
                                        {birthdate}
                                    </span>
                                ) : (
                                    <span className="character-card__empty">—</span>
                                )}
                            </div>
                        </div>

                        <div className="character-card__misc-item">
                            <span className="character-card__misc-label">Location</span>
                            <div className="character-card__tags character-card__tags--misc">
                                {location ? (
                                    <span className="character-card__tag character-card__tag--misc character-card__tag--small">
                                        {location}
                                    </span>
                                ) : (
                                    <span className="character-card__empty">—</span>
                                )}
                            </div>
                        </div>

                        <div className="character-card__misc-item">
                            <span className="character-card__misc-label">Driving licence</span>
                            <div className="character-card__tags character-card__tags--misc">
                                {drivingLicence ? (
                                    <span className="character-card__tag character-card__tag--misc character-card__tag--small">
                                        {drivingLicence}
                                    </span>
                                ) : (
                                    <span className="character-card__empty">—</span>
                                )}
                            </div>
                        </div>

                        <div className="character-card__misc-item">
                            <span className="character-card__misc-label">Languages</span>
                            <div className="character-card__tags character-card__tags--misc">
                                {renderTags(languages, '—', 'misc', 'character-card__tag--small')}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">Diplomas</h2>
                    <div className="character-card__tags">
                        {renderTags(diplomas, 'No diploma unlocked yet', 'diploma')}
                    </div>
                </div>

                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">Hobbies</h2>
                    <div className="character-card__tags">
                        {renderTags(hobbies, 'No hobby unlocked yet', 'hobby')}
                    </div>
                </div>

                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">Hard skills</h2>
                    <div className="character-card__tags">
                        {renderTags(hardSkills, 'No hard skill unlocked yet', 'skill')}
                    </div>
                </div>

                <div className="character-card__panel">
                    <h2 className="character-card__panel-title">Soft skills</h2>
                    <div className="character-card__tags">
                        {renderTags(softSkills, 'No soft skill unlocked yet', 'skill')}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CharacterCard