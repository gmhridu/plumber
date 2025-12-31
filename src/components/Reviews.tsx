import styles from './Reviews.module.css';

const reviews = [
  {
    author: 'Lucas Bernard',
    text: 'Fuite sous évier réparée en 20 minutes chrono. Le technicien avait la pièce dans son camion. Efficacité redoutable.',
    stars: 5,
  },
  {
    author: 'Sarah M.',
    text: 'J’ai appelé à 2h du matin pour une inondation. Ils sont vraiment venus tout de suite. Merci infiniment !',
    stars: 5,
  },
  {
    author: 'M. Petit',
    text: 'Facture conforme au devis téléphonique. C’est rare de trouver un plombier honnête à Paris. Je garde le numéro.',
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
