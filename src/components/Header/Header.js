import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`${styles.heroLayout} ${isVisible ? 'fade-in-up' : ''}`}>
          <div className={styles.heroImageSide}>
            <img 
              src="https://res.cloudinary.com/dil3rjo71/image/upload/v1762409691/Gemini_Generated_Image_x7g9sax7g9sax7g9_um1vha.png"
              alt="Ciberseguridad y protección digital"
              className={styles.sideImage}
            />
          </div>
          
          <div className={styles.content}>
            <div className={styles.brand}>
              <div className={styles.titleSection}>
                <img 
                  src="https://res.cloudinary.com/dil3rjo71/image/upload/v1762409244/Gemini_Generated_Image_xqq37vxqq37vxqq3_gevvhv.png"
                  alt="Thor Logo"
                  className={styles.heroLogo}
                />
                <h1 className={styles.title}>Thor</h1>
              </div>
              <p className={styles.subtitle}>
                Detecta estafas digitales antes de caer — con IA.
              </p>
            </div>
            
            <div className={styles.description}>
              <p>
                Plataforma educativa de ciberseguridad que te ayuda a identificar 
                y prevenir estafas digitales antes de ser víctima.
                Si sospechas que un mensaje puede ser una estafa, pregúntale directo a nuestro chatbot(Thor) y analiza la situación en segundos.
              </p>
            </div>

            <div className={styles.cta}>
              <button 
                className={styles.ctaButton}
                onClick={() => scrollToSection('analysis-tips')}
                aria-label="Ir a la guía de análisis"
              >
                Aprender a detectar estafas
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.gradient}></div>
    </header>
  );
};

export default Header;