import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>Intervention en 30 min</div>
        <h1 className={styles.title}>
          Plombier Urgence à Domicile <br />
          Disponible 24h/24 et 7j/7
        </h1>
        <p className={styles.subtitle}>
          Fuite d&apos;eau, débouchage de canalisation, chauffe-eau en panne ?
          <br />
          Nos experts interviennent immédiatement.
        </p>
        <div className={styles.actions}>
          <a href="tel:0123456789" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '16px 32px' }}>
            Appeler le 01 23 45 67 89
          </a>
        </div>
      </div>
    </section>
  );
}
