import sophieImg from '../assets/projects/sophie-bluel.webp'
import kasaImg from '../assets/projects/kasa.webp'
import grimoireImg from '../assets/projects/mon-vieux-grimoire.webp'
import ninaImg from '../assets/projects/nina-carducci.webp'
import bookiImg from '../assets/projects/booki.webp'
import menuImg from '../assets/projects/menu-maker.webp'

// Génère dynamiquement les données des projets.
// On utilise une fonction plutôt qu'un JSON statique
// pour pouvoir injecter la fonction de traduction `t`.
// - Les textes sont traduits au moment de l'appel

export function getProjectsData(t) {
    return [
        {
            id: 'sophie-bluel',
            title: t('items.sophie-bluel.title', { ns: 'projectsData' }),
            image: sophieImg,
            label: t('items.sophie-bluel.label', { ns: 'projectsData' }),
            description: t('items.sophie-bluel.description', { ns: 'projectsData' }),
            tags: [
                t('items.sophie-bluel.tags.javascript', { ns: 'projectsData' }),
                t('items.sophie-bluel.tags.api', { ns: 'projectsData' }),
                t('items.sophie-bluel.tags.security', { ns: 'projectsData' }),
            ],
            github: 'https://github.com/VincentChevais/OC_Project_3.git',
            aria: {
                imgAlt: t('aria.imgAltProject', {
                    ns: 'projectsData',
                    title: t('items.sophie-bluel.title', { ns: 'projectsData' }),
                }),
                viewGithubCode: t('aria.viewGithubCode', {
                    ns: 'projectsData',
                    title: t('items.sophie-bluel.title', { ns: 'projectsData' }),
                }),
            },
        },
        {
            id: 'kasa',
            title: t('items.kasa.title', { ns: 'projectsData' }),
            image: kasaImg,
            label: t('items.kasa.label', { ns: 'projectsData' }),
            description: t('items.kasa.description', { ns: 'projectsData' }),
            tags: [
                t('items.kasa.tags.react', { ns: 'projectsData' }),
                t('items.kasa.tags.sass', { ns: 'projectsData' }),
                t('items.kasa.tags.reactRouter', { ns: 'projectsData' }),
            ],
            github: 'https://github.com/VincentChevais/kasa.git',
            aria: {
                imgAlt: t('aria.imgAltProject', {
                    ns: 'projectsData',
                    title: t('items.kasa.title', { ns: 'projectsData' }),
                }),
                viewGithubCode: t('aria.viewGithubCode', {
                    ns: 'projectsData',
                    title: t('items.kasa.title', { ns: 'projectsData' }),
                }),
            },
        },
        {
            id: 'mon-vieux-grimoire',
            title: t('items.mon-vieux-grimoire.title', { ns: 'projectsData' }),
            image: grimoireImg,
            label: t('items.mon-vieux-grimoire.label', { ns: 'projectsData' }),
            description: t('items.mon-vieux-grimoire.description', { ns: 'projectsData' }),
            tags: [
                t('items.mon-vieux-grimoire.tags.node', { ns: 'projectsData' }),
                t('items.mon-vieux-grimoire.tags.express', { ns: 'projectsData' }),
                t('items.mon-vieux-grimoire.tags.mongodb', { ns: 'projectsData' }),
            ],
            github: 'https://github.com/VincentChevais/P7-Dev-Web-livres-main.git',
            aria: {
                imgAlt: t('aria.imgAltProject', {
                    ns: 'projectsData',
                    title: t('items.mon-vieux-grimoire.title', { ns: 'projectsData' }),
                }),
                viewGithubCode: t('aria.viewGithubCode', {
                    ns: 'projectsData',
                    title: t('items.mon-vieux-grimoire.title', { ns: 'projectsData' }),
                }),
            },
        },
        {
            id: 'booki',
            title: t('items.booki.title', { ns: 'projectsData' }),
            image: bookiImg,
            label: t('items.booki.label', { ns: 'projectsData' }),
            description: t('items.booki.description', { ns: 'projectsData' }),
            tags: [
                t('items.booki.tags.html', { ns: 'projectsData' }),
                t('items.booki.tags.css', { ns: 'projectsData' }),
                t('items.booki.tags.design', { ns: 'projectsData' }),
            ],
            github: 'https://github.com/VincentChevais/OC_Project_2.git',
            aria: {
                imgAlt: t('aria.imgAltProject', {
                    ns: 'projectsData',
                    title: t('items.booki.title', { ns: 'projectsData' }),
                }),
                viewGithubCode: t('aria.viewGithubCode', {
                    ns: 'projectsData',
                    title: t('items.booki.title', { ns: 'projectsData' }),
                }),
            },
        },
        {
            id: 'nina-carducci',
            title: t('items.nina.title', { ns: 'projectsData' }),
            image: ninaImg,
            label: t('items.nina.label', { ns: 'projectsData' }),
            description: t('items.nina.description', { ns: 'projectsData' }),
            tags: [
                t('items.nina.tags.seo', { ns: 'projectsData' }),
                t('items.nina.tags.accessibility', { ns: 'projectsData' }),
                t('items.nina.tags.optimization', { ns: 'projectsData' }),
            ],
            github: 'https://github.com/VincentChevais/OC_Project_2.git',
            aria: {
                imgAlt: t('aria.imgAltProject', {
                    ns: 'projectsData',
                    title: t('items.nina.title', { ns: 'projectsData' }),
                }),
                viewGithubCode: t('aria.viewGithubCode', {
                    ns: 'projectsData',
                    title: t('items.nina.title', { ns: 'projectsData' }),
                }),
            },
        },
        {
            id: 'menu-maker',
            title: t('items.menu.title', { ns: 'projectsData' }),
            image: menuImg,
            label: t('items.menu.label', { ns: 'projectsData' }),
            description: t('items.menu.description', { ns: 'projectsData' }),
            tags: [
                t('items.menu.tags.management', { ns: 'projectsData' }),
                t('items.menu.tags.writing', { ns: 'projectsData' }),
                t('items.menu.tags.product', { ns: 'projectsData' }),
            ],
            github: 'https://github.com/VincentChevais/OC_Project_2.git',
            aria: {
                imgAlt: t('aria.imgAltProject', {
                    ns: 'projectsData',
                    title: t('items.menu.title', { ns: 'projectsData' }),
                }),
                viewGithubCode: t('aria.viewGithubCode', {
                    ns: 'projectsData',
                    title: t('items.menu.title', { ns: 'projectsData' }),
                }),
            },
        },
    ]
}