import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div className={styles.column}>
          <h3 className={styles.title}>Plombier Urgence</h3>
          <p className={styles.text}>
            Service de dépannage plomberie 24h/24 et 7j/7.
            <br />
            Intervention rapide en 30 minutes.
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Contact</h3>
          <p className={styles.text}>Téléphone: 01 23 45 67 89</p>
          <p className={styles.text}>Email: contact@plombier-urgence.fr</p>
          <p className={styles.text}>Adresse: 123 Rue de la République, 75001 Paris</p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Liens Utiles</h3>
          <a href="#" className={styles.link}>Mentions Légales</a>
          <a href="#" className={styles.link}>Politique de Confidentialité</a>
          <a href="#" className={styles.link}>Plan du site</a>
        </div>
      </div>
      <div className={`container ${styles.copyright}`}>
        &copy; {new Date().getFullYear()} Plombier Urgence. Tous droits réservés.
      </div>
    </footer>
  );
}
