import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio-data'
import './Resume.css'

const Resume = () => {
    const { education } = portfolioData

    return (
        <section id="resume" className="resume-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Resume</h2>
                    <p className="section-subtitle">
                        Experienced software developer specializing in Unity, with a focus on Virtual Reality,
                        Mobile games, and Augmented Reality. Proven track record of contributing to top-budget
                        productions and meeting tight deadlines.
                    </p>
                </motion.div>

                <div className="timeline">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="timeline-date">{item.period}</div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <h4>{item.institution}</h4>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="resume-download"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <a href="/assets/My_Resume.pdf" className="btn btn-primary" download>
                        Download CV
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Resume
