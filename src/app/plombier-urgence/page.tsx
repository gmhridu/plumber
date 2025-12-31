import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Urgence Plombier Paris - Intervention Immédiate 24/7',
  description: 'Besoin d\'un plombier en urgence à Paris ? Arrivée en 30 minutes. Disponible 24h/24 et 7j/7 pour tout dépannage plomberie.',
};

export default function EmergencyPlumberPage() {
  const faq = [
    {
      question: "Combien de temps pour intervenir ?",
      answer: "Nous garantissons une arrivée en moins de 30 minutes après votre appel pour toutes les urgences à Paris et en Île-de-France."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs sont transparents et annoncés avant intervention. Le déplacement est gratuit si le devis est accepté."
    },
    {
      question: "Intervenez-vous la nuit et le week-end ?",
      answer: "Oui, notre équipe est opérationnelle 24h/24 et 7j/7, dimanches et jours fériés inclus, sans majoration excessive."
    }
  ];

  return (
    <ServicePage
      title="Plombier d'Urgence à Paris – 24/7 Intervention Rapide"
      description="Service de dépannage plomberie ultra-rapide. Une fuite ? Une canalisation bouchée ? Nos experts sont chez vous en 30 minutes."
      serviceType="Dépannage Urgence"
      city="Paris & Île-de-France"
      faq={faq}
    />
  );
}
