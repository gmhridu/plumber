
import styles from './StickyCTA.module.css';
import { PhoneCTA } from './PhoneCTA';

export default function StickyCTA() {
  return (
    <div className={styles.stickyBar}>
      <PhoneCTA
        phoneNumber="0620202084"
        className={styles.callButton}
      />
    </div>
  );
}

