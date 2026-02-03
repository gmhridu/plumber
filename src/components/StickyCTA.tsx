
import styles from './StickyCTA.module.css';
import { PhoneCTA } from './PhoneCTA';

export default function StickyCTA() {
  return (
    <div className={styles.stickyBar}>
      <PhoneCTA
        phoneNumber="06 65 91 48 29"
        className={styles.callButton}
      />
    </div>
  );
}

