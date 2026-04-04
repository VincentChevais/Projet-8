import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'


import enHome from '../locales/en/home.json'
import enProjectsData from '../locales/en/projectsData.json'
import enResumeData from '../locales/en/resumeData.json'
import enResume from '../locales/en/resume.json'
import enCommon from '../locales/en/common.json'

import frHome from '../locales/fr/home.json'
import frProjectsData from '../locales/fr/projectsData.json'
import frResumeData from '../locales/fr/resumeData.json'
import frResume from '../locales/fr/resume.json'
import frCommon from '../locales/fr/common.json'



i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
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
        ns: ['common', 'home', 'projectsData', 'resume', 'resumeData'],
        defaultNS: 'common',
        fallbackNS: 'common',
        fallbackLng: 'fr',
        supportedLngs: ['en', 'fr'],
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
        },
        returnNull: false,
    })

export default i18n