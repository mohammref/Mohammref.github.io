import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => setData(data.items))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">Refaat</a>
          <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
              <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
              <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
              <li className="nav-item"><a href="#services-section" className="nav-link"><span>Services</span></a></li>
              <li className="nav-item"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
              <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
              <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="home-section" className="hero">
        {/* Hero content goes here */}
      </section>
      <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
        {/* About content goes here */}
      </section>
      <section className="ftco-section ftco-no-pb" id="resume-section">
        {/* Resume content goes here */}
      </section>
      <section className="ftco-section" id="services-section">
        {/* Services content goes here */}
      </section>
      <section className="ftco-section" id="skills-section">
        {/* Skills content goes here */}
      </section>
      <section className="ftco-section ftco-project" id="projects-section">
        {/* Projects content goes here */}
      </section>
      <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
        {/* Contact content goes here */}
      </section>
    </div>
  );
};

export default HomePage;
