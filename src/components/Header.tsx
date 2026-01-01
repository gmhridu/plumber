import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/urgence-removebg-preview.png"
            alt="Urgence Plombier Paris 15"
            width={180}
            height={50}
            style={{ width: 'auto', height: '70px' }}
            priority
          />
        </Link>

        <div className={styles.ctaContainer}>
          <a href="tel:0620202084" className={styles.phoneLink}>
            <span className={styles.phoneLabel}>Disponible 24/7</span>
            <span className={styles.phoneNumber}>06 20 20 20 84</span>
          </a>
          <a
            href="tel:0620202084"
            className="btn btn-primary"
            data-conversion-action="call"
            data-conversion-label="header_call"
          >
            Appeler
          </a>
        </div>
      </div>
    </header>
  );
}
