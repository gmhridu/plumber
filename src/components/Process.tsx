import styles from './Process.module.css';

const steps = [
  {
    title: '1. Appelez-nous',
    description: 'Contactez le 06 20 20 20 84. Un expert évalue votre urgence immédiatement.',
    icon: '📞',
  },
  {
    title: '2. Intervention Rapide',
    description: 'Un plombier qualifié arrive chez vous en moins de 30 minutes avec le matériel nécessaire.',
    icon: '🚚',
  },
  {
    title: '3. Problème Résolu',
    description: 'Réparation effectuée proprement. Tarifs transparents et facture détaillée.',
    icon: '✅',
  },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Comment ça marche ?</h2>
        <div className={styles.taps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <span className={styles.icon}>{step.icon}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
