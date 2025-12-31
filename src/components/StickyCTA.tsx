import styles from './StickyCTA.module.css';

export default function StickyCTA() {
  return (
    <div className={styles.stickyBar}>
      <a href="tel:0123456789" className={styles.callButton}>
        <span>📞</span> APPELER : 01 23 45 67 89
      </a>
    </div>
  );
}
