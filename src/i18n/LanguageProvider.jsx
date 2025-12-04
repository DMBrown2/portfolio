import React, { createContext, useState, useEffect } from 'react';

const translations = {
  es: {
    header: { langLabel: 'ES', alt: 'Cambiar a español', home: 'Inicio', about: 'Sobre mi' },
    banner: {
      title: 'Full Stack Developer',
      paragraph: 'Diseño y programo soluciones digitales fáciles de usar',
      contact: 'Contactame'
    },
    proyectos: {
      title: 'Proyectos',
      repo: 'Repositorio',
      view: 'Ver Proyecto',
      items: [
        {
          title: 'Ecommerce de libros - TP Integrador',
          subtitle: 'Diseño y desarrollo del frontend en React y el backend con Node.js, Express y MongoDB. Implementación de login con token y CRUD de productos.'
        },
        {
          title: 'Prototipo App Mobile - News Aggregator',
          subtitle: 'La arquitectura se realizó pensando en la experiencia de usuario, con diseño inspirado en redes sociales, desarrollado con React Native.'
        },
        {
          title: 'Sitio web Taxi Baires',
          subtitle: 'Propuesta de diseño y de estructura, desarrollo frontend y optimización responsive. Hosteado en dominio propio, con SEO básico y TAGs de seguimiento para campaña de search.'
        }
      ]
    },
    contact: {
      title: 'Contacto',
      intro: 'Actualmente estoy en búsqueda activa de nuevas oportunidades en el desarrollo web.',
      reach: 'Si querés conocer más sobre mi perfil o pensar juntos un proyecto, podés contactarme por cualquiera de los medios abajo 👇',
      whatsapp: 'WhatsApp',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    about: {
      title: 'Sobre mí',
      p1: '👩‍🦰 Soy Full Stack Developer con orientación en Frontend. Después de varios años gestionando proyectos en agencias de publicidad, decidí volcar mi experiencia en comunicación y estrategia al mundo del desarrollo web.',
      p2: '🤓 Me divierte crear algo que sea útil. Disfruto armando experiencias digitales funcionales y atractivas, combinando diseño, código y estrategia para lograr una buena experiencia de usuario.',
      beliefsTitle: 'Creo que:',
      belief1: 'La experiencia del usuario es lo más importante',
      belief2: 'La creatividad es el motor en todo',
      belief3: 'La resolución de problemas impulsa la innovación',
      belief4: 'El trabajo en equipo hace que pasen cosas buenas',
      profileTitle: 'Perfil técnico',
      card1Title: 'Full Stack Developer',
      card1Subtitle: 'Bootcamp - Certificación 2025',
      card2Title: 'Scrum Fundamentos',
      github: 'Ir a GitHub'
    }
  },
  en: {
    header: { langLabel: 'EN', alt: 'Switch to English', home: 'Home', about: 'About' },
    banner: {
      title: 'Full Stack Developer',
      paragraph: 'I design and build user-friendly digital solutions',
      contact: 'Contact me'
    },
    proyectos: {
      title: 'Projects',
      repo: 'Repository',
      view: 'View project',
      items: [
        {
          title: 'Book Ecommerce - Capstone',
          subtitle: 'Frontend built with React and backend using Node.js, Express and MongoDB. Includes token-based login and product CRUD.'
        },
        {
          title: 'Mobile App Prototype - News Aggregator',
          subtitle: 'Architecture focused on user experience, social-inspired design, developed with React Native.'
        },
        {
          title: 'Taxi Baires Website',
          subtitle: "Design and structure proposal, frontend development, and responsive optimization. Hosted on its own domain, with tracking TAGs for a search campaign."
        }
      ]
    },
    contact: {
      title: 'Contact',
      intro: "I'm actively looking for new opportunities in web development.",
      reach: 'If you want to learn more about my profile or discuss a project, you can contact me through any of the channels below 👇',
      whatsapp: 'WhatsApp',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    about: {
      title: 'About me',
      p1: "I'm a Full Stack Developer with a Frontend focus. After several years managing projects at advertising agencies, I decided to bring my communication and strategy experience into web development.",
      p2: "I enjoy creating useful things. I'm passionate about building functional and attractive digital experiences, combining design, code and strategy to achieve a good user experience.",
      beliefsTitle: 'I believe that:',
      belief1: 'User experience is the most important',
      belief2: 'Creativity is the engine behind everything',
      belief3: 'Problem solving drives innovation',
      belief4: 'Teamwork makes good things happen',
      profileTitle: 'Technical profile',
      card1Title: 'Full Stack Developer',
      card1Subtitle: 'Bootcamp - Certification 2025',
      card2Title: 'Scrum Fundamentals',
      github: 'Go to GitHub'
    }
  }
};

export const LanguageContext = createContext({
  lang: 'es',
  toggle: () => {},
  t: (key) => key
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('site-lang') || 'es';
    } catch (e) {
      return 'es';
    }
  });

  useEffect(() => {
    try { localStorage.setItem('site-lang', lang); } catch (e) {}
  }, [lang]);

  const toggle = (value) => {
    if (value) setLang(value);
    else setLang((l) => (l === 'es' ? 'en' : 'es'));
  };

  const t = (path) => {
    const parts = path.split('.');
    let cur = translations[lang] || translations['es'];
    for (const p of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
      else return path;
    }
    return cur;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
