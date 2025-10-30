import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      
      <p>Actualmente estoy en búsqueda activa de nuevas oportunidades en el desarrollo web. <br/>
        Si querés conocer más sobre mi perfil o pensar juntos un proyecto, podés contactarme por cualquiera de los medios de abajo 👇</p>
      
      

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

        {/* <a
          href="https://github.com/DMBrown2"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <Github className="icon" />
          <span>GitHub</span>
        </a> */}
      </div>
    </section>
  );
}
