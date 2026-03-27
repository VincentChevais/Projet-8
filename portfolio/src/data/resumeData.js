import booksellerImg from '../assets/resume/bookseller.webp'
import journalistImg from '../assets/resume/journalist.webp'
import developerImg from '../assets/resume/developer.webp'
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
        id: 'developer',
        label: 'The Developer',
        image: developerImg,
    },
]

export const timelineEvents = [
    {
        id: 'birth',
        year: '1993',
        title: 'Born in 1993',
        side: 'left',
        description:
            'The story begins in Bordeaux, France, where the character was born, setting the stage for a journey of growth and discovery.',
        tags: [
            { label: 'April 6th, 1993', category: 'misc' },
            { label: 'French', category: 'misc' },
        ],
        updates: {
            birthdate: 'April 6th, 93',
            languages: ['French'],
        },
    },
    {
        id: 'baccalaureate',
        year: '2011',
        title: 'Baccalaureate',
        side: 'right',
        description:
            'The baccalaureate diploma was obtained in 2011, with a very good mention and mathematics as a specialty. I already love computer science, IT and video games. A strong passion grows on the side : Music !',
        tags: [
            { label: 'Baccalaureate', category: 'diploma' },
            { label: 'Music', category: 'hobby' },
            { label: 'Computer Science', category: 'hobby' },
        ],
        updates: {
            diplomas: ['Baccalaureate'],
            hobbies: ['Music', 'Computer Science'],
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
            { label: 'Writing', category: 'skill' },
            { label: 'Critical Thinking', category: 'skill' },
            { label: 'Resilience', category: 'skill' },
            { label: 'Discipline', category: 'skill' },
            { label: 'Work Ethic', category: 'skill' },
        ],
        updates: {
            languages: ['English'],
            softSkills: ['Resilience', 'Discipline', 'Work Ethic'],
            hardSkills: ['Writing', 'Critical Thinking'],
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

        ],
        updates: {
            diplomas: ["Bachelor's Degree in Literature"],
            hobbies: ['Literature'],
        },
    },
    {
        id: 'journalism-degree',
        year: '2017',
        title: "Master's Degree in Journalism",
        side: 'left',
        description:
            'I looked up from the books and described the world around me. This step sharpened communication, synthesis and storytelling abilities. Learnt a lot about photography and editing.',
        tags: [
            { label: "Master's Degree in Journalism", category: 'diploma' },
            { label: 'Photography', category: 'hobby' },
            { label: 'Storytelling', category: 'skill' },
            { label: 'Synthesis', category: 'skill' },
            { label: 'Curiosity', category: 'skill' },
        ],
        updates: {
            hobbies: ['Photography'],
            diplomas: ["Master's Degree in Journalism"],
            hardSkills: ['Storytelling', 'Synthesis'],
            softSkills: ['Curiosity'],
        },
    },
    {
        id: 'writerjournalist',
        year: '2017',
        title: "Writer and Journalist",
        side: 'right',
        description:
            'I made a living by my writing, telling stories. A received prices like The Young Writer Prize, worked for medias, theaters, production companys.',
        tags: [
            { label: 'The Young Writer Prize 2020', category: 'diploma' },
            { label: 'Prix Varennes 2017', category: 'diploma' },
            { label: 'Creativity', category: 'skill' },
            { label: 'Communication', category: 'skill' },
            { label: 'Research', category: 'skill' },

        ],
        updates: {
            diplomas: ['The Young Writer Prize 2020', 'Prix Varennes 2017'],
            hardSkills: ['Creativity', 'Research'],
            softSkills: ['Communication']
        },
    },
    {
        id: 'bookseller-experience',
        year: '2021',
        title: 'Bookseller Experience',
        side: 'left',
        description:
            'Years in bookselling, as a manager, strengthened people skills, reliability, teamwork and empathy.',
        tags: [
            { label: 'Books', category: 'hobby' },
            { label: 'Management', category: 'skill' },
            { label: 'Empathy', category: 'skill' },
            { label: 'Reliability', category: 'skill' },
            { label: 'Teamwork', category: 'skill' },
        ],
        updates: {
            hobbies: ['Reading', 'Literature'],
            hardSkills: ['Management'],
            softSkills: ['Empathy', 'Reliability', 'Teamwork'],
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
            { label: 'Sass', category: 'skill' },
        ],
        updates: {
            diplomas: ['RNCP Web Developer Diploma'],
            hardSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Sass'],
        },
    },
    {
        id: 'sophie-bluel',
        year: '2024',
        title: "Sophie Bluel – Architecte d'intérieur",
        side: 'right',
        description:
            'A dynamic JavaScript project with API integration and an admin interface, also completed with an Agile approach.',
        tags: [
            { label: 'JavaScript', category: 'skill' },
            { label: 'API Integration', category: 'skill' },
            { label: 'Agile', category: 'skill' },
        ],
        updates: {
            hardSkills: ['API Integration'],
            softSkills: ['Agile Collaboration'],
        },
    },
    {
        id: 'kasa',
        year: '2025',
        title: 'Kasa',
        side: 'left',
        description:
            'A React and Sass project focused on component architecture, routing and responsive design.',
        tags: [
            { label: 'React', category: 'skill' },
            { label: 'Sass', category: 'skill' },
            { label: 'React Router', category: 'skill' },
            { label: 'Responsive Design', category: 'skill' },
        ],
        updates: {
            hardSkills: ['React Router', 'Responsive Design'],
        },
    },
    {
        id: 'grimoire',
        year: '2025',
        title: 'Mon Vieux Grimoire',
        side: 'right',
        description:
            'A back-end project built with Node.js, Express and MongoDB, including authentication and secure data handling.',
        tags: [
            { label: 'Node.js', category: 'skill' },
            { label: 'Express', category: 'skill' },
            { label: 'MongoDB', category: 'skill' },
            { label: 'Authentication', category: 'skill' },
        ],
        updates: {
            hardSkills: ['Node.js', 'Express', 'MongoDB', 'Authentication'],
        },
    },
    {
        id: 'today',
        year: 'Today',
        title: 'Front-End Developer',
        side: 'left',
        description:
            'The current version of the character: a developer blending technical skills, communication and creativity.',
        tags: [
            { label: 'Front-End Developer', category: 'skill' },
            { label: 'Adaptability', category: 'skill' },
            { label: 'Problem Solving', category: 'skill' },
            { label: 'Dax, France', category: 'misc' },
        ],
        updates: {
            location: 'Dax, France',
            softSkills: ['Adaptability', 'Problem Solving'],
            hobbies: ['Design', 'UX', 'Continuous Learning'],
        },
    },
]