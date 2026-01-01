import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import TrustBadges from '@/components/TrustBadges';
import styles from '../fuite-chauffe-eau-paris-15/ServicePage.module.css'; // Reuse styles
import { Phone, Clock, Shield, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Débouchage Toilette Levallois – Urgence 24/7 en 30 min',
  description: 'Urgence WC bouché à Levallois-Perret. Intervention rapide en 30 min pour débouchage de canalisation. Prix transparent, devis gratuit.',
  keywords: 'débouchage toilette Levallois, WC bouché Levallois, débouchage canalisation Levallois',
};

export default function ServicePage() {
  const title = "Débouchage Toilette Levallois – Urgence 24/7 en 30 min";

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>
              WC bouché à Levallois-Perret ? Pas de panique. Nos dépanneurs interviennent immédiatement pour un dégorgement efficace.
            </p>
            <div className={styles.ctaBox}>
              <a href="tel:0620202084" className="btn btn-primary">
                <Phone size={24} />
                Débouchage Immédiat : 06 20 20 20 84
              </a>
            </div>
          </div>
        </section>

        <section className={styles.details}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.content}>
                <h2>Urgence WC Bouché Levallois-Perret</h2>
                <p>
                  Un problème de toilettes bouchées ne peut pas attendre. Nous utilisons des outils professionnels (furet électrique, pompe à pression) pour déboucher vos canalisations sans les abîmer.
                </p>
                <ul>
                  <li><CheckCircle size={18} /> Intervention 7j/7 même dimanche</li>
                  <li><CheckCircle size={18} /> Forfait débouchage transparent</li>
                  <li><CheckCircle size={18} /> Arrivée garantie sous 30 minutes</li>
                  <li><CheckCircle size={18} /> Artisans locaux à Levallois</li>
                </ul>
              </div>
              <div className={styles.sidebar}>
                <div className={styles.trustCard}>
                  <h3>Disponible Maintenant</h3>
                  <div className={styles.row}>
                    <Clock color="var(--primary-color)" />
                    <span>En route en 30 min</span>
                  </div>
                  <div className={styles.row}>
                    <Shield color="var(--primary-color)" />
                    <span>Agrée Assurances</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBadges />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
