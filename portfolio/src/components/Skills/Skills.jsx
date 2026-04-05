import './Skills.scss'
import useReveal from '../../hooks/useReveal'
import {
    FaHtml5,
    FaJs,
    FaReact,
    FaGitAlt
} from 'react-icons/fa'
import { SiSass } from 'react-icons/si'
import { useTranslation } from 'react-i18next'

function Skills() {
    const { t } = useTranslation('home')
    const { ref, isVisible } = useReveal()

    const skills = [
        { id: 'html', name: t('skills.technical.items.html'), level: '95%', icon: <FaHtml5 />, color: '#e34c26' },
        { id: 'css', name: t('skills.technical.items.css'), level: '85%', icon: <SiSass />, color: '#cc6699' },
        { id: 'javascript', name: t('skills.technical.items.javascript'), level: '75%', icon: <FaJs />, color: '#f7df1e' },
        { id: 'react', name: t('skills.technical.items.react'), level: '75%', icon: <FaReact />, color: '#61dafb' },
        { id: 'git', name: t('skills.technical.items.git'), level: '80%', icon: <FaGitAlt />, color: '#f0f0f0' },
        { id: 'accessibility', name: t('skills.technical.items.accessibility'), level: '90%' },
        { id: 'responsive', name: t('skills.technical.items.responsive'), level: '85%' },
    ]

    return (
        <section className="skills" id="skills">
            <div
                ref={ref}
                className={`skills__container reveal ${isVisible ? 'reveal--visible' : ''}`}
            >
                <div className="skills__content">
                    <h2 className="section-heading">
                        <span className="section-heading__number">02.</span>
                        <span className="section-heading__text">{t('skills.title')}</span>
                    </h2>

                    <p className="skills__description">
                        {t('skills.description')}
                    </p>

                    <div className="skills__group">
                        <h3 className="skills__group-title">{t('skills.soft.title')}</h3>
                        <p className="skills__group-subtitle">{t('skills.soft.subtitle')}</p>

                        <div className="skills__tags">
                            <span>{t('skills.soft.items.management')}</span>
                            <span>{t('skills.soft.items.languages')}</span>
                            <span>{t('skills.soft.items.autonomy')}</span>
                            <span>{t('skills.soft.items.problemSolving')}</span>
                            <span>{t('skills.soft.items.teamwork')}</span>
                            <span>{t('skills.soft.items.adaptability')}</span>
                            <span>{t('skills.soft.items.reliability')}</span>
                            <span>{t('skills.soft.items.empathy')}</span>
                            <span>{t('skills.soft.items.curiosity')}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__bars">
                        <h3 className="skills__group-title">{t('skills.technical.title')}</h3>
                        {skills.map((skill) => (
                            <div className="skills__item" key={skill.id}>
                                <div className="skills__label">
                                    <div className="skills__info">
                                        <span>{skill.name}</span>
                                        {skill.icon && (
                                            <span
                                                className="skills__icon"
                                                style={{ color: skill.color }}
                                            >
                                                {skill.icon}
                                            </span>
                                        )}
                                    </div>
                                    <span>{skill.level}</span>
                                </div>

                                <div className="skills__track">
                                    <div
                                        className="skills__fill"
                                        style={{ '--level': skill.level }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills