import { Shield, Clock } from 'lucide-react';
import styles from './Hero.module.css';
import { PhoneCTA } from './PhoneCTA';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={`${styles.interventionBadge} animate-fade-in`}>
          Délai moyen d&apos;intervention <span>30 min</span>
        </div>

        <h1 className={`${styles.title} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
          Plombier à Domicile
        </h1>

        <div className={`${styles.location} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
          ÎLE-DE-FRANCE
        </div>

        <div className={`${styles.actions} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
          <PhoneCTA
            phoneNumber="0620202084"
            className={styles.ctaButton}
          />
        </div>

        <p className={`${styles.subtitle} animate-fade-in`} style={{ animationDelay: '0.5s' }}>
          Une fuite d&apos;eau, une canalisation bouchée ou un chauffe-eau en panne ?
          <br />
          Nos artisans plombiers certifiés interviennent en 30 min, jours fériés inclus.
        </p>

        <div className={styles.priceTagContainer}>
          <div className={`${styles.priceTag} animate-fade-in`} style={{ animationDelay: '0.6s' }}>
            <span className={styles.priceLabel}>à partir de</span>
            <div className={styles.priceAmount}>
              <span className={styles.number}>39</span>
              <span className={styles.symbol}>€*</span>
            </div>
          </div>
        </div>

        <div className={`${styles.trustIndicators} animate-fade-in`} style={{ animationDelay: '0.7s' }}>
          <div className={styles.indicator}>
            <Shield size={20} />
            <span>Certifié & Assuré</span>
          </div>
          <div className={styles.indicator}>
            <Clock size={20} />
            <span>Disponible 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}

