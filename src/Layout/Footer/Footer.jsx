import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <a href="/">Inicio</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#about">Sobre mí</a>
        <a href="#contact">Contacto</a>
      </nav>

      <div className="footer-icons">
        <a href="https://wa.me/541164319442" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="icon"/>
        </a>
        <a href="mailto:daniimbrown@gmail.com">
          <Mail />
        </a>
        <a href="https://www.linkedin.com/in/daniela-brown-estevez" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
        <a href="https://github.com/DMBrown2" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
      </div>

      <p className="footer-copy">© 2025 Daniela Brown. Todos los derechos reservados.</p>
    </footer>
  );
}
