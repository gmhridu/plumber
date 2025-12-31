import styles from './Services.module.css';

const services = [
  {
    title: 'Fuite d’eau Urgente',
    description: 'Arrêt immédiat de fuite d\'eau. Réparation sur tuyauterie cuivre, PER, multicouche.',
    icon: '💧',
  },
  {
    title: 'Débouchage Canalisation',
    description: 'Intervention haute pression pour déboucher WC, évier, douche et colonne générale.',
    icon: '🚽',
  },
  {
    title: 'Chauffe-eau en Panne',
    description: 'Dépannage rapide de ballon d\'eau chaude et chaudière. Remplacement thermostat et résistance.',
    icon: '🔥',
  },
  {
    title: 'WC et Sanitaires',
    description: 'Réparation de chasse d\'eau, remplacement de robinetterie et joint d\'étanchéité.',
    icon: '🔧',
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <h2 className={styles.title}>Nos Services d&apos;Urgence</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.icon}>{service.icon}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
