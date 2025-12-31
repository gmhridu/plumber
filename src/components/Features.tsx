import { CheckCircle } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    title: 'Intervention Rapide',
    description: 'Une urgence n’attend pas. Arrivée en moins de 30 minutes, 24h/24 et 7j/7.',
  },
  {
    title: 'Tarifs Transparents',
    description: 'Pas de surprise : devis annoncé avant intervention. Prix fixes et agréés assurances.',
  },
  {
    title: 'Plombiers Qualifiés',
    description: 'Artisans professionnels et expérimentés. Travail soigné et garanti.',
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <CheckCircle className={styles.check} size={24} />
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
