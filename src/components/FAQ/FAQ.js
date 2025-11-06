import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const faqData = [
    {
      id: 1,
      question: "¿Qué hacer si ya envié datos personales?",
      answer: [
        "1. Cambia inmediatamente todas las contraseñas comprometidas",
        "2. Contacta tu banco para reportar posible fraude",
        "3. Monitorea tus cuentas bancarias y tarjetas de crédito",
        "4. Reporta el incidente a la Policía Nacional (CAI Virtual)",
        "5. Considera congelar tu reporte crediticio"
      ]
    },
    {
      id: 2,
      question: "¿Qué hago si ya envié dinero?",
      answer: [
        "1. Contacta inmediatamente tu banco o entidad financiera",
        "2. Solicita la reversión de la transacción si es posible",
        "3. Presenta denuncia formal ante la Fiscalía General",
        "4. Reporta en el CAI Virtual de la Policía Nacional",
        "5. Guarda toda la evidencia: capturas, correos, números de cuenta"
      ]
    },
    {
      id: 3,
      question: "¿Dónde reporto estafas en Colombia?",
      answer: [
        "• Denuncia Virtual (CAI Virtual): <a href='https://caivirtual.policia.gov.co/' target='_blank' rel='noopener noreferrer'>caivirtual.policia.gov.co</a>",
        "• Fiscalía - Denuncia Virtual: <a href='tel:018000919748'>01 8000 9197 48</a> o <a href='tel:122'>122</a> desde móvil",
        "• Superintendencia Financiera: <a href='https://www.superfinanciera.gov.co' target='_blank' rel='noopener noreferrer'>www.superfinanciera.gov.co</a>",
        "• Línea Anticorrupción: <a href='tel:157'>157</a>",
        "• Defensoría del Consumidor: <a href='https://www.sic.gov.co' target='_blank' rel='noopener noreferrer'>www.sic.gov.co</a>"
      ]
    },
    {
      id: 4,
      question: "¿Cómo contactar Policía Cibercrimen?",
      answer: [
        "• Emergencia general: <a href='tel:123'>123</a> (peligro inmediato o fraude en curso)",
        "• CAI Virtual: <a href='https://caivirtual.policia.gov.co/' target='_blank' rel='noopener noreferrer'>caivirtual.policia.gov.co</a>",
        "• Teléfono CAI Virtual: <a href='tel:015159700'>01 515 9700</a> ext. 30409",
        "• Bogotá: <a href='tel:016015159111'>601 515 9111/9112</a>",
        "• Nacional: <a href='tel:018000910112'>01 8000 910112</a>",
        "• WhatsApp: <a href='https://wa.me/573202948647' target='_blank' rel='noopener noreferrer'>320 294 8647</a>"
      ]
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>¿Qué hacer en caso de estafa?</h2>
          <p className={styles.subtitle}>
            Guía de acción inmediata para víctimas de estafas digitales en Colombia
          </p>
        </div>

        <div className={styles.faqContainer}>
          {faqData.map((item) => (
            <div key={item.id} className={styles.faqItem}>
              <button
                className={`${styles.question} ${
                  openItems.includes(item.id) ? styles.active : ''
                }`}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
                aria-controls={`answer-${item.id}`}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.icon}>
                  {openItems.includes(item.id) ? '−' : '+'}
                </span>
              </button>
              
              <div
                id={`answer-${item.id}`}
                className={`${styles.answer} ${
                  openItems.includes(item.id) ? styles.open : ''
                }`}
              >
                <div className={styles.answerContent}>
                  {item.answer.map((line, index) => (
                    <p 
                      key={index} 
                      className={styles.answerLine}
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.emergencyContact}>
          <div className={styles.emergencyHeader}>
            <span className={styles.emergencyIcon}>🚨</span>
            <h3 className={styles.emergencyTitle}>Contacto de emergencia</h3>
          </div>
          <p className={styles.emergencyText}>
            Si estás siendo víctima de una estafa en este momento, llama inmediatamente al 
            <a href="tel:123"> 123 </a> (Emergencias generales) o reporta en línea: 
            <a href="https://caivirtual.policia.gov.co/" target="_blank" rel="noopener noreferrer"> CAI Virtual</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;