import React, { useEffect, useContext } from "react";
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
import { LanguageContext } from '../../i18n/LanguageProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons/faPuzzlePiece";

import scrum from '../../assets/about/scrum.png';
import sprint from '../../assets/about/sprint.png';
import daily from '../../assets/about/daily.png';
import retrospectives from '../../assets/about/retrospectives.png';


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

  const { t } = useContext(LanguageContext);

  return (
    <section className="about section" id="about">
      <h2 className="section-title reveal">{t('about.title')}</h2>

      <p className="about-text reveal">{t('about.p1')}</p>

      <p className="about-text reveal">{t('about.p2')}</p>

      {/* En qué creo */}
      <div className="beliefs reveal">
        <h3 className="subsection-title">{t('about.beliefsTitle')}</h3>
        <div className="beliefs-tags">

          <div className="belief-tag">
            <FontAwesomeIcon icon={faUser} className="belief-icon" />
            <span>{t('about.belief1')}</span>
          </div>

          <div className="belief-tag">
            <FontAwesomeIcon icon={faLightbulb} className="belief-icon" />
            <span>{t('about.belief2')}</span>
          </div>

          <div className="belief-tag">
            <FontAwesomeIcon icon={faPuzzlePiece} className="belief-icon" />
            <span>{t('about.belief3')}</span>
          </div>

          <div className="belief-tag">
            <FontAwesomeIcon icon={faUserFriends} className="belief-icon" />
            <span>{t('about.belief4')}</span>
          </div>

        </div>
      </div>

      {/* 🧩 Perfil técnico */}
      <h3 className="subsection-title">{t('about.profileTitle')}</h3>

      <div className="about-cards-container">
        {/* Card 1 - Full Stack */}
        <a
          href="https://github.com/DMBrown2?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          title={t('about.github')}
        >
            <div className="about-card reveal">
            <FaCode className="about-card-img" />
            <h3 className="about-card-title">{t('about.card1Title')}</h3>
            <p className="about-card-subtitle">{t('about.card1Subtitle')}</p>

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
          {/* <FaUserGraduate className="about-card-icon" /> */}
          <img src={scrum} alt="scrum" className="about-card-img"/>
          <h3 className="about-card-title-scrum">{t('about.card2Title')}</h3>
          {/* <p className="about-card-subtitle">
            Certificación en Scrum Fundamentos
          </p> */}

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
              <img src={sprint} alt="sprint" className="tech-icon"/>
              <span className="method-tag">Sprint Planning</span>
            </div>
            <div className="tech-item">
              <img src={daily} alt="daily" className="tech-icon"/>
              <span className="method-tag">Daily Meetings</span>
            </div>
            <div className="tech-item">
              <img src={retrospectives} alt="retrospectives" className="tech-icon"/>
              <span className="method-tag">Retrospectives</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
