import './Skills.scss'
import Reveal from '../Reveal/Reveal'
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt
} from 'react-icons/fa'
import { SiSass } from 'react-icons/si'

const skills = [
    { name: 'HTML', level: '90%', icon: <FaHtml5 />, color: '#e34c26' },
    { name: 'CSS / SCSS', level: '90%', icon: <SiSass />, color: '#cc6699' },
    { name: 'JavaScript', level: '80%', icon: <FaJs />, color: '#f7df1e' },
    { name: 'React', level: '75%', icon: <FaReact />, color: '#61dafb' },
    { name: 'Git/GitHub', level: '80%', icon: <FaGitAlt />, color: '#f0f0f0' },
    { name: 'Accessibility', level: '70%' },
    { name: 'Responsive Design', level: '85%' },
]

function Skills() {
    return (
        <section className="skills" id="skills">
            <Reveal className="skills__container">
                <div className="skills__content">
                    <h2 className="section-heading">
                        <span className="section-heading__number">02.</span>
                        <span className="section-heading__text">Skills</span>
                    </h2>

                    <p className="skills__description">
                        Over the course of my training and personal projects, I’ve built a
                        solid front-end foundation with a strong focus on clean code,
                        reusable components, and user-friendly interfaces.
                    </p>

                    <div className="skills__group">
                        <h3 className="skills__group-title">Soft skills</h3>
                        <p className="skills__group-subtitle">What I bring to the table beyond code</p>

                        <div className="skills__tags">
                            <span>Management</span>
                            <span>English, French, Spanish</span>
                            <span>Autonomy</span>
                            <span>Problem Solving</span>
                            <span>Teamwork</span>
                            <span>Adaptability</span>
                            <span>Reliability</span>
                            <span>Empathy</span>
                            <span>Curiosity</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__bars">
                        <h3 className="skills__group-title">Technical skills</h3>
                        {skills.map((skill) => (
                            <div className="skills__item" key={skill.name}>
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
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default Skills
