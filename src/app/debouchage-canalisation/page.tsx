import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Débouchage Canalisation - WC, Évier, Douche',
  description: 'Service de débouchage professionnel. WC bouchés, évier bloqué ? Intervention rapide haute pression. Devis gratuit.',
};

export default function DrainUnblockingPage() {
  const faq = [
    {
      question: "Comment débouchez-vous les canalisations ?",
      answer: "Nous utilisons des furets électriques et des camions hydrocureurs haute pression pour déboucher efficacement toutes vos canalisations."
    },
    {
      question: "Le débouchage est-il garanti ?",
      answer: "Oui, nous garantissons le résultat. Si ce n'est pas débouché, vous ne payez pas (hors frais de recherche de panne complexe)."
    },
    {
      question: "Quel est le prix d'un débouchage ?",
      answer: "Le forfait débouchage démarre à partir de 80€. Le prix exact dépend de la complexité et de l'accès. Devis gratuit sur place."
    }
  ];

  return (
    <ServicePage
      title="Débouchage Canalisation – Intervention 24/7"
      description="Spécialiste du débouchage WC, évier, douche et colonne générale. Équipement haute pression for un résultat immédiat."
      serviceType="Débouchage"
      city="Île-de-France"
      faq={faq}
    />
  );
}
