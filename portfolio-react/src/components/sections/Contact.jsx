import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { BiMap, BiPhone, BiEnvelope } from 'react-icons/bi'
import { portfolioData } from '../../data/portfolio-data'
import './Contact.css'

const Contact = () => {
    const { personal, social } = portfolioData
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [sending, setSending] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        setStatus({ type: '', message: '' })

        // EmailJS configuration - You'll need to set these up at emailjs.com
        // For now, this will show a success message without actually sending
        try {
            // Uncomment and configure when you set up EmailJS:
            // await emailjs.send(
            //   'YOUR_SERVICE_ID',
            //   'YOUR_TEMPLATE_ID',
            //   {
            //     from_name: formData.name,
            //     from_email: formData.email,
            //     subject: formData.subject,
            //     message: formData.message,
            //   },
            //   'YOUR_PUBLIC_KEY'
            // )

            // Simulating email send for demo
            await new Promise((resolve) => setTimeout(resolve, 1500))

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.',
            })
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try WhatsApp instead.',
            })
        } finally {
            setSending(false)
        }
    }

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Contact Me</h2>
                    <p className="section-subtitle">
                        Hi, I'm Mohamed Refaat from Dubai. I create immersive and interactive experiences
                        using VR, AR, and MR technologies. Let's discuss your XR project!
                    </p>
                </motion.div>

                <div className="contact-info-cards">
                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <BiMap />
                        <h4>Address</h4>
                        <p>{personal.location}</p>
                    </motion.div>

                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <BiPhone />
                        <h4>Contact Number</h4>
                        <p>
                            <a href={`tel:${personal.phone}`}>{personal.phone}</a>
                        </p>
                    </motion.div>

                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <BiEnvelope />
                        <h4>Email Address</h4>
                        <p>
                            <a href={`mailto:${personal.email}`}>{personal.email}</a>
                        </p>
                    </motion.div>
                </div>

                <div className="contact-content">
                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    rows="7"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {status.message && (
                                <div className={`form-status ${status.type}`}>
                                    {status.message}
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary" disabled={sending}>
                                {sending ? 'Sending...' : 'Send Message'}
                            </button>

                            <p className="or-text">Or contact me directly via:</p>

                            <a
                                href={social.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                WhatsApp
                            </a>
                        </form>
                    </motion.div>

                    <motion.div
                        className="contact-image"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img src="/images/about.webp" alt="Contact" />
                        <div className="image-overlay">
                            <h3>Let's Connect!</h3>
                            <BiEnvelope size={60} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
