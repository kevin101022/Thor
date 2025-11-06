import React, { useEffect, useRef, useState } from 'react';
import styles from './AnalysisTips.module.css';

const AnalysisTips = () => {
  const [visibleTips, setVisibleTips] = useState([]);
  const sectionRef = useRef(null);

  const analysisTips = [
    {
      id: 1,
      icon: "🔍",
      title: "Verifica el remitente",
      description: "Revisa cuidadosamente la dirección de correo o número de teléfono",
      details: [
        "¿La dirección coincide con la institución oficial?",
        "¿Hay errores ortográficos en el dominio?",
        "¿El número es conocido o verificable?"
      ]
    },
    {
      id: 2,
      icon: "⚠️",
      title: "Detecta la urgencia artificial",
      description: "Los estafadores crean presión para que actúes sin pensar",
      details: [
        "Frases como 'inmediatamente', 'urgente', 'en 24 horas'",
        "Amenazas de bloqueo o pérdida de servicios",
        "Ofertas que 'expiran hoy' o 'últimas unidades'"
      ]
    },
    {
      id: 3,
      icon: "🔗",
      title: "Examina los enlaces",
      description: "Nunca hagas clic sin verificar hacia dónde te dirigen",
      details: [
        "Pasa el cursor sobre el enlace sin hacer clic",
        "Verifica que la URL sea del sitio oficial",
        "Desconfía de acortadores de URL (bit.ly, tinyurl)"
      ]
    },
    {
      id: 4,
      icon: "💰",
      title: "Cuestiona las ofertas increíbles",
      description: "Si parece demasiado bueno para ser verdad, probablemente lo es",
      details: [
        "Productos de marca a precios imposibles",
        "Trabajos con salarios irreales por poco esfuerzo",
        "Premios o sorteos que no recuerdas haber participado"
      ]
    },
    {
      id: 5,
      icon: "🔒",
      title: "Protege tu información personal",
      description: "Nunca compartas datos sensibles por canales no seguros",
      details: [
        "Contraseñas, números de tarjetas, códigos de seguridad",
        "Documentos de identidad por correo o mensaje",
        "Información bancaria por teléfono no solicitado"
      ]
    },
    {
      id: 6,
      icon: "📞",
      title: "Verifica por canales oficiales",
      description: "Ante cualquier duda, contacta directamente la institución",
      details: [
        "Usa números telefónicos oficiales publicados",
        "Visita las páginas web oficiales directamente",
        "Acércate a oficinas físicas si es necesario"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tipId = parseInt(entry.target.dataset.tipId);
            setVisibleTips(prev => [...new Set([...prev, tipId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const tips = sectionRef.current?.querySelectorAll('[data-tip-id]');
    tips?.forEach(tip => observer.observe(tip));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="analysis-tips" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Cómo analizar mensajes sospechosos</h2>
          <p className={styles.subtitle}>
            Guía práctica para identificar estafas digitales antes de ser víctima
          </p>
        </div>

        <div className={styles.tipsGrid}>
          {analysisTips.map((tip, index) => (
            <div
              key={tip.id}
              data-tip-id={tip.id}
              className={`${styles.tipCard} ${
                visibleTips.includes(tip.id) ? styles.visible : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.tipHeader}>
                <span className={styles.tipIcon} role="img" aria-label={tip.title}>
                  {tip.icon}
                </span>
                <div className={styles.tipTitleSection}>
                  <h3 className={styles.tipTitle}>{tip.title}</h3>
                  <p className={styles.tipDescription}>{tip.description}</p>
                </div>
              </div>

              <ul className={styles.detailsList}>
                {tip.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className={styles.detailItem}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.actionSection}>
          <div className={styles.actionCard}>
            <div className={styles.actionHeader}>
              <span className={styles.actionIcon}>🛡️</span>
              <h3 className={styles.actionTitle}>¿Tienes un mensaje sospechoso?</h3>
            </div>
            <p className={styles.actionDescription}>
              Usa esta guía para analizarlo paso a paso. Si aún tienes dudas, repórtalo en la sección de contacto 
              o consulta con las autoridades competentes.
            </p>
            <button 
              className={styles.actionButton}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Reportar mensaje sospechoso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisTips;