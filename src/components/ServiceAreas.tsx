import { MapPin } from 'lucide-react';
import styles from './ServiceAreas.module.css';

const serviceAreas = [
  { name: 'Hauts-de-Seine', featured: true },
  { name: 'Seine-Saint-Denis', featured: true },
  { name: 'Val-de-Marne', featured: true },
  { name: 'Yvelines', featured: false },
  { name: 'Essonne', featured: false },
  { name: 'Val-d’Oise', featured: false },
  { name: 'Seine-et-Marne', featured: false },
  { name: 'Île de France', featured: false },
];

export default function ServiceAreas() {
  return (
    <section className={styles.section} id="zones">
      <div className="container">
        <div className={styles.header}>
          <MapPin className={styles.headerIcon} />
          <h2 className={styles.title}>Zones d&apos;Intervention</h2>
          <p className={styles.subtitle}>
            Service de plomberie d&apos;urgence disponible 24/7 dans toute l&apos;Île-de-France
          </p>
        </div>

        <div className={styles.grid}>
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className={`${styles.card} ${area.featured ? styles.featured : ''}`}
            >
              <MapPin className={styles.icon} />

              <span className={styles.areaName}>{area.name}</span>

              {area.featured && (
                <span className={styles.badge}>Prioritaire</span>
              )}
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Votre commune n&apos;est pas listée ? Contactez-nous pour vérifier notre disponibilité.
          </p>
          <a href="tel:06 65 91 48 29" className="btn btn-primary">
            Vérifier ma zone
          </a>
        </div>
      </div>
    </section>
  );
}
