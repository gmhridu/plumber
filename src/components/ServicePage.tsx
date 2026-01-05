import React from 'react';



interface ServicePageProps {
  title: string;
  description: string;
  serviceType: string;
  city: string;
  faq?: { question: string; answer: string; }[];
}

const defaultFaq = [
  {
    question: "How fast do you arrive?",
    answer: "We arrive within 30 minutes in the sector and surrounding areas for emergency situations."
  },
  {
    question: "What are your prices?",
    answer: "Transparent pricing with free quotes. Emergency interventions start from €80, with clear pricing for all services."
  },
  {
    question: "Do you work nights and weekends?",
    answer: "Yes, we are available 24/7, including nights, weekends, and holidays, with reasonable surcharges for off-hours."
  }
];

export default function ServicePage({
  title,
  description,
  serviceType,
  city,
  faq
}: ServicePageProps) {
  const activeFaq = faq || defaultFaq;

  // JSON-LD for Service Page
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceType,
    provider: {
      '@type': 'Plumber',
      name: 'Urgence Plombier',
      address: {
        '@type': 'PostalAddress',
        addressLocality: city,
        addressCountry: 'FR'
      },
      telephone: '+33620202084',
      priceRange: '€'
    },
    areaServed: {
      '@type': 'City',
      name: city
    },
    description: description
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: activeFaq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Service',
      name: serviceType
    },
    author: {
      '@type': 'Person',
      name: 'Sophie M.'
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5'
    },
    reviewBody: 'Service impeccable, le plombier est arrivé en 20 minutes pour une fuite importante. Travail propre et prix correct.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* H1 & Hero Section - Above the fold */}
        <section className="relative bg-gradient-to-b from-green-700 to-green-600 text-white py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {title}
            </h1>
            <p className="text-xl mb-8 opacity-90">{description}</p>

            {/* Strong CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0620202084"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105 flex items-center gap-2"
              >
                📞 06 20 20 20 84
              </a>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium opacity-90">
              <span className="flex items-center gap-2">✓ 10+ Years Experience</span>
              <span className="flex items-center gap-2">✓ 4.9/5 ⭐ Reviews</span>
              <span className="flex items-center gap-2">✓ Satisfaction Guarantee</span>
              <span className="flex items-center gap-2">✓ Intervention 30 min</span>
              <span className="flex items-center gap-2">✓ Disponible 24/7</span>
              <span className="flex items-center gap-2">✓ Devis Gratuit</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* H2 - Service Details */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Nos Services de {serviceType}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-green-700">Urgence 24/7</h3>
                <p className="text-gray-600">Intervention rapide jour et nuit, week-ends et jours fériés inclus.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-green-700">Prix Transparents</h3>
                <p className="text-gray-600">Devis gratuit et sans surprise avant toute intervention.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-green-700">Matériel Pro</h3>
                <p className="text-gray-600">Équipement de pointe pour une détection et réparation précise.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-green-700">Garantie</h3>
                <p className="text-gray-600">Intervention garantie pièces et main d&apos;œuvre.</p>
              </div>
            </div>
          </section>

          {/* H2 - Local Relevance */}
          <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Zone d&apos;intervention : {city} et alentours</h2>
            <p className="text-gray-700 mb-4">
              Notre équipe de plombiers qualifiés intervient dans tout le secteur de {city}.
              Grâce à notre maillage local, nous garantissons un temps d&apos;arrivée de moins de 30 minutes.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 marker:text-green-600">
              <li>Arrivée rapide garantie</li>
              <li>Connaissance parfaite du secteur</li>
              <li>Partenariat avec les syndics locaux</li>
            </ul>
          </section>

          {/* H2 - Trust & Reviews */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Pourquoi nous faire confiance ?</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
              <p className="italic text-gray-700 mb-4">&quot;Service impeccable, le plombier est arrivé en 20 minutes pour une fuite importante. Travail propre et prix correct.&quot;</p>
              <p className="font-bold text-gray-900">- Sophie M., {city}</p>
            </div>
          </section>


          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">FAQ</h2>
            <div className="space-y-4">
              {activeFaq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Besoin d&apos;une intervention immédiate ?</h2>
            <a
              href="tel:0620202084"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transform transition hover:scale-105"
            >
              Appeler le 06 20 20 20 84
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
