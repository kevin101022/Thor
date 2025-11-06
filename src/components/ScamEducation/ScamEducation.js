import React, { useEffect, useRef, useState } from 'react';
import styles from './ScamEducation.module.css';

const ScamEducation = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const scamTypes = [
    {
      id: 1,
      title: "Phishing bancario",
      icon: "🏦",
      bullets: [
        "Correos que imitan bancos pidiendo actualizar datos",
        "Enlaces falsos que llevan a páginas clonadas",
        "Urgencia artificial para crear presión"
      ],
      example: "\"Su cuenta será bloqueada en 24 horas. Haga clic aquí para verificar sus datos inmediatamente.\""
    },
    {
      id: 2,
      title: "Ofertas laborales falsas",
      icon: "💼",
      bullets: [
        "Trabajos desde casa con salarios irreales",
        "Piden dinero por adelantado para \"capacitación\"",
        "Procesos de selección demasiado simples"
      ],
      example: "\"Gane $2,000 USD trabajando 2 horas diarias desde casa. Solo pague $50 USD por el kit de inicio.\""
    },
    {
      id: 3,
      title: "Ventas falsas por redes",
      icon: "🛒",
      bullets: [
        "Productos a precios imposiblemente bajos",
        "Perfiles falsos con pocas publicaciones",
        "Pago solo por transferencia sin garantías"
      ],
      example: "\"iPhone 15 Pro nuevo por $200 USD. Solo transferencia bancaria. Entrega inmediata.\""
    },
    {
      id: 4,
      title: "Soporte técnico falso",
      icon: "🔧",
      bullets: [
        "Llamadas no solicitadas sobre \"virus\" en su PC",
        "Piden acceso remoto a su computador",
        "Cobran por servicios innecesarios"
      ],
      example: "\"Detectamos actividad maliciosa en su computador. Permítanos acceso remoto para solucionarlo.\""
    },
    {
      id: 5,
      title: "Premios y sorteos falsos",
      icon: "🎁",
      bullets: [
        "Notificaciones de premios que nunca participaste",
        "Piden datos personales para \"reclamar\" el premio",
        "Solicitan pago de impuestos o gastos de envío"
      ],
      example: "\"¡Felicidades! Ganaste $5,000 USD en nuestro sorteo. Para reclamar, envía copia de tu cédula y paga $100 USD de impuestos.\""
    },
    {
      id: 6,
      title: "Romance y citas falsas",
      icon: "💕",
      bullets: [
        "Perfiles falsos en apps de citas o redes sociales",
        "Crean vínculos emocionales para pedir dinero",
        "Inventan emergencias para solicitar transferencias"
      ],
      example: "\"Mi amor, estoy varado en el aeropuerto y necesito $300 USD para el vuelo. Te prometo devolvértelo mañana.\""
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-card-id]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="scam-education" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Las 6 estafas más comunes</h2>
          <p className={styles.subtitle}>
            Conoce las técnicas más utilizadas por estafadores digitales y aprende a identificarlas
          </p>
        </div>

        <div className={styles.grid}>
          {scamTypes.map((scam, index) => (
            <div
              key={scam.id}
              data-card-id={scam.id}
              className={`${styles.card} ${
                visibleCards.includes(scam.id) ? styles.visible : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon} role="img" aria-label={scam.title}>
                  {scam.icon}
                </span>
                <h3 className={styles.cardTitle}>{scam.title}</h3>
              </div>

              <ul className={styles.bulletList}>
                {scam.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className={styles.bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className={styles.example}>
                <span className={styles.exampleLabel}>Ejemplo típico:</span>
                <p className={styles.exampleText}>"{scam.example}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScamEducation;