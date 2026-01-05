import styles from './FAQ.module.css';

const faqs = [
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: "Nous intervenons en urgence sous 30 minutes en Île-de-France, 24h/24 et 7j/7.",
  },
  {
    question: "Les tarifs sont-ils annoncés à l'avance ?",
    answer: "Oui, nous pratiquons une transparence totale. Un devis gratuit est établi avant tout travaux.",
  },
  {
    question: "Êtes-vous agréés par les assurances ?",
    answer: "Absolument. Nos factures sont détaillées et conformes aux exigences des compagnies d'assurance pour vos remboursements.",
  },
  {
    question: "Intervenez-vous le dimanche et jours fériés ?",
    answer: "Oui, nos équipes sont d'astreinte tous les week-ends et jours fériés sans interruption.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <h2 className={styles.title}>Questions Fréquentes</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.question}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
