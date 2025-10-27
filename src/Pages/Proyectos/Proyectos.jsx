import './Proyectos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import ecommerceImg from '../../assets/proyectos/ecommerce.png'
import appbnewsImg from '../../assets/proyectos/appbnews.png'
import taxiwebImg from '../../assets/proyectos/taxiweb.png'

const proyectos = [
  {
    titulo: 'Proyecto 1',
    img: ecommerceImg,
    repo: 'https://github.com/DMBrown2/Integrador_Dani-Brown-ENTREGA-3-FRONTEND',
    demo: 'https://integrador-dani-brown-entrega-3-frontend.onrender.com'
  },
  {
    titulo: 'Proyecto 2',
    img: appbnewsImg,
    repo: 'https://github.com/usuario/proyecto2',
    demo: 'https://prototipobnews.netlify.app/'
  },
  {
    titulo: 'Proyecto 3',
    img: taxiwebImg,
    repo: 'https://github.com/DMBrown2/taxibaires',
    demo: 'https://taxibaires.com.ar/'
  }
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="proyectos-section">
      <h2 className="proyectos-titulo">Proyectos</h2>
      <div className="proyectos-grid">
        {proyectos.map((p, i) => (
          <div className="proyecto-card" key={i}>
            <div className="proyecto-img-container">
              <img src={p.img} alt={p.titulo} className="proyecto-img" />
            </div>
            <div className="proyecto-links">
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="proyecto-link">
                <FontAwesomeIcon icon={faLaptopCode} className="proyecto-link-icon" />
                Repositorio
              </a>
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proyecto-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} className="proyecto-link-icon" />
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}