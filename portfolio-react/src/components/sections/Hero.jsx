import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { portfolioData } from '../../data/portfolio-data'
import './Hero.css'

const Hero = () => {
    const { personal, social } = portfolioData

    return (
        <>
            <Helmet>
                <title>{personal.name} | {personal.role}</title>
                <meta name="description" content={personal.bio} />
            </Helmet>

            <section id="home" className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-background"></div>

                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            className="greeting"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Hello!
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            I'm <span className="highlight">{personal.name}</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            {personal.role}
                        </motion.h2>

                        <motion.p
                            className="hero-bio"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {personal.bio}
                        </motion.p>

                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                        >
                            <a href="#contact" className="btn btn-primary">
                                Hire Me
                            </a>
                            <a
                                href={social.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                My Works
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <div className="image-wrapper">
                            <img src="/images/bg_1.webp" alt={personal.name} />
                        </div>
                    </motion.div>
                </div>

                <div className="scroll-indicator">
                    <div className="mouse"></div>
                </div>
            </section>
        </>
    )
}

export default Hero
