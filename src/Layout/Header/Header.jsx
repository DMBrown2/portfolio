import { useRef } from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo/logo-dani.png';



export default function Header() {
const burgerRef = useRef();

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
      {/* CLAIM + LOGO + USER INFO  */}
      <div className="contenedor-logo">
        <a href="#inicio" className="nav-link">
          <img
            className="logo"
            src={logo}
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
              Inicio
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
              Proyectos
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
              Sobre mi
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
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}
