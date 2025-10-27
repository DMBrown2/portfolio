import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <p>Actualmente me encuentro en búsqueda activa de una posición en relación de dependencia, donde pueda seguir creciendo como desarrolladora web y aportar valor a nuevos proyectos.</p>

      <div className="contact-links">
        <a
          href="https://wa.me/541164319442"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          <span>WhatsApp</span>
        </a>

        <a
          href="mailto:daniimbrown@gmail.com"
          className="contact-card"
        >
          <Mail className="icon" />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/daniela-brown-estevez/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <Linkedin className="icon" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/DMBrown2"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <Github className="icon" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}
