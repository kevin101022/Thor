import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Cerrar menú móvil al navegar
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={styles.logoButton}
            >
              <img 
                src="https://res.cloudinary.com/dil3rjo71/image/upload/v1762409244/Gemini_Generated_Image_xqq37vxqq37vxqq3_gevvhv.png"
                alt="Thor Logo"
                className={styles.logoImage}
              />
              <span className={styles.logoText}>Thor</span>
            </button>
          </div>

          <button 
            className={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="Abrir menú de navegación"
          >
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
          </button>

          <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
            <li>
              <button 
                onClick={() => scrollToSection('scam-education')}
                className={styles.navLink}
              >
                Estafas Comunes
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('analysis-tips')}
                className={styles.navLink}
              >
                Análisis
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('faq')}
                className={styles.navLink}
              >
                FAQ
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className={styles.navLink}
              >
                Reportar
              </button>
            </li>
          </ul>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;