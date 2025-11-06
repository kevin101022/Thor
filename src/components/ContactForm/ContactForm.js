import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <section id="contact" className={styles.section}>
        <div className="container">
          <div className={styles.successContainer}>
            <div className={styles.successMessage}>
              <span className={styles.successIcon}>✅</span>
              <h2>¡Reporte enviado exitosamente!</h2>
              <p>Gracias por ayudar a proteger a otros de las estafas digitales.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className={styles.backButton}
              >
                Enviar otro reporte
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Reporta un intento de estafa real o contáctanos</h2>
          <p className={styles.subtitle}>
            Ayúdanos a crear una base de datos de estafas reales para proteger a más personas
          </p>
        </div>

        <div className={styles.formContainer}>
          <form 
            className={styles.form} 
            action="https://formspree.io/f/mldoqzpl" 
            method="POST"
            onSubmit={() => setTimeout(() => setIsSubmitted(true), 1000)}
          >
            <input type="hidden" name="_subject" value="Nuevo reporte de estafa - Thor Anti-Scam" />
            
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  required
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="suspiciousLink" className={styles.label}>
                Link sospechoso para verificar (opcional)
              </label>
              <input
                type="url"
                id="suspiciousLink"
                name="suspiciousLink"
                className={styles.input}
                placeholder="https://sitio-sospechoso.com"
              />
              <small className={styles.inputHelp}>
                Pega aquí el enlace que consideras sospechoso para que lo analicemos
              </small>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                Describe el intento de estafa *
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                required
                rows={6}
                placeholder="Describe detalladamente el intento de estafa: ¿cómo te contactaron?, ¿qué te pidieron?, ¿qué información solicitaron?, etc."
              />
            </div>

            <div className={styles.submitSection}>
              <button
                type="submit"
                className={styles.submitButton}
              >
                Enviar reporte
              </button>
            </div>
          </form>

          <div className={styles.infoPanel}>
            <div className={styles.infoHeader}>
              <span className={styles.infoIcon}>🛡️</span>
              <h3 className={styles.infoTitle}>Tu información está segura</h3>
            </div>
            <ul className={styles.infoList}>
              <li>No compartimos datos personales con terceros</li>
              <li>Los reportes se usan solo para fines educativos</li>
              <li>Puedes reportar de forma anónima</li>
              <li>Toda información es tratada confidencialmente</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;