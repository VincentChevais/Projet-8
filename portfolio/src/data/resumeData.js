import booksellerImg from '../assets/resume/bookseller.webp'
import journalistImg from '../assets/resume/journalist.webp'
import writerImg from '../assets/resume/writer.webp'
import developerImg from '../assets/resume/developer.webp'

// Génère dynamiquement les données du CV intéractif.
// On utilise une fonction plutôt qu'un JSON statique
// pour pouvoir injecter la fonction de traduction `t`.
// - Les textes sont traduits au moment de l'appel
// - update permet de faire évoluer dynamiquement les infos affichées

export function getResumeData(t) {
    const characters = [
        {
            id: 'bookseller',
            label: t('characters.bookseller.label', { ns: 'resumeData' }),
            image: booksellerImg,
        },
        {
            id: 'journalist',
            label: t('characters.journalist.label', { ns: 'resumeData' }),
            image: journalistImg,
        },
        {
            id: 'writer',
            label: t('characters.writer.label', { ns: 'resumeData' }),
            image: writerImg,
        },
    ]

    const finalCharacter = {
        id: 'developer',
        label: t('characters.developer.label', { ns: 'resumeData' }),
        image: developerImg,
    }

    const timelineEvents = [
        {
            id: 'birth',
            year: t('events.birth.year', { ns: 'resumeData' }),
            title: t('events.birth.title', { ns: 'resumeData' }),
            side: 'left',
            description: t('events.birth.description', { ns: 'resumeData' }),
            tags: [
                { label: t('events.birth.tags.birthdate', { ns: 'resumeData' }), category: 'misc' },
                { label: t('events.birth.tags.french', { ns: 'resumeData' }), category: 'misc' },
                { label: t('events.birth.tags.music', { ns: 'resumeData' }), category: 'hobby' },
            ],
            updates: {
                birthdate: t('events.birth.updates.birthdate', { ns: 'resumeData' }),
                languages: [t('events.birth.updates.languages.french', { ns: 'resumeData' })],
                hobbies: [t('events.birth.updates.hobbies.music', { ns: 'resumeData' })],
            },
        },

        {
            id: 'baccalaureate',
            year: t('events.baccalaureate.year', { ns: 'resumeData' }),
            title: t('events.baccalaureate.title', { ns: 'resumeData' }),
            side: 'right',
            description: t('events.baccalaureate.description', { ns: 'resumeData' }),
            tags: [
                { label: t('events.baccalaureate.tags.diploma', { ns: 'resumeData' }), category: 'diploma' },
                { label: t('events.baccalaureate.tags.computerScience', { ns: 'resumeData' }), category: 'hobby' },
                { label: t('events.baccalaureate.tags.drivingLicence', { ns: 'resumeData' }), category: 'misc' },
            ],
            updates: {
                drivingLicence: t('events.baccalaureate.updates.drivingLicence', { ns: 'resumeData' }),
                diplomas: [t('events.baccalaureate.updates.diplomas.baccalaureate', { ns: 'resumeData' })],
                hobbies: [t('events.baccalaureate.updates.hobbies.computerScience', { ns: 'resumeData' })],
            },
        },

        {
            id: 'cpge',
            year: t('events.cpge.year', { ns: 'resumeData' }),
            title: t('events.cpge.title', { ns: 'resumeData' }),
            side: 'left',
            description: t('events.cpge.description', { ns: 'resumeData' }),
            tags: [
                { label: t('events.cpge.tags.english', { ns: 'resumeData' }), category: 'misc' },
                { label: t('events.cpge.tags.criticalThinking', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.cpge.tags.resilience', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.cpge.tags.discipline', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.cpge.tags.workEthic', { ns: 'resumeData' }), category: 'skill' },
            ],
            updates: {
                languages: [t('events.cpge.updates.languages.english', { ns: 'resumeData' })],
                softSkills: [
                    t('events.cpge.updates.softSkills.resilience', { ns: 'resumeData' }),
                    t('events.cpge.updates.softSkills.discipline', { ns: 'resumeData' }),
                    t('events.cpge.updates.softSkills.workEthic', { ns: 'resumeData' }),
                ],
                hardSkills: [t('events.cpge.updates.hardSkills.criticalThinking', { ns: 'resumeData' })],
            },
        },

        {
            id: 'literature-degree',
            year: t('events.literature-degree.year', { ns: 'resumeData' }),
            title: t('events.literature-degree.title', { ns: 'resumeData' }),
            side: 'right',
            description: t('events.literature-degree.description', { ns: 'resumeData' }),
            tags: [
                { label: t('events.literature-degree.tags.literature', { ns: 'resumeData' }), category: 'hobby' },
                { label: t('events.literature-degree.tags.degree', { ns: 'resumeData' }), category: 'diploma' },
                { label: t('events.literature-degree.tags.writing', { ns: 'resumeData' }), category: 'skill' },
            ],
            updates: {
                diplomas: [t('events.literature-degree.updates.diplomas.literatureDegree', { ns: 'resumeData' })],
                hobbies: [t('events.literature-degree.updates.hobbies.literature', { ns: 'resumeData' })],
                hardSkills: [t('events.literature-degree.updates.hardSkills.writing', { ns: 'resumeData' })],
            },
        },

        {
            id: 'journalism-degree',
            year: t('events.journalism-degree.year', { ns: 'resumeData' }),
            title: t('events.journalism-degree.title', { ns: 'resumeData' }),
            side: 'left',
            description: t('events.journalism-degree.description', { ns: 'resumeData' }),
            tags: [
                { label: t('events.journalism-degree.tags.degree', { ns: 'resumeData' }), category: 'diploma' },
                { label: t('events.journalism-degree.tags.photography', { ns: 'resumeData' }), category: 'hobby' },
                { label: t('events.journalism-degree.tags.editing', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.journalism-degree.tags.synthesis', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.journalism-degree.tags.curiosity', { ns: 'resumeData' }), category: 'skill' },
            ],
            updates: {
                hobbies: [t('events.journalism-degree.updates.hobbies.photography', { ns: 'resumeData' })],
                diplomas: [t('events.journalism-degree.updates.diplomas.journalismDegree', { ns: 'resumeData' })],
                hardSkills: [
                    t('events.journalism-degree.updates.hardSkills.editing', { ns: 'resumeData' }),
                    t('events.journalism-degree.updates.hardSkills.synthesis', { ns: 'resumeData' }),
                ],
                softSkills: [t('events.journalism-degree.updates.softSkills.curiosity', { ns: 'resumeData' })],
            },
        },

        {
            id: 'writerjournalist',
            year: t('events.writerjournalist.year', { ns: 'resumeData' }),
            title: t('events.writerjournalist.title', { ns: 'resumeData' }),
            side: 'right',
            description: t('events.writerjournalist.description', { ns: 'resumeData' }),
            tags: [
                { label: t('events.writerjournalist.tags.youngWriterPrize', { ns: 'resumeData' }), category: 'diploma' },
                { label: t('events.writerjournalist.tags.prixVarennes', { ns: 'resumeData' }), category: 'diploma' },
                { label: t('events.writerjournalist.tags.storytelling', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.writerjournalist.tags.creativity', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.writerjournalist.tags.communication', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.writerjournalist.tags.research', { ns: 'resumeData' }), category: 'skill' },
            ],
            updates: {
                diplomas: [
                    t('events.writerjournalist.updates.diplomas.youngWriterPrize', { ns: 'resumeData' }),
                    t('events.writerjournalist.updates.diplomas.prixVarennes', { ns: 'resumeData' }),
                ],
                hardSkills: [t('events.writerjournalist.updates.hardSkills.storytelling', { ns: 'resumeData' })],
                softSkills: [
                    t('events.writerjournalist.updates.softSkills.research', { ns: 'resumeData' }),
                    t('events.writerjournalist.updates.softSkills.communication', { ns: 'resumeData' }),
                    t('events.writerjournalist.updates.softSkills.creativity', { ns: 'resumeData' }),
                ],
            },
        },

        {
            id: 'bookseller-experience',
            year: t('events.bookseller-experience.year', { ns: 'resumeData' }),
            title: t('events.bookseller-experience.title', { ns: 'resumeData' }),
            side: 'left',
            description: t('events.bookseller-experience.description', { ns: 'resumeData' }),
            tags: [
                { label: t('events.bookseller-experience.tags.management', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.bookseller-experience.tags.reliability', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.bookseller-experience.tags.teamwork', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.bookseller-experience.tags.logistics', { ns: 'resumeData' }), category: 'skill' },
            ],
            updates: {
                hardSkills: [
                    t('events.bookseller-experience.updates.hardSkills.management', { ns: 'resumeData' }),
                    t('events.bookseller-experience.updates.hardSkills.logistics', { ns: 'resumeData' }),
                ],
                softSkills: [
                    t('events.bookseller-experience.updates.softSkills.reliability', { ns: 'resumeData' }),
                    t('events.bookseller-experience.updates.softSkills.teamwork', { ns: 'resumeData' }),
                ],
            },
        },

        {
            id: 'teaching-documentation',
            year: t('events.teaching-documentation.year', { ns: 'resumeData' }),
            title: t('events.teaching-documentation.title', { ns: 'resumeData' }),
            side: 'right',
            description: t('events.teaching-documentation.description', { ns: 'resumeData' }),
            tags: [
                { label: t('events.teaching-documentation.tags.pedagogy', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.teaching-documentation.tags.documentation', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.teaching-documentation.tags.communication', { ns: 'resumeData' }), category: 'skill' },
            ],
            updates: {
                hardSkills: [t('events.teaching-documentation.updates.hardSkills.documentation', { ns: 'resumeData' })],
                softSkills: [
                    t('events.teaching-documentation.updates.softSkills.pedagogy', { ns: 'resumeData' }),
                    t('events.teaching-documentation.updates.softSkills.communication', { ns: 'resumeData' }),
                ],
            },
        },

        {
            id: 'proud-dad',
            year: t('events.proud-dad.year', { ns: 'resumeData' }),
            title: t('events.proud-dad.title', { ns: 'resumeData' }),
            side: 'left',
            description: t('events.proud-dad.description', { ns: 'resumeData' }),
            tags: [
                { label: t('events.proud-dad.tags.proudDad', { ns: 'resumeData' }), category: 'hobby' },
                { label: t('events.proud-dad.tags.nightManagement', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.proud-dad.tags.patience', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.proud-dad.tags.empathy', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.proud-dad.tags.multitasking', { ns: 'resumeData' }), category: 'skill' },
            ],
            updates: {
                hobbies: [t('events.proud-dad.updates.hobbies.proudDad', { ns: 'resumeData' })],
            },
        },

        {
            id: 'openclassrooms',
            year: t('events.openclassrooms.year', { ns: 'resumeData' }),
            title: t('events.openclassrooms.title', { ns: 'resumeData' }),
            side: 'right',
            description: t('events.openclassrooms.description', { ns: 'resumeData' }),
            tags: [
                { label: t('events.openclassrooms.tags.rncp', { ns: 'resumeData' }), category: 'diploma' },
                { label: t('events.openclassrooms.tags.html', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.openclassrooms.tags.css', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.openclassrooms.tags.javascript', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.openclassrooms.tags.react', { ns: 'resumeData' }), category: 'skill' },
            ],
            updates: {
                diplomas: [t('events.openclassrooms.updates.diplomas.rncp', { ns: 'resumeData' })],
                hardSkills: [
                    t('events.openclassrooms.updates.hardSkills.html', { ns: 'resumeData' }),
                    t('events.openclassrooms.updates.hardSkills.css', { ns: 'resumeData' }),
                    t('events.openclassrooms.updates.hardSkills.javascript', { ns: 'resumeData' }),
                    t('events.openclassrooms.updates.hardSkills.react', { ns: 'resumeData' }),
                ],
            },
        },

        {
            id: 'hard-works',
            year: t('events.hard-works.year', { ns: 'resumeData' }),
            title: t('events.hard-works.title', { ns: 'resumeData' }),
            side: 'left',
            description: t('events.hard-works.description', { ns: 'resumeData' }),
            tags: [
                { label: t('events.hard-works.tags.apiIntegration', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.hard-works.tags.agile', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.hard-works.tags.design', { ns: 'resumeData' }), category: 'hobby' },
                { label: t('events.hard-works.tags.backendBasics', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.hard-works.tags.security', { ns: 'resumeData' }), category: 'skill' },
            ],
            updates: {
                hardSkills: [
                    t('events.hard-works.updates.hardSkills.apiIntegration', { ns: 'resumeData' }),
                    t('events.hard-works.updates.hardSkills.backendBasics', { ns: 'resumeData' }),
                    t('events.hard-works.updates.hardSkills.security', { ns: 'resumeData' }),
                ],
                softSkills: [t('events.hard-works.updates.softSkills.agile', { ns: 'resumeData' })],
                hobbies: [t('events.hard-works.updates.hobbies.design', { ns: 'resumeData' })],
            },
        },

        {
            id: 'today',
            year: t('events.today.year', { ns: 'resumeData' }),
            title: t('events.today.title', { ns: 'resumeData' }),
            side: 'right',
            description: t('events.today.description', { ns: 'resumeData' }),
            tags: [
                { label: t('events.today.tags.adaptability', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.today.tags.problemSolving', { ns: 'resumeData' }), category: 'skill' },
                { label: t('events.today.tags.location', { ns: 'resumeData' }), category: 'misc' },
            ],
            updates: {
                location: t('events.today.updates.location', { ns: 'resumeData' }),
                softSkills: [
                    t('events.today.updates.softSkills.adaptability', { ns: 'resumeData' }),
                    t('events.today.updates.softSkills.problemSolving', { ns: 'resumeData' }),
                ],
                hobbies: [t('events.today.updates.hobbies.continuousLearning', { ns: 'resumeData' })],
            },
        },
    ]

    return {
        characters,
        finalCharacter,
        timelineEvents,
    }
}