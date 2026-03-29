import booksellerImg from '../assets/resume/bookseller.webp'
import journalistImg from '../assets/resume/journalist.webp'
import writerImg from '../assets/resume/writer.webp'
// import { Languages } from 'lucide-react'

export const characters = [
    {
        id: 'bookseller',
        label: 'The Bookseller',
        image: booksellerImg,
    },
    {
        id: 'journalist',
        label: 'The Journalist',
        image: journalistImg,
    },
    {
        id: 'writer',
        label: 'The Writer',
        image: writerImg,
    },
]

export const timelineEvents = [
    {
        id: 'birth',
        year: '1993',
        title: 'Born in 1993',
        side: 'left',
        description:
            'The journey begins in Bordeaux, France. I grew up surrounded by music, a constant influence that has stayed with me ever since.',
        tags: [
            { label: 'April 6th, 1993', category: 'misc' },
            { label: 'French', category: 'misc' },
            { label: 'Music', category: 'hobby' },
        ],
        updates: {
            birthdate: 'April 6th, 93',
            languages: ['French'],
            hobbies: ['Music'],
        },
    },
    {
        id: 'baccalaureate',
        year: '2011',
        title: 'Baccalaureate',
        side: 'right',
        description:
            'The baccalaureate diploma was obtained in 2011, with high honors and mathematics as a specialty. At that time, computers and video games were already shaping a strong curiosity for both creativity and logic.',
        tags: [
            { label: 'Baccalaureate', category: 'diploma' },
            { label: 'Computer Science', category: 'hobby' },
        ],
        updates: {
            diplomas: ['Baccalaureate'],
            hobbies: ['Computer Science'],
        },
    },
    {
        id: 'cpge',
        year: '2013',
        title: 'CPGE',
        side: 'left',
        description:
            'Hypokhâgne/Khâgne. Two years of intensive preparation for competitive exams in literature, philosophy, history and languages. The hard way to develop resilience, discipline and a strong work ethic.',
        tags: [
            { label: 'English', category: 'misc' },

            { label: 'Critical Thinking', category: 'skill' },
            { label: 'Resilience', category: 'skill' },
            { label: 'Discipline', category: 'skill' },
            { label: 'Work Ethic', category: 'skill' },
        ],
        updates: {
            languages: ['English'],
            softSkills: ['Resilience', 'Discipline', 'Work Ethic'],
            hardSkills: ['Critical Thinking'],
        },
    },
    {
        id: 'literature-degree',
        year: '2014',
        title: "Bachelor's Degree in Literature",
        side: 'right',
        description:
            'A year spent in Montreal, Canada. A year of intense reading and cultural immersion where I discovered world literature and narrative techniques.',
        tags: [
            { label: 'Literature', category: 'hobby' },
            { label: "Bachelor's Degree in Literature", category: 'diploma' },
            { label: 'Writing', category: 'skill' },
        ],
        updates: {
            diplomas: ["Bachelor's Degree in Literature"],
            hobbies: ['Literature'],
            hardSkills: ['Writing'],
        },
    },
    {
        id: 'journalism-degree',
        year: '2017',
        title: "Master's Degree in Journalism",
        side: 'left',
        description:
            'I looked up from the books and described the world around me. This step sharpened communication, synthesis and storytelling abilities. Learned a lot about photography and editing.',
        tags: [
            { label: "Master's Degree in Journalism", category: 'diploma' },
            { label: 'Photography', category: 'hobby' },
            { label: 'Editing', category: 'skill' },
            { label: 'Synthesis', category: 'skill' },
            { label: 'Curiosity', category: 'skill' },
        ],
        updates: {
            hobbies: ['Photography'],
            diplomas: ["Master's Degree in Journalism"],
            hardSkills: ['Editing', 'Synthesis'],
            softSkills: ['Curiosity'],
        },
    },
    {
        id: 'writerjournalist',
        year: '2017',
        title: "Writer and Journalist",
        side: 'right',
        description:
            'Writing became both craft and profession: articles, scripts, editorial work and collaborations with media, theatres and production companies. Awards helped confirm a strong taste for words, structure and storytelling.',
        tags: [
            { label: 'The Young Writer Prize 2020', category: 'diploma' },
            { label: 'Prix Varennes 2017', category: 'diploma' },
            { label: 'Storytelling', category: 'skill' },
            { label: 'Creativity', category: 'skill' },
            { label: 'Communication', category: 'skill' },
            { label: 'Research', category: 'skill' },

        ],
        updates: {
            diplomas: ['The Young Writer Prize 2020', 'Prix Varennes 2017'],
            hardSkills: ['Research', 'Storytelling'],
            softSkills: ['Communication', 'Creativity'],
        },
    },
    {
        id: 'bookseller-experience',
        year: '2021',
        title: 'Bookseller Experience',
        side: 'left',
        description:
            'Bookselling brought operations into the story: team coordination, stock management, logistics, events and customer guidance. A practical role that strengthened reliability, organisation and teamwork.',
        tags: [
            { label: 'Management', category: 'skill' },
            { label: 'Data Handling', category: 'skill' },
            { label: 'Reliability', category: 'skill' },
            { label: 'Teamwork', category: 'skill' },
            { label: 'Logistics', category: 'skill' },
        ],
        updates: {
            hardSkills: ['Management', 'Logistics', 'Data Handling'],
            softSkills: ['Reliability', 'Teamwork'],
        },
    },
    {
        id: 'teaching-documentation',
        year: '2024',
        title: 'Teaching, Documentation and Transmission',
        side: 'right',
        description:
            'A year teaching French and documentation through multidisciplinary projects. A role that strengthened pedagogy, structure, clarity and the ability to make complex ideas accessible.',
        tags: [
            { label: 'Pedagogy', category: 'skill' },
            { label: 'Documentation', category: 'skill' },
            { label: 'Communication', category: 'skill' },
            { label: 'Project Work', category: 'skill' },
        ],
        updates: {
            hardSkills: ['Documentation', 'Project Work'],
            softSkills: ['Pedagogy', 'Communication'],
        },
    },
    {
        id: 'proud-dad',
        year: '2024',
        title: 'Proud Dad',
        side: 'left',
        description:
            'The most important role of all. It came with patience and new perspective of the future.',
        tags: [
            { label: 'Proud Dad', category: 'hobby' },
            { label: 'Night Management', category: 'skill' },
            { label: 'Patience', category: 'skill' },
            { label: 'Empathy', category: 'skill' },
            { label: 'Multitasking', category: 'skill' },
        ],
        updates: {
            hobbies: ['Proud Dad'],

        },
    },
    {
        id: 'openclassrooms',
        year: '2025',
        title: 'OpenClassrooms Web Developer Diploma',
        side: 'left',
        description:
            'A turning point: web development became the new path, with strong technical foundations and project-based learning.',
        tags: [
            { label: 'RNCP Web Developer Diploma', category: 'diploma' },
            { label: 'HTML', category: 'skill' },
            { label: 'CSS', category: 'skill' },
            { label: 'JavaScript', category: 'skill' },
            { label: 'React', category: 'skill' },
        ],
        updates: {
            diplomas: ['RNCP Web Developer Diploma'],
            hardSkills: ['HTML', 'CSS', 'JavaScript', 'React'],
        },
    },
    {
        id: 'hard-works',
        year: '2026',
        title: "Projects in the Wild",
        side: 'right',
        description:
            'Projects helped turn knowledge into practice: portfolios, real estate app, book API, sport app... Each one deepened my technical skills while strengthening problem-solving, clean code habits and interest in UX.',
        tags: [
            { label: 'API Integration', category: 'skill' },
            { label: 'React Router', category: 'skill' },
            { label: 'Agile', category: 'skill' },
            { label: 'Responsive Design', category: 'skill' },
            { label: 'Design', category: 'hobby' },
            { label: 'Back-end Basics', category: 'skill' },
            { label: 'Security', category: 'skill' },
        ],
        updates: {
            hardSkills: ['API Integration', 'React Router', 'Responsive Design', 'Back-end Basics', 'Security'],
            softSkills: ['Agile'],
            hobbies: ['Design'],
        },
    },
    {
        id: 'today',
        year: 'Today',
        title: 'Front-End Developer',
        side: 'right',
        description:
            'The current version of the character: a developer blending technical skills, communication and creativity. The transition is complete: web development is now my profession, with a strong focus on growing through real-world experience and continuous learning.',
        tags: [
            { label: 'Adaptability', category: 'skill' },
            { label: 'Problem Solving', category: 'skill' },
            { label: 'Dax, France', category: 'misc' },
        ],
        updates: {
            location: 'Dax, France',
            softSkills: ['Adaptability', 'Problem Solving'],
            hobbies: ['Continuous Learning'],
        },
    },
]