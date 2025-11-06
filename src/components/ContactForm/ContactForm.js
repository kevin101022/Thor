import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suspiciousLink: '',
    captureFile: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Integración con Formspree usando FormData para archivos
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('suspiciousLink', formData.suspiciousLink);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', 'Nuevo reporte de estafa - Thor Anti-Scam');
      
      if (formData.captureFile) {
        formDataToSend.append('captureFile', formData.captureFile);
      }

      // Reemplazar 'YOUR_FORM_ID' con el ID real de Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          suspiciousLink: '',
          captureFile: null,
          message: ''
        });
        // Limpiar el input de archivo
        const fileInput = document.getElementById('captureFile');
        if (fileInput) fileInput.value = '';
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

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
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                value={formData.suspiciousLink}
                onChange={handleChange}
                className={styles.input}
                placeholder="https://sitio-sospechoso.com"
              />
              <small className={styles.inputHelp}>
                Pega aquí el enlace que consideras sospechoso para que lo analicemos
              </small>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="captureFile" className={styles.label}>
                Captura de pantalla de la estafa (opcional)
              </label>
              <input
                type="file"
                id="captureFile"
                name="captureFile"
                onChange={handleChange}
                className={styles.fileInput}
                accept="image/*,.pdf"
              />
              <small className={styles.inputHelp}>
                Sube una imagen o PDF con evidencia de la estafa (máx. 10MB)
              </small>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                Describe el intento de estafa *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
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
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? 'Enviando reporte...' : 'Enviar reporte'}
              </button>

              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  <span className={styles.successIcon}>✅</span>
                  Reporte enviado exitosamente. Gracias por ayudar a proteger a otros.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  <span className={styles.errorIcon}>❌</span>
                  Error al enviar el reporte. Por favor intenta nuevamente.
                </div>
              )}
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