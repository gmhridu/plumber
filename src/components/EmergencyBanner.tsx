'use client';

import { X, Phone } from 'lucide-react';
import { useState } from 'react';
import styles from './EmergencyBanner.module.css';
import { PhoneCTA } from './PhoneCTA';

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.message}>
          <Phone className={styles.icon} />
          <span className={styles.text}>
            <strong>Urgence 24/7 :</strong> Intervention en 30 minutes
          </span>
        </div>

        <PhoneCTA
          phoneNumber="0620202084"
          className={styles.callLink}
        />

        <button
          onClick={() => setIsVisible(false)}
          className={styles.closeButton}
          aria-label="Fermer"
        >
          <X />
        </button>
      </div>
    </div>
  );
}
