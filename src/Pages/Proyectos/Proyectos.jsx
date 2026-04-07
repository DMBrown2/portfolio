import './Proyectos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { LanguageContext } from '../../i18n/LanguageProvider';

import appgastosImg from '../../assets/proyectos/appgastos.jpeg'
import appbnewsImg from '../../assets/proyectos/appbnews.jpeg'
import taxiwebImg from '../../assets/proyectos/taxiweb.jpeg'

const proyectos = [
  {
    titulo: 'Prototipo App Gestión de gastos',
    subtitulo: 'Gestión y división de gastos entre amigos con categorización y almacenamiento local. Interfaz intuitiva diseñada para la experiencia argentina.',
    img: appgastosImg,
    repo: 'https://github.com/DMBrown2/prototipo-CC',
    demo: 'https://appcuentasclaras.com.ar/'
  },
  {
    titulo: 'Prototipo App Mobile - News Aggregator',
    subtitulo: 'La arquitectura se realizó pensando en la experiencia de usuario, con diseño inspirado en redes sociales, desarrollado con React Native.',
    img: appbnewsImg,
    repo: 'https://github.com/DMBrown2/Prototipo-App',
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
          <div className="proyecto-item" key={i}>
            <div className="proyecto-card">
              {/* imagen de fondo */}
              <img src={p.img} alt={get(`proyectos.items.${i}.title`, p.titulo)} className="proyecto-img" />
              
              {/* overlay con contenido */}
              <div className="proyecto-overlay">
                <div className='texto-card-proyectos'>
                  <h3 className='titulo-card-proyectos'>{get(`proyectos.items.${i}.title`, p.titulo)}</h3>
                  <p className='subtitulo-card-proyectos'>{get(`proyectos.items.${i}.subtitle`, p.subtitulo)}</p>
                </div>
                
                {/* botones de acción */}
                <div className="proyecto-links">
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proyecto-link proyecto-link-demo" title={get(`proyectos.view`, 'Ver proyecto')}>
                    🚀 {get(`proyectos.view`, 'Ver proyecto')}
                  </a>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className="proyecto-link proyecto-link-repo">
                    <FontAwesomeIcon icon={faLaptopCode} className="proyecto-link-icon" />
                    {t('proyectos.repo')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}