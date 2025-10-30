import './Proyectos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import ecommerceImg from '../../assets/proyectos/ecommerce.png'
import appbnewsImg from '../../assets/proyectos/appbnews.png'
import taxiwebImg from '../../assets/proyectos/taxiweb.png'

const proyectos = [
  {
    titulo: 'Ecommerce de libros',
    subtitulo: 'TP final del bootcamp de desarrollo web full stack de Educación IT.',
    img: ecommerceImg,
    repo: 'https://github.com/DMBrown2/Integrador_Dani-Brown-ENTREGA-3-FRONTEND',
    demo: 'https://integrador-dani-brown-entrega-3-frontend.onrender.com'
  },
  {
    titulo: 'Prototipo app mobile',
    subtitulo: 'Prototipo mobile desarrollado con React Native. Proyecto freelance.',
    img: appbnewsImg,
    repo: 'https://github.com/usuario/proyecto2',
    demo: 'https://prototipobnews.netlify.app/'
  },
  {
    titulo: 'Sitio web Taxi Baires',
    subtitulo: 'Sitio web para empresa de taxis. Proyecto freelance.',
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

              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proyecto-img-link" title='Ver proyecto'>

            {/* titulo + subtitulo arriba */}
            <div className='texto-card-proyectos'>
              <h3 className='titulo-card-proyectos'>{p.titulo}</h3>
              <p className='subtitulo-card-proyectos'>{p.subtitulo}</p>
            </div>

            {/* imagen del proyecto */}
            <div className="proyecto-img-container">
                <img src={p.img} alt={p.titulo} className="proyecto-img" />
            </div>
            </a>

            {/* links debajo de la imagen */}
            <div className="proyecto-links">
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="proyecto-link">
                <FontAwesomeIcon icon={faLaptopCode} className="proyecto-link-icon" />
                Repositorio
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}