import { portfolioData } from '../../data/portfolio-data'
import { BiLogoTwitter, BiLogoFacebook, BiLogoInstagram, BiLogoYoutube, BiLogoLinkedin } from 'react-icons/bi'
import './Footer.css'

const Footer = () => {
    const { personal, social } = portfolioData

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-about">
                        <h3>About</h3>
                        <p>
                            Experienced Unity developer with 7+ years in VR, AR, and mobile games.
                            Proficient in programming, design patterns, and versatile in meeting tight
                            deadlines for top-budget productions.
                        </p>
                        <div className="social-links">
                            <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <BiLogoTwitter />
                            </a>
                            <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <BiLogoFacebook />
                            </a>
                            <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <BiLogoInstagram />
                            </a>
                            <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <BiLogoYoutube />
                            </a>
                            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <BiLogoLinkedin />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <ul>
                            <li>{personal.location}</li>
                            <li><a href={`tel:${personal.phone}`}>{personal.phone}</a></li>
                            <li><a href={`mailto:${personal.email}`}>{personal.email}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
