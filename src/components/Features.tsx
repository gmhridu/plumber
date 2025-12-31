import styles from './Features.module.css';

const features = [
  {
    title: 'Disponibilité 24/7',
    description: 'Une urgence n’attend pas. Nous sommes disponibles nuit et jour, dimanches et jours fériés.',
  },
  {
    title: 'Tarifs Transparents',
    description: 'Devis clair et détaillé avant toute intervention. Pas de surprise sur la facture.',
  },
  {
    title: 'Artisans Qualifiés',
    description: 'Nos plombiers sont certifiés et expérimentés pour garantir un travail de qualité.',
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <span className={styles.check}>✓</span>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
