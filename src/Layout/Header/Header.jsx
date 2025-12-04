import { useRef, useContext } from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import logodani from '../../assets/Logo/logodani.png';
import usFlag from '../../assets/flags/us.svg';
import esFlag from '../../assets/flags/es.svg';
import { LanguageContext } from '../../i18n/LanguageProvider';


export default function Header() {
const burgerRef = useRef();
const { lang, toggle, t } = useContext(LanguageContext);

  // Función para cerrar el menú
  const closeMenu = () => {
    if (burgerRef.current) {
      burgerRef.current.checked = false;
    }
  };

  return (
    <div className="main-header">
      {/* MENU HAMBURGUESA  */}
      <input type="checkbox" id="burger" className="input-burger" ref={burgerRef} />
      <label className="burger-container" htmlFor="burger">
        <div className="burger" />
      </label>

      {/* language toggle: show both flags, active one highlighted */}
      <div className="lang-toggle">
        <button
          type="button"
          className={`flag-btn ${lang === 'es' ? 'active' : ''}`}
          onClick={() => toggle('es')}
          aria-label="Español"
          title="Español"
        >
          <img src={esFlag} alt="Español" />
        </button>
        <button
          type="button"
          className={`flag-btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => toggle('en')}
          aria-label="English"
          title="English"
        >
          <img src={usFlag} alt="English" />
        </button>
      </div>
      {/* CLAIM + LOGO + USER INFO  */}
      <div className="contenedor-logo">
        <a href="#inicio" className="nav-link">
          <img
            className="logo"
            src={logodani}
            alt="LOGO"
          />
        </a>

      </div>

      {/* Overlay para cerrar el menú */}
      <div
        className="nav-overlay"
        onClick={closeMenu}
      />

    {/* MAIN NAV */}
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="inicio"
              smooth={true}
              duration={500}
              offset={-110}
              className="nav-link"
              onClick={closeMenu}
            >
              {t ? t('header.home') : 'Inicio'}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="proyectos"
              smooth={true}
              duration={500}
              offset={-60}
              className="nav-link"
              onClick={closeMenu}
            >
              {t ? t('proyectos.title') : 'Proyectos'}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-60}
              className="nav-link"
              onClick={closeMenu}
            >
              {t ? t('header.about') : 'Sobre mi'}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-60}
              className="nav-link"
              onClick={closeMenu}
            >
              {t ? t('contact.title') : 'Contacto'}
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}
