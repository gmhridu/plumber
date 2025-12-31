import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <div className={styles.logo}>
          Urgence<span>Plombier</span>
        </div>

        <div className={styles.ctaContainer}>
          <a href="tel:0123456789" className={styles.phoneLink}>
            <span className={styles.phoneLabel}>Disponible 24/7</span>
            <span className={styles.phoneNumber}>01 23 45 67 89</span>
          </a>
          <a href="tel:0123456789" className="btn btn-primary">
            Appeler
          </a>
        </div>
      </div>
    </header>
  );
}
