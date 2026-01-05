import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EmergencyBanner from '@/components/EmergencyBanner';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import EmergencyTips from '@/components/EmergencyTips';
import Reviews from '@/components/Reviews';
import Stats from '@/components/Stats';
import OurGuarantee from '@/components/OurGuarantee';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import TrustBadges from '@/components/TrustBadges';
import ServiceAreas from '@/components/ServiceAreas';

export const metadata: Metadata = {
  title: 'Plombier à Domicile 39€ - Dépannage dans l\'heure en Île-de-France',
  description: 'Plombier d\'urgence en Île-de-France. Intervention rapide dès 39€ pour fuite d\'eau, débouchage canalisation, chauffe-eau. Disponible 24/7, devis gratuit.',
  alternates: {
    canonical: 'https://www.urgenceplomb.com',
  },
  keywords: 'Plombier à Domicile, plombier 39€, plombier urgence, dépannage plomberie IDF, fuite eau, débouchage canalisation',
};

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Urgence Plomb',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
    description: 'Service de dépannage plomberie d\'urgence 24h/24 et 7j/7 en Île-de-France. Intervention en 30 minutes pour fuite, débouchage et chauffe-eau.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Île-de-France',
      addressRegion: 'IDF',
      addressCountry: 'FR'
    },
    telephone: '+33620202084',
    email: 'Bats.services19@gmail.com',
    openingHours: 'Mo-Su 00:00-24:00',
    priceRange: '€',
    areaServed: 'Île-de-France',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Lucas Bernard'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5'
        },
        reviewBody: 'Fuite sous évier réparée en 20 minutes chrono. Le technicien avait la pièce dans son camion. Efficacité redoutable.'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah M.'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5'
        },
        reviewBody: 'J\'ai appelé à 2h du matin pour une inondation. Ils sont vraiment venus tout de suite. Merci infiniment !'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'M. Petit'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5'
        },
        reviewBody: 'Facture conforme au devis téléphonique. C\'est rare de trouver un plombier honnête. Je garde le numéro.'
      }
    ],
    sameAs: [
      'https://www.facebook.com/urgenceplomb',
      'https://www.instagram.com/urgenceplomb'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de Plomberie',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Réparation de Fuites d\'Eau'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Débouchage de Canalisation'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Installation Sanitaire'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Urgences Plomberie'
          }
        }
      ]
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Urgence Plomb',
    url: 'https://urgenceplomb.fr',
    logo: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
    description: 'Service de dépannage plomberie d\'urgence 24h/24 et 7j/7 en Île-de-France.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Île-de-France',
      addressRegion: 'IDF',
      addressCountry: 'FR'
    },
    telephone: '+33620202084',
    email: 'Bats.services19@gmail.com',
    sameAs: [
      'https://www.facebook.com/urgenceplomb',
      'https://www.instagram.com/urgenceplomb'
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels sont vos délais d\'intervention ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nous intervenons en urgence sous 30 minutes en Île-de-France, 24h/24 et 7j/7.'
        }
      },
      {
        '@type': 'Question',
        name: 'Les tarifs sont-ils annoncés à l\'avance ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, nous pratiquons une transparence totale. Un devis gratuit est établi avant tout travaux.'
        }
      },
      {
        '@type': 'Question',
        name: 'Êtes-vous agréés par les assurances ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolument. Nos factures sont détaillées et conformes aux exigences des compagnies d\'assurance pour vos remboursements.'
        }
      },
      {
        '@type': 'Question',
        name: 'Intervenez-vous le dimanche et jours fériés ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, nos équipes sont d\'astreinte tous les week-ends et jours fériés sans interruption.'
        }
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'Urgence Plomb'
    },
    author: {
      '@type': 'Person',
      name: 'Lucas Bernard'
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5'
    },
    reviewBody: 'Fuite sous évier réparée en 20 minutes chrono. Le technicien avait la pièce dans son camion. Efficacité redoutable.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <EmergencyBanner />
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <Stats />
        <WhyChooseUs />
        <Process />
        <Reviews />
        <OurGuarantee />
        <ServiceAreas />
        <EmergencyTips />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

