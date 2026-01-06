import { Clock, Zap, Euro, Award } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const benefits = [
  {
    icon: Clock,
    title: 'Plombier d’urgence 24h/24 et 7j/7',
    description: 'Service d\'urgence disponible tous les jours et toutes les nuits en Île-de-France.',
  },
  {
    icon: Zap,
    title: 'Intervention 30 min',
    description: 'Arrivée sur site ultra-rapide pour tout dépannage plomberie d\'urgence.',
  },
  {
    icon: Euro,
    title: 'Prix Fixes & Devis',
    description: 'Tarification transparente et devis gratuit avant chaque intervention.',
  },
  {
    icon: Award,
    title: 'Plombiers Certifiés',
    description: 'Artisans qualifiés pour garantir une réparation durable et aux normes.',
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
              <benefit.icon className={styles.icon} />
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardText}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
