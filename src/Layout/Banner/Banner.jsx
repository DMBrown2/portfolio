import bannerImg from '../../assets/banner/banner-dev-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Banner.css';
import { useContext } from 'react';
import { LanguageContext } from '../../i18n/LanguageProvider';

export default function Banner() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="section-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="overlay">

        <div className="banner-content">
          <h1 className="titulo-banner">{t('banner.title')}</h1>
          <p className="parrafo-banner">{t('banner.paragraph')}</p>

          <div className="banner-btn-container">
            <a 
              className='banner-cta'
              href="https://wa.me/+5491164319442"
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('banner.contact')}
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