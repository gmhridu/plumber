import { Clock, Zap, Euro, Award } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const benefits = [
  {
    icon: Clock,
    title: '24/7 Disponible',
    description: 'Service d\'urgence disponible tous les jours et toutes les nuits.',
  },
  {
    icon: Zap,
    title: 'Intervention Rapide',
    description: 'Arrivée sur site en moins de 30 minutes.',
  },
  {
    icon: Euro,
    title: 'Tarifs Transparents',
    description: 'Devis clair et prix fixes sans surprise.',
  },
  {
    icon: Award,
    title: 'Plombiers Certifiés',
    description: 'Équipe de professionnels qualifiés et expérimentés.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Pourquoi Nous Choisir</h2>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <benefit.icon className={styles.icon} size={48} />
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardText}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
