'use client';

import { X, Phone } from 'lucide-react';
import { useState } from 'react';
import styles from './EmergencyBanner.module.css';

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <div className={`container ${styles.content}`}>
        <div className={styles.message}>
          <Phone className={styles.icon} />
          <span className={styles.text}>
            <strong>Urgence 24/7 :</strong> Intervention en 30 minutes
          </span>
        </div>
        <a href="tel:0620202084" className={styles.callLink}>
          06 20 20 20 84
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className={styles.closeButton}
          aria-label="Fermer la bannière"
        >
          <X className={styles.closeIcon} />
        </button>
      </div>
    </div>
  );
}
