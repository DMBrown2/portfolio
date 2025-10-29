import React, { useEffect } from "react";
import { FaCode, FaUserGraduate } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiHtml5, SiCss3, SiJirasoftware, SiTrello } from "react-icons/si";
import { Link } from "react-scroll";
import "./About.css";

const About = () => {
   // Agregar clase visible cuando los elementos entran en vista
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about">
      <h2 className="section-title reveal">Sobre mí</h2>
      <p className="about-text reveal">
        Soy Licenciada en Comunicación y Desarrolladora Full Stack con orientación
        en Frontend. Me apasiona crear experiencias digitales funcionales y atractivas,
        combinando diseño, código y estrategia.
      </p>

      <div className="about-cards-container">
        {/* Card 1 - Full Stack */}
        <div className="about-card reveal">
          <FaCode className="about-card-icon" />
          <h3 className="about-card-title">Full Stack Engineer</h3>
          <p className="about-card-subtitle">Bootcamp - Certificación 2025</p>

          <div className="tech-list">
            <div className="tech-item">
              <SiHtml5 className="tech-icon" />
              <span>HTML5</span>
            </div>
            <div className="tech-item">
              <SiCss3 className="tech-icon" />
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <SiJavascript className="tech-icon" />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <SiReact className="tech-icon" />
              <span>React</span>
            </div>
            <div className="tech-item">
              <SiNodedotjs className="tech-icon" />
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <SiMongodb className="tech-icon" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        {/* Card 2 - Scrum */}
        <div className="about-card reveal">
          <FaUserGraduate className="about-card-icon" />
          <h3 className="about-card-title">Scrum Fundamentals</h3>
          <p className="about-card-subtitle">Certificación en metodologías ágiles</p>

          <div className="tech-list">
            <div className="tech-item">
              <SiJirasoftware className="tech-icon" />
              <span>Jira</span>
            </div>
            <div className="tech-item">
              <SiTrello className="tech-icon" />
              <span>Trello</span>
            </div>
            <div className="tech-item">
              <span className="method-tag">Sprint Planning</span>
            </div>
            <div className="tech-item">
              <span className="method-tag">Daily Meetings</span>
            </div>
            <div className="tech-item">
              <span className="method-tag">Retrospectives</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="cv-btn-container reveal">
        <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-60}
              className="cv-btn"
            >
          Contactame para pedir mi CV
        </Link>
      </div> */}

    </section>
  );
};

export default About;
