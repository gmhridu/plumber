import { MapPin } from 'lucide-react';
import styles from './ServiceAreas.module.css';

const serviceAreas = [
  { name: 'Paris 15ème', featured: true },
  { name: 'Paris 16ème', featured: true },
  { name: 'Paris 17ème', featured: true },
  { name: 'Levallois-Perret', featured: true },
  { name: 'Neuilly-sur-Seine', featured: false },
  { name: 'Boulogne-Billancourt', featured: false },
  { name: 'Issy-les-Moulineaux', featured: false },
  { name: 'Courbevoie', featured: false },
  { name: 'Puteaux', featured: false },
  { name: 'Clichy', featured: false },
  { name: 'Asnières-sur-Seine', featured: false },
  { name: 'Colombes', featured: false },
];

export default function ServiceAreas() {
  return (
    <section className={styles.section} id="zones">
      <div className="container">
        <div className={styles.header}>
          <MapPin className={styles.headerIcon} />
          <h2 className={styles.title}>Zones d&apos;Intervention</h2>
          <p className={styles.subtitle}>
            Service de plomberie d&apos;urgence disponible 24/7 dans tout Paris et sa proche banlieue
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
              {area.featured && <span className={styles.badge}>Prioritaire</span>}
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Votre commune n&apos;est pas listée ? Contactez-nous pour vérifier notre disponibilité.
          </p>
          <a href="tel:0620202084" className="btn btn-primary">
            Vérifier ma zone
          </a>
        </div>
      </div>
    </section>
  );
}
