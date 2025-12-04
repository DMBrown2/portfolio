import './Proyectos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { LanguageContext } from '../../i18n/LanguageProvider';

import ecommerceImg from '../../assets/proyectos/ecommerce.png'
import appbnewsImg from '../../assets/proyectos/appbnews.png'
import taxiwebImg from '../../assets/proyectos/taxiweb.png'

const proyectos = [
  {
    titulo: 'Ecommerce de libros - TP Integrador',
    subtitulo: 'Diseño y desarrollo del frontend en React y el backend con Node.js, Express y MongoDB. Implementación de login con token y CRUD de productos.',
    img: ecommerceImg,
    repo: 'https://github.com/DMBrown2/Integrador_Dani-Brown-ENTREGA-3-FRONTEND',
    demo: 'https://integrador-dani-brown-entrega-3-frontend.onrender.com'
  },
  {
    titulo: 'Prototipo App Mobile - News Aggregator',
    subtitulo: 'La arquitectura se realizó pensando en la experiencia de usuario, con diseño inspirado en redes sociales, desarrollado con React Native.',
    img: appbnewsImg,
    repo: 'https://github.com/usuario/proyecto2',
    demo: 'https://prototipobnews.netlify.app/'
  },
  {
    titulo: 'Sitio web Taxi Baires',
    subtitulo: 'Propuesta de diseño y de estructura, desarrollo frontend y optimización responsive.',
    img: taxiwebImg,
    repo: 'https://github.com/DMBrown2/taxibaires',
    demo: 'https://taxibaires.com.ar/'
  }
];

export default function Proyectos() {
  const { t } = useContext(LanguageContext);
  const get = (key, fallback) => {
    const res = t(key);
    return typeof res === 'string' && res === key ? fallback : res;
  };
  return (
    <section id="proyectos" className="proyectos-section">
      <h2 className="proyectos-titulo">{t('proyectos.title')}</h2>
      <div className="proyectos-grid">
        {proyectos.map((p, i) => (
          <div className="proyecto-card" key={i}>
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proyecto-img-link" title={get(`proyectos.view`, 'Ver proyecto')}>

            {/* titulo + subtitulo arriba */}
            <div className='texto-card-proyectos'>
              <h3 className='titulo-card-proyectos'>{get(`proyectos.items.${i}.title`, p.titulo)}</h3>
              <p className='subtitulo-card-proyectos'>{get(`proyectos.items.${i}.subtitle`, p.subtitulo)}</p>
            </div>

            {/* imagen del proyecto */}
            <div className="proyecto-img-container">
                <img src={p.img} alt={get(`proyectos.items.${i}.title`, p.titulo)} className="proyecto-img" />
            </div>
            </a>

            {/* links debajo de la imagen */}
            <div className="proyecto-links">
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="proyecto-link">
                <FontAwesomeIcon icon={faLaptopCode} className="proyecto-link-icon" />
                {t('proyectos.repo')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}