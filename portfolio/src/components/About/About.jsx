import './About.scss'
import profileImg from '../../assets/profile.webp'
import Reveal from '../Reveal/Reveal'

function About() {
    return (
        <section className="about" id="about">
            <Reveal className="about__container">

                <div className="about__content">
                    <h2 className="section-heading">
                        <span className="section-heading__number">01.</span>
                        <span className="section-heading__text">About Me</span>
                    </h2>

                    <p>
                        I’m a front-end developer who loves turning complex problems into simple,
                        elegant interfaces. My toolkit centers around <strong>React</strong>, Sass,
                        modern JavaScript frameworks, and a deep appreciation for design systems.
                    </p>
                    <p>
                        As a former bookseller, I discovered web development through an <strong>OpenClassrooms course</strong>,
                        where I realized that my artistic eye and logical technique formed a powerful duo.
                    </p>
                    <p>
                        When I’m not coding, you’ll find me exploring new design trends,
                        contributing to open-source projects, or refining my workflow
                        to stay sharp and efficient.
                    </p>
                    <p>
                        My background in <strong>literature and journalism</strong> also shaped the way I work:
                        with curiosity, attention to detail, and a strong focus on clarity and
                        communication.
                    </p>
                    <a href="#contact" className="about__cta">
                        Let’s Talk
                    </a>

                </div>


                <div className="about__image">
                    <div className="about__image-wrapper">
                        <img src={profileImg} alt="Photo de profil" />
                    </div>
                </div>

            </Reveal>
        </section>
    )
}

export default About