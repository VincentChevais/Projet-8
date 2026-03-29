import sophieImg from '../assets/projects/sophie-bluel.webp'
import kasaImg from '../assets/projects/kasa.webp'
import grimoireImg from '../assets/projects/mon-vieux-grimoire.webp'

const projectsData = [
    {
        id: 'sophie-bluel',
        title: "Sophie Bluel – Architecte d'intérieur",
        image: sophieImg,
        description:
            "Development of a dynamic portfolio in JavaScript with API integration, project filtering, and an admin interface. This project also introduced me to Agile working methods.",
        tags: ['JavaScript', 'API', 'Agile'],
        github: 'https://github.com/VincentChevais/OC_Project_3',
    },
    {
        id: 'kasa',
        title: 'Kasa',
        image: kasaImg,
        description:
            "Creation of a responsive real estate application with React and Sass, based on reusable components and a clean front-end architecture.",
        tags: ['React', 'Sass', 'React Router'],
        github: 'https://github.com/VincentChevais/kasa',
    },
    {
        id: 'mon-vieux-grimoire',
        title: 'Mon Vieux Grimoire',
        image: grimoireImg,
        description:
            "Back-end development of a book rating API with Node.js, Express and MongoDB, including authentication, CRUD operations and secure data handling.",
        tags: ['Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/VincentChevais/P7-Dev-Web-livres-main',
    },
]

export default projectsData