// Instance principale i18next
import i18n from 'i18next'
// Liaison entre i18next et React
import { initReactI18next } from 'react-i18next'
// Détection automatique de la langue du navigateur / stockage local
import LanguageDetector from 'i18next-browser-languagedetector'

// Traductions anglaises importées depuis JSON
import enHome from '../locales/en/home.json'
import enProjectsData from '../locales/en/projectsData.json'
import enResumeData from '../locales/en/resumeData.json'
import enResume from '../locales/en/resume.json'
import enCommon from '../locales/en/common.json'

// Traductions françaises importées depuis JSON
import frHome from '../locales/fr/home.json'
import frProjectsData from '../locales/fr/projectsData.json'
import frResumeData from '../locales/fr/resumeData.json'
import frResume from '../locales/fr/resume.json'
import frCommon from '../locales/fr/common.json'

// Initialisation de la configuration i18n
i18n
    // Active la détection automatique de langue
    .use(LanguageDetector)

    // Connecte i18next à React
    .use(initReactI18next)

    // Configure les ressources et les options globales
    .init({
        // Regroupe toutes les traductions disponibles par langue et par namespace
        resources: {
            en: {
                common: enCommon,
                home: enHome,
                projectsData: enProjectsData,
                resume: enResume,
                resumeData: enResumeData,
            },
            fr: {
                common: frCommon,
                home: frHome,
                projectsData: frProjectsData,
                resume: frResume,
                resumeData: frResumeData,
            }
        },

        // Liste des namespaces disponibles dans le projet
        ns: ['common', 'home', 'projectsData', 'resume', 'resumeData'],

        // Namespace utilisé par défaut si aucun autre n'est précisé
        defaultNS: 'common',

        // Namespace de secours si une clé n'est pas trouvée
        fallbackNS: 'common',

        // Langue de secours si la langue détectée n'est pas disponible
        fallbackLng: 'fr',

        // Langues explicitement supportées par l'application
        supportedLngs: ['en', 'fr'],

        // Avec React, on laisse React gérer l'échappement HTML
        interpolation: {
            escapeValue: false,
        },

        // Configuration de la détection de langue
        detection: {
            // Ordre de priorité :
            // 1. localStorage
            // 2. langue du navigateur
            // 3. balise <html lang="">
            order: ['localStorage', 'navigator', 'htmlTag'],

            // Sauvegarde la langue choisie dans le localStorage
            caches: ['localStorage'],
        },

        // Si une traduction est absente, retourne une chaîne plutôt que null
        returnNull: false,
    })

// Export de l'instance configurée
export default i18n