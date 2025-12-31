import styles from './Services.module.css';

const services = [
  {
    title: 'Recherche de Fuite',
    description: 'Détection et réparation rapide de fuites d\'eau visibles ou encastrées.',
    icon: '💧',
  },
  {
    title: 'Débouchage',
    description: 'WC, évier, douche ou canalisation bouchée ? Intervention express.',
    icon: '🚽',
  },
  {
    title: 'Chauffe-eau',
    description: 'Réparation, détartrage et remplacement de chauffe-eau et cumulus.',
    icon: '🔥',
  },
  {
    title: 'Robinetterie',
    description: 'Remplacement de joint, installation de mitigeur et réparation.',
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
