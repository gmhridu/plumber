import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import TrustBadges from '@/components/TrustBadges';
import styles from './ServicePage.module.css';
import { Phone, Clock, Shield, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fuite Chauffe-Eau Paris 15 – Dépannage en 30 min 24/7',
  description: 'Urgence fuite chauffe-eau à Paris 15. Intervention rapide en 30 min pour réparation de ballon d\'eau chaude. Devis gratuit, agréé assurances.',
  keywords: 'fuite chauffe-eau Paris 15, réparation ballon eau chaude Paris 15, plombier chauffe-eau Paris 15',
};

export default function ServicePage() {
  const title = "Fuite Chauffe-Eau Paris 15 – Dépannage en 30 min 24/7";

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>
              Spécialiste du dépannage de chauffe-eau en urgence à Paris 15. Fuite, panne de résistance ou thermostat, nous intervenons immédiatement.
            </p>
            <div className={styles.ctaBox}>
              <a href="tel:0620202084" className="btn btn-primary">
                <Phone size={24} />
                Appel d&apos;Urgence : 06 20 20 20 84
              </a>
            </div>
          </div>
        </section>

        <section className={styles.details}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.content}>
                <h2>Réparation Fuite Ballon d&apos;Eau Chaude Paris 15</h2>
                <p>
                  Une fuite sur votre chauffe-eau peut rapidement causer des dégâts des eaux importants. Nos artisans plombiers à Paris 15 sont experts en toutes marques (Atlantic, Ariston, Thermor, Fleck).
                </p>
                <ul>
                  <li><CheckCircle size={18} /> Diagnostic gratuit par téléphone</li>
                  <li><CheckCircle size={18} /> Remplacement de groupe de sécurité</li>
                  <li><CheckCircle size={18} /> Réparation de cuve ou raccordements</li>
                  <li><CheckCircle size={18} /> Intervention garantie 1 an</li>
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
