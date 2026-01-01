import { Shield, Award, Clock, CreditCard, CheckCircle, Users } from 'lucide-react';
import styles from './TrustBadges.module.css';

const badges = [
  {
    icon: Shield,
    title: 'Assuré & Certifié',
    description: 'Garantie décennale',
  },
  {
    icon: Award,
    title: 'Artisans Qualifiés',
    description: 'RGE & QualiPAC',
  },
  {
    icon: Clock,
    title: 'Disponible 24/7',
    description: 'Même jours fériés',
  },
  {
    icon: CreditCard,
    title: 'Paiement Flexible',
    description: 'CB, espèces, virement',
  },
  {
    icon: CheckCircle,
    title: 'Devis Gratuit',
    description: 'Sans engagement',
  },
  {
    icon: Users,
    title: '500+ Clients',
    description: 'Note 4.9/5',
  },
];

export default function TrustBadges() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {badges.map((badge, index) => (
            <div key={index} className={styles.badge}>
              <badge.icon className={styles.icon} />
              <div className={styles.content}>
                <h3 className={styles.title}>{badge.title}</h3>
                <p className={styles.description}>{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
