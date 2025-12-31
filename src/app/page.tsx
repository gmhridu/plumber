import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: 'Plombier Express',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
    description: 'Service de dépannage plomberie d\'urgence 24h/24 et 7j/7 en Île-de-France. Intervention en 30 minutes pour fuite, débouchage et chauffe-eau.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressRegion: 'IDF',
      addressCountry: 'FR'
    },
    telephone: '+33620202084',
    email: 'Bats.services19@gmail.com',
    openingHours: 'Mo-Su 00:00-24:00',
    priceRange: '€',
    areaServed: 'Île-de-France',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Header />
        <Hero />
        <Features />
        <Services />
        <Process />
        <Reviews />
        <FAQ />
        <Footer />
        <StickyCTA />
      </main>
    </>
  );
}
