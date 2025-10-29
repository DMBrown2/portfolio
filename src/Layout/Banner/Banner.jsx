import bannerImg from '../../assets/banner/banner-dev-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Banner.css';

export default function Banner() {
  return (
    <section className="section-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="overlay">

        <div className="banner-content">
          <h1 className="titulo-banner">Full Stack Developer</h1>
          <p className="parrafo-banner">Diseño y programo soluciones digitales fáciles de usar</p>

          <div className="banner-btn-container">
            <a 
              className='banner-cta'
              href="https://wa.me/+5491164319442"
              target='_blank'
              rel='noopener noreferrer'
            >
              Contactame
              <span className="cta-icon" aria-hidden>
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </span>
            </a>
          </div>

        </div>
      
      </div>
    </section>
  );
}