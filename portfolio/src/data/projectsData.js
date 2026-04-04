import sophieImg from '../assets/projects/sophie-bluel.webp'
import kasaImg from '../assets/projects/kasa.webp'
import grimoireImg from '../assets/projects/mon-vieux-grimoire.webp'

export function getProjectsData(t) {
    return [
        {
            id: 'sophie-bluel',
            title: t('items.sophie-bluel.title', { ns: 'projectsData' }),
            image: sophieImg,
            description: t('items.sophie-bluel.description', { ns: 'projectsData' }),
            tags: [
                t('items.sophie-bluel.tags.javascript', { ns: 'projectsData' }),
                t('items.sophie-bluel.tags.api', { ns: 'projectsData' }),
                t('items.sophie-bluel.tags.agile', { ns: 'projectsData' }),
            ],
            github: 'https://github.com/VincentChevais/OC_Project_3',
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
            description: t('items.kasa.description', { ns: 'projectsData' }),
            tags: [
                t('items.kasa.tags.react', { ns: 'projectsData' }),
                t('items.kasa.tags.sass', { ns: 'projectsData' }),
                t('items.kasa.tags.reactRouter', { ns: 'projectsData' }),
            ],
            github: 'https://github.com/VincentChevais/kasa',
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
            description: t('items.mon-vieux-grimoire.description', { ns: 'projectsData' }),
            tags: [
                t('items.mon-vieux-grimoire.tags.node', { ns: 'projectsData' }),
                t('items.mon-vieux-grimoire.tags.express', { ns: 'projectsData' }),
                t('items.mon-vieux-grimoire.tags.mongodb', { ns: 'projectsData' }),
            ],
            github: 'https://github.com/VincentChevais/P7-Dev-Web-livres-main',
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
    ]
}