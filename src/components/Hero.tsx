import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/plumber.jpg")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <div className={`container ${styles.content}`}>
        <div className={`${styles.badge} animate-fade-in`}>Intervention immédiate 24/7</div>
        <h1 className={`${styles.title} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
          Plombier d&apos;Urgence à Paris – Intervention en 30 min
        </h1>
        <p className={`${styles.subtitle} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
          Une fuite d&apos;eau, une canalisation bouchée ou un chauffe-eau en panne ?
          <br />
          Nos artisans plombiers interviennent à Paris et en Île-de-France, jours fériés inclus.
        </p>
        <div className={`${styles.actions} animate-fade-in`} style={{ animationDelay: '0.6s' }}>
          <a href="tel:0620202084" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '16px 32px' }}>
            Appelez maintenant - 06 20 20 20 84
          </a>
        </div>
      </div>
    </section>
  );
}
