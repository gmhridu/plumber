import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réparation Fuite d\'Eau - Recherche et Dépannage',
  description: 'Expert en recherche et réparation de fuite d\'eau. Intervention rapide pour stopper les dégâts des eaux. Agréé assurances.',
};

export default function LeakRepairPage() {
  const faq = [
    {
      question: "Que faire en cas de fuite d'eau importante ?",
      answer: "Coupez immédiatement l'arrivée d'eau générale et appelez-nous au 06 65 91 48 29. Nous arrivons en 30 minutes."
    },
    {
      question: "Êtes-vous agréé par les assurances ?",
      answer: "Oui, nos factures et rapports de recherche de fuite sont conformes pour votre prise en charge par l'assurance habitation."
    },
    {
      question: "Comment détectez-vous les fuites invisibles ?",
      answer: "Nous utilisons des caméras thermiques et des détecteurs acoustiques pour localiser précisément la fuite sans casser vos murs."
    }
  ];

  return (
    <ServicePage
      title="Réparation Fuite d'Eau – Stop Dégâts des Eaux"
      description="Intervention d'urgence pour tout type de fuite : robinet, chauffe-eau, canalisation encastrée. Nous localisons et réparons immédiatement."
      serviceType="Réparation de Fuite"
      city="Île-de-France"
      faq={faq}
    />
  );
}
