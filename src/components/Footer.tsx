import NextImage from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div className={styles.column}>
          <div>
            <NextImage
              src="/urgence-removebg-preview.png"
              alt="Plombier d'Urgence"
              width={140}
              height={100}
              style={{ width: 'auto', height: '100px', marginBottom: '0px' }}
            />
          </div>
          <p className={styles.text}>
            Service de dépannage plomberie d&apos;urgence 24h/24 et 7j/7.
            <br />
            Intervention en 30 minutes à Paris et IDF.
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Contact Urgence</h3>
          <p className={styles.text}>
            <strong>Tél : </strong>
            <a href="tel:0620202084">06 20 20 20 84</a>
          </p>
          <p className={styles.text}>
            <strong>Email : </strong>Bats.services19@gmail.com
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Nos Interventions</h3>
          <Link href="/services/fuite-chauffe-eau-paris-15" className={styles.link}>Fuite Chauffe-Eau Paris</Link>
          <Link href="/#zones" className={styles.link}>Zones de Service</Link>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Contact Urgence</h3>
          <p className={styles.text}>
            <strong>Tél : </strong>
            <a href="tel:0620202084">06 20 20 20 84</a>
          </p>
          <p className={styles.text}>
            <strong>Email : </strong>Bats.services19@gmail.com
          </p>
          <p className={styles.text}>Zone d&apos;intervention : Paris et IDF</p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Informations</h3>
          <a href="#" className={styles.link}>Mentions Légales</a>
          <a href="#" className={styles.link}>Politique de Confidentialité</a>
          <p className={styles.text} style={{ fontSize: '0.9rem', marginTop: '10px', color: '#888' }}>
            *Tarifs majorés le soir et week-end. Devis gratuit avant intervention.
          </p>
        </div>
      </div>
      <div className={`container ${styles.copyright}`}>
        &copy; {new Date().getFullYear()} Urgence Plomb. Tous droits réservés.
      </div>
    </footer>
  );
}
