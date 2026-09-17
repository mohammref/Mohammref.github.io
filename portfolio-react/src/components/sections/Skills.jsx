import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio-data'
import './Skills.css'

const Skills = () => {
    const { skills } = portfolioData

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>My Skills</h2>
                    <p className="section-subtitle">
                        A versatile developer with strong expertise in Unity and XR technologies,
                        complemented by foundational knowledge of Unreal Engine.
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="skill-header">
                                <h3>{skill.name}</h3>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-bar-container">
                                <motion.div
                                    className="skill-bar"
                                    style={{ backgroundColor: skill.color }}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.05 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
