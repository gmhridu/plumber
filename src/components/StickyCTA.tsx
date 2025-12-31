import styles from './StickyCTA.module.css';

export default function StickyCTA() {
  return (
    <div className={styles.stickyBar}>
      <a href="tel:0620202084" className={styles.callButton}>
        <span>📞</span> URGENCE : 06 20 20 20 84
      </a>
    </div>
  );
}
