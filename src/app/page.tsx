import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: 'Plombier Urgence',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    description: 'Service de dépannage plomberie d\'urgence 24h/24 et 7j/7. Intervention rapide en 30 minutes pour fuite d\'eau, débouchage et chauffe-eau.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Rue de la République',
      addressLocality: 'Paris',
      postalCode: '75001',
      addressCountry: 'FR'
    },
    telephone: '+33123456789',
    openingHours: 'Mo-Su 00:00-24:00',
    priceRange: '€€',
    areaServed: 'Paris'
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
        <Reviews />
        <Footer />
        <StickyCTA />
      </main>
    </>
  );
}
