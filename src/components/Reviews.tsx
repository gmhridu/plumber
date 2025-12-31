import styles from './Reviews.module.css';

const reviews = [
  {
    author: 'Jean Dupont',
    text: 'Intervention rapide en pleine nuit pour une fuite importante. Plombier très professionnel et courtois.',
    stars: 5,
  },
  {
    author: 'Marie Martin',
    text: 'Prix annoncé à l’avance et respecté. Le travail est propre. Je recommande vivement !',
    stars: 5,
  },
  {
    author: 'Pierre Durand',
    text: 'Sauvé un dimanche matin ! Débouchage efficace en moins de 30 minutes.',
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Ce que disent nos clients</h2>
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>{'★'.repeat(review.stars)}</div>
              <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
              <p className={styles.author}>{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
