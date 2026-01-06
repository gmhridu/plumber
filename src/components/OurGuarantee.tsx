import { Shield, CheckCircle, Clock } from 'lucide-react';
import styles from './OurGuarantee.module.css';

const guarantees = [
  {
    icon: Shield,
    title: 'Garantie Satisfaction',
    description: 'Si vous n\'êtes pas satisfait, nous revenons gratuitement pour corriger.',
  },
  {
    icon: CheckCircle,
    title: 'Prix Fixe',
    description: 'Pas de surprise : le prix annoncé est le prix final.',
  },
  {
    icon: Clock,
    title: 'Intervention Rapide',
    description: 'Garantie d\'arrivée en moins de 30 minutes en cas d\'urgence.',
  },
];

export default function OurGuarantee() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Nos Garantie</h2>
        <div className={styles.grid}>
          {guarantees.map((guarantee, index) => (
            <div key={index} className={styles.card}>
              <guarantee.icon className={styles.icon} size={48} />
              <h3 className={styles.cardTitle}>{guarantee.title}</h3>
              <p className={styles.cardText}>{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
