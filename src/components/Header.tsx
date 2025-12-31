import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <div className={styles.logo}>
          Plombier<span>Express</span>
        </div>

        <div className={styles.ctaContainer}>
          <a href="tel:0620202084" className={styles.phoneLink}>
            <span className={styles.phoneLabel}>Disponible 24/7</span>
            <span className={styles.phoneNumber}>06 20 20 20 84</span>
          </a>
          <a href="tel:0620202084" className="btn btn-primary">
            Appeler
          </a>
        </div>
      </div>
    </header>
  );
}
