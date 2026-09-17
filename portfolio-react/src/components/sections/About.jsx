import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio-data'
import './About.css'

const About = () => {
    const { personal, stats } = portfolioData

    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>About Me</h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img src="/images/bg_1.webp" alt={personal.name} />
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="about-bio">{personal.bio}</p>

                        <ul className="about-info">
                            <li><strong>Name:</strong> {personal.name}</li>
                            <li><strong>Date of birth:</strong> {personal.dateOfBirth}</li>
                            <li><strong>Address:</strong> {personal.location}</li>
                            <li><strong>Email:</strong> {personal.email}</li>
                            <li><strong>Phone:</strong> {personal.phone}</li>
                        </ul>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">{stats.projects}+</span>
                                <span className="stat-label">Projects Complete</span>
                            </div>
                        </div>

                        <a href="/assets/My_Resume.pdf" className="btn btn-primary" download>
                            Download CV
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
