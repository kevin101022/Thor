import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.brandHeader}>
              <img 
                src="https://res.cloudinary.com/dil3rjo71/image/upload/v1762409244/Gemini_Generated_Image_xqq37vxqq37vxqq3_gevvhv.png"
                alt="Thor Logo"
                className={styles.brandImage}
              />
              <h3 className={styles.brandName}>Thor</h3>
            </div>
            <p className={styles.brandTagline}>
              Detecta estafas digitales antes de caer — con IA.
            </p>
          </div>

          <div className={styles.info}>
            <div className={styles.project}>
              <h4 className={styles.sectionTitle}>Proyecto Académico</h4>
              <p className={styles.projectDescription}>
                Desarrollado como proyecto del bootcamp de IA-Talento Tech 2025
              </p>
              <p className={styles.students}>
                Creado por: Kevin Andres Rivera Suarez
              </p>
            </div>


          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>© {currentYear} Thor. Protege tu patrimonio digital. Proyecto académico — Talento Tech 2025</p>
          </div>
          <div className={styles.disclaimer}>
            <p>
              Este es un proyecto educativo. Para reportes oficiales de estafas, 
              contacta las autoridades competentes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;