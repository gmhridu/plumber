import { Phone } from 'lucide-react';
import styles from './StickyCTA.module.css';

export default function StickyCTA() {
  return (
    <div className={styles.stickyBar}>
      <a
        href="tel:0620202084"
        className={styles.callButton}
        data-conversion-action="call"
        data-conversion-label="emergency_call"
      >
        <Phone className={styles.icon} size={20} />
        <span className={styles.text}>URGENCE : 06 20 20 20 84</span>
      </a>
    </div>
  );
}

