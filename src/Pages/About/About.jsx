import React, { useEffect } from "react";
import { FaCode, FaUserGraduate } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJirasoftware,
  SiTrello,
} from "react-icons/si";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons/faPuzzlePiece";


const About = () => {
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
        👩‍🦰 Soy Full Stack Developer con orientación en Frontend. Después de varios
        años gestionando proyectos en agencias de publicidad, decidí volcar mi
        experiencia en comunicación y estrategia al mundo del desarrollo web.
      </p>

      <p className="about-text reveal">
        🤓 Me divierte crear algo que sea útil. Disfruto armando experiencias
        digitales funcionales y atractivas, combinando diseño, código y
        estrategia para lograr una buena experiencia de usuario.
      </p>

      {/* En qué creo */}
      <div className="beliefs reveal">
        <h3 className="subsection-title">Creo que:</h3>
        <div className="beliefs-tags">

          <div className="belief-tag">
            <FontAwesomeIcon icon={faUser} className="belief-icon" />
            <span>La experiencia del usuario es lo mas importante</span>
          </div>
          
          <div className="belief-tag">
            <FontAwesomeIcon icon={faLightbulb} className="belief-icon" />
            <span>La creatividad es el motor en todo</span>
          </div>

          <div className="belief-tag">
            <FontAwesomeIcon icon={faPuzzlePiece} className="belief-icon" />
            <span>La resolución de problemas es algo que puede ser divertido</span>
          </div>

          <div className="belief-tag">
            <FontAwesomeIcon icon={faUserFriends} className="belief-icon" />
            <span>El trabajo en equipo hace que pasen cosas buenas</span>
          </div>

        </div>
      </div>

      {/* 🧩 Perfil técnico */}
      <h3 className="subsection-title">Perfil técnico</h3>

      <div className="about-cards-container">
        {/* Card 1 - Full Stack */}
        <a
          href="https://github.com/DMBrown2?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          title="Ir a GitHub"
        >
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
        </a>

        {/* Card 2 - Scrum */}
        <div className="about-card reveal">
          <FaUserGraduate className="about-card-icon" />
          <h3 className="about-card-title">Scrum</h3>
          <p className="about-card-subtitle">
            Certificación en metodologías ágiles
          </p>

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
    </section>
  );
};

export default About;
