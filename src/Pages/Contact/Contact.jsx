import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Contact.css";
import { useContext } from 'react';
import { LanguageContext } from '../../i18n/LanguageProvider';

export default function Contact() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="contact" className="contact-section">
      <h2>{t('contact.title')}</h2>
      
      <p>{t('contact.intro')}<br/>
        {t('contact.reach')}</p>
      
      <div className="contact-links">
        <a
          href="https://wa.me/541164319442"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          <span>{t('contact.whatsapp')}</span>
        </a>

        <a
          href="mailto:daniimbrown@gmail.com"
          className="contact-card"
        >
          <Mail className="icon" />
          <span>{t('contact.email')}</span>
        </a>

        <a
          href="https://www.linkedin.com/in/daniela-brown-estevez/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <Linkedin className="icon" />
          <span>{t('contact.linkedin')}</span>
        </a>
      </div>
    </section>
  );
}
