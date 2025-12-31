import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div className={styles.column}>
          <h3 className={styles.title}>Plombier Express</h3>
          <p className={styles.text}>
            Service de dépannage plomberie 24h/24 et 7j/7.
            <br />
            Intervention d&apos;urgence en 30 minutes.
            <br />
            Nuit, Week-end et Jours Fériés.
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
