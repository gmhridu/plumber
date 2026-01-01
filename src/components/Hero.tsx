import { Phone, Shield, Clock } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={`${styles.badge} animate-fade-in`}>
          <Clock size={16} />
          Intervention immédiate 24/7
        </div>
        <h1 className={`${styles.title} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
          Plombier d&apos;Urgence Paris et banlieue – Intervention en 30 min
        </h1>
        <p className={`${styles.subtitle} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
          Une fuite d&apos;eau, une canalisation bouchée ou un chauffe-eau en panne ?
          <br />
          Nos artisans plombiers certifiés interviennent à Paris et toute l&apos;Île-de-France, jours fériés inclus.
        </p>
        <div className={`${styles.trustIndicators} animate-fade-in`} style={{ animationDelay: '0.5s' }}>
          <div className={styles.indicator}>
            <Shield size={20} />
            <span>Certifié & Assuré</span>
          </div>
          <div className={styles.indicator}>
            <Clock size={20} />
            <span>Disponible 24/7</span>
          </div>
        </div>
        <div className={`${styles.actions} animate-fade-in`} style={{ animationDelay: '0.6s' }}>
          <a href="tel:0620202084" className={`btn btn-primary ${styles.ctaButton}`}>
            <Phone size={24} />
            Appelez maintenant - 06 20 20 20 84
          </a>
          <a href="#services" className={`btn btn-secondary ${styles.secondaryButton}`}>
            Voir nos services
          </a>
        </div>
      </div>
    </section>
  );
}

