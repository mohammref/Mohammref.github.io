import { useState, useEffect } from 'react'
import { portfolioData } from '../../data/portfolio-data'
import './Navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Resume', href: '#resume' },
        { label: 'Services', href: '#services' },
        { label: 'Skills', href: '#skills' },
        { label: ' Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ]

    const handleNavClick = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, '#home')}>
                    Refaat
                </a>

                <button
                    className="navbar-toggler"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.href} className="nav-item">
                            <a
                                href={item.href}
                                className="nav-link"
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
