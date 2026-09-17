import { motion } from 'framer-motion'
import { BiJoystick, BiDevices, BiCube, BiGroup, BiCodeAlt, BiExtension } from 'react-icons/bi'
import { portfolioData } from '../../data/portfolio-data'
import './Services.css'

const iconMap = {
    BiJoystick: BiJoystick,
    BiDevices: BiDevices,
    BiCube: BiCube,
    BiGroup: BiGroup,
    BiCodeAlt: BiCodeAlt,
    BiExtension: BiExtension,
}

const Services = () => {
    const { services } = portfolioData

    return (
        <section id="services" className="services-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Services</h2>
                    <p className="section-subtitle">
                        As a versatile developer specializing in both game development and XR technologies,
                        I create engaging interactive experiences across multiple platforms.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon]
                        return (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="service-icon">
                                    <Icon />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
