import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BiPlay } from 'react-icons/bi'
import { portfolioData } from '../../data/portfolio-data'
import './Projects.css'

const Projects = () => {
    const { projects } = portfolioData
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>My Projects</h2>
                    <p className="section-subtitle">
                        Explore a diverse array of my XR ventures, showcasing expertise in VR/AR application
                        development, game design, and educational content creation.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => project.video && setSelectedProject(project)}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    {project.video && (
                                        <button className="play-button">
                                            <BiPlay />
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <span className="project-category">{project.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelectedProject(null)}>
                                ×
                            </button>
                            <h3>{selectedProject.title}</h3>
                            <div className="video-wrapper">
                                <iframe
                                    src={`${selectedProject.video}?autoplay=1`}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title={selectedProject.title}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Projects
