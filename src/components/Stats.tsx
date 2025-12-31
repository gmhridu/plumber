import { Users, Clock, Star, MapPin } from 'lucide-react';
import styles from './Stats.module.css';

const stats = [
  {
    icon: Users,
    number: '500+',
    label: 'Clients Satisfaits',
  },
  {
    icon: Clock,
    number: '30 min',
    label: 'Temps Moyen d\'Intervention',
  },
  {
    icon: Star,
    number: '4.9/5',
    label: 'Note Moyenne',
  },
  {
    icon: MapPin,
    number: 'Île-de-France',
    label: 'Zone de Service',
  },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Nos Chiffres Clés</h2>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <stat.icon className={styles.icon} size={48} />
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
