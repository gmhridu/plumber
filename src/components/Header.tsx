import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { PhoneCTA } from './PhoneCTA';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/urgence-removebg-preview.png"
            alt="Urgence Plombier"
            width={180}
            height={50}
            style={{ width: 'auto', height: '70px' }}
            priority
          />
        </Link>

        <div className={styles.ctaContainer}>
          <a href="tel:06 65 91 48 29" className={styles.phoneLink}>
            <span className={styles.phoneLabel}>Disponible 24/7</span>
            <span className={styles.phoneNumber}>06 65 91 48 29</span>
          </a>
          <PhoneCTA
            phoneNumber="06 65 91 48 29"
            className={styles.callBtn}
            variant="primary"
          />

        </div>
      </div>
    </header>
  );
}
