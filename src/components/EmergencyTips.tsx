import { AlertTriangle, Phone, Wrench } from 'lucide-react';
import styles from './EmergencyTips.module.css';

const tips = [
  {
    icon: AlertTriangle,
    title: 'Fermez l\'arrivée d\'eau principale',
    description: 'Localisez le compteur d\'eau et fermez-le immédiatement pour arrêter la fuite.',
  },
  {
    icon: Phone,
    title: 'Appelez-nous tout de suite',
    description: 'Ne tentez pas de réparer vous-même. Contactez notre équipe 24/7.',
  },
  {
    icon: Wrench,
    title: 'Épongez l\'eau si possible',
    description: 'Utilisez des serviettes ou un aspirateur pour limiter les dégâts.',
  },
];

export default function EmergencyTips() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Que faire en cas d&apos;urgence ?</h2>
        <div className={styles.grid}>
          {tips.map((tip, index) => (
            <div key={index} className={styles.card}>
              <tip.icon className={styles.icon} size={48} />
              <h3 className={styles.cardTitle}>{tip.title}</h3>
              <p className={styles.cardText}>{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
