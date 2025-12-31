import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plombier Paris - Service de Plomberie Professionnel 24/7',
  description: 'Besoin d\'un plombier à Paris ? Intervention rapide 24/7 pour réparation fuite, débouchage, installation. Devis gratuit, prix transparents.',
};

export default function PlombierParisPage() {
  const faq = [
    {
      question: "Combien coûte un plombier à Paris ?",
      answer: "Les prix démarrent à 80€ pour une intervention simple. Le tarif exact dépend de la complexité et de l'urgence. Devis gratuit sans engagement."
    },
    {
      question: "Êtes-vous disponible le week-end ?",
      answer: "Oui, nous intervenons 7j/7 et 24h/24, y compris les jours fériés et week-ends pour les urgences plomberie."
    },
    {
      question: "Quelle est la durée d'une intervention ?",
      answer: "Une réparation simple prend 30 minutes à 1 heure. Pour les travaux plus complexes, comptez 2-4 heures selon l'ampleur."
    },
    {
      question: "Acceptez-vous les cartes de crédit ?",
      answer: "Oui, nous acceptons les paiements par carte bancaire, espèces, chèque et virement. Facture détaillée fournie."
    },
    {
      question: "Offrez-vous une garantie sur les travaux ?",
      answer: "Oui, toutes nos interventions sont garanties 1 an pièces et main d'œuvre. Extension possible selon les travaux."
    }
  ];

  // JSON-LD for Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Plomberie',
    provider: {
      '@type': 'Plumber',
      name: 'Urgence Plombier Paris',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        addressCountry: 'FR'
      },
      telephone: '+33620202084',
      priceRange: '€'
    },
    areaServed: {
      '@type': 'City',
      name: 'Paris'
    },
    description: 'Service de plomberie professionnel à Paris avec intervention 24/7'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
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
      name: 'Plomberie Paris'
    },
    author: {
      '@type': 'Person',
      name: 'Marie L.'
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5'
    },
    reviewBody: 'Service exceptionnel ! Le plombier est arrivé en 25 minutes pour réparer une fuite sous l\'évier. Travail impeccable, propre, et prix très raisonnable pour Paris. Je recommande vivement !'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* H1 & Hero Section - Above the fold */}
        <section className="relative bg-gradient-to-b from-green-700 to-green-600 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Plombier Paris - Intervention Rapide et Professionnelle 24/7
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Besoin d&apos;un plombier de confiance à Paris ? Notre équipe qualifiée intervient en urgence pour tous vos problèmes de plomberie.
              Réparation de fuites, débouchage de canalisations, installation de sanitaires. Devis gratuit et intervention sous 30 minutes.
            </p>

            {/* Strong CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0620202084"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105 flex items-center gap-2"
              >
                📞 06 20 20 20 84
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-gray-100 text-green-700 font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105"
              >
                Demander un Devis Gratuit
              </a>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium opacity-90">
              <span className="flex items-center gap-2">✓ Intervention 30 min</span>
              <span className="flex items-center gap-2">✓ Disponible 24/7</span>
              <span className="flex items-center gap-2">✓ Devis Gratuit</span>
              <span className="flex items-center gap-2">✓ 4.9/5 ⭐ Avis</span>
              <span className="flex items-center gap-2">✓ Garantie 1 an</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* H2 - Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Nos Services de Plomberie à Paris</h2>
            <p className="text-lg text-gray-700 mb-8">
              En tant que plombiers professionnels à Paris, nous proposons une gamme complète de services pour répondre à tous vos besoins en plomberie.
              Que ce soit pour une réparation urgente ou des travaux d&apos;installation, notre équipe est équipée pour intervenir rapidement et efficacement.
              Nous utilisons uniquement des matériaux de qualité et des techniques modernes pour garantir la durabilité de nos interventions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-green-700">Réparation de Fuites d&apos;Eau</h3>
                <p className="text-gray-600 mb-4">
                  Détection et réparation de toutes fuites d&apos;eau : robinets qui gouttent, WC qui fuient, canalisations percées.
                  Nous utilisons des équipements de pointe comme les caméras d&apos;inspection pour localiser précisément les problèmes.
                </p>
                <p className="text-gray-600">
                  Notre service de réparation de fuites permet d&apos;éviter les dégradations des murs et sols, et de réaliser des économies sur votre facture d&apos;eau.
                  Intervention garantie sans casse inutile.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-green-700">Débouchage de Canalisation</h3>
                <p className="text-gray-600 mb-4">
                  Spécialistes du débouchage WC, évier, douche et colonne d&apos;évacuation. Utilisation de furets électriques et hydrocureurs haute pression.
                  Résultat immédiat garanti ou intervention gratuite.
                </p>
                <p className="text-gray-600">
                  Prévention des bouchons avec nos conseils d&apos;entretien. Service disponible 24/7 pour les urgences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-green-700">Installation Sanitaire</h3>
                <p className="text-gray-600 mb-4">
                  Installation complète de salles de bain, cuisines, WC. Remplacement de chauffe-eau, radiateurs, robinets.
                  Respect des normes en vigueur et conseils personnalisés.
                </p>
                <p className="text-gray-600">
                  Nous travaillons avec les meilleures marques pour vous garantir qualité et longévité. Devis détaillé avant travaux.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-green-700">Urgences Plomberie</h3>
                <p className="text-gray-600 mb-4">
                  Intervention d&apos;urgence 24h/24 et 7j/7 pour inondations, fuites importantes, WC bouchés critiques.
                  Temps d&apos;arrivée moyen de 30 minutes dans Paris intra-muros.
                </p>
                <p className="text-gray-600">
                  Service prioritaire pour les situations d&apos;urgence. Tarifs transparents même en dehors des heures normales.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-8">
              Tous nos plombiers à Paris sont qualifiés et expérimentés. Nous intervenons dans tous les arrondissements de Paris,
              du 1er au 20ème, ainsi que dans les communes limitrophes comme Boulogne-Billancourt, Neuilly-sur-Seine, et Levallois-Perret.
              Notre connaissance du tissu urbain parisien nous permet d&apos;optimiser nos déplacements et de réduire les temps d&apos;intervention.
            </p>
          </section>

          {/* H2 - Local Relevance */}
          <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Pourquoi Choisir un Plombier Local à Paris ?</h2>
            <p className="text-gray-700 mb-4">
              Paris est une ville unique avec ses contraintes spécifiques : immeubles haussmanniens, copropriétés anciennes,
              réseaux d&apos;eau complexes. Notre équipe de plombiers parisiens connaît parfaitement ces particularités et sait
              intervenir sans endommager les structures historiques ou les installations anciennes.
            </p>
            <p className="text-gray-700 mb-4">
              Nous intervenons dans tous les quartiers de Paris : du Marais au 4ème arrondissement, des Champs-Élysées au 8ème,
              de Montmartre au 18ème, en passant par le Quartier Latin au 5ème. Notre maillage territorial nous permet
              d&apos;arriver rapidement, souvent en moins de 30 minutes, même aux heures de pointe.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 marker:text-green-600 mb-4">
              <li>Connaissance approfondie des spécificités parisiennes (immeubles anciens, copropriétés)</li>
              <li>Partenariats avec les syndics et gardiens d&apos;immeubles</li>
              <li>Respect des réglementations locales et normes parisiennes</li>
              <li>Intervention rapide grâce à notre implantation locale</li>
              <li>Support en français avec compréhension des enjeux immobiliers parisiens</li>
            </ul>
            <p className="text-gray-700">
              En choisissant un plombier local à Paris, vous bénéficiez non seulement d&apos;une intervention rapide,
              mais aussi d&apos;une expertise adaptée aux contraintes de la capitale. Nos tarifs sont compétitifs et
              tiennent compte du coût de la vie parisien, tout en restant transparents et sans surprise.
            </p>
          </section>

          {/* H2 - Trust & Reviews */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Pourquoi Nous Faire Confiance ?</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-6">
              <p className="italic text-gray-700 mb-4">
                &quot;Service exceptionnel ! Le plombier est arrivé en 25 minutes pour réparer une fuite sous l&apos;évier.
                Travail impeccable, propre, et prix très raisonnable pour Paris. Je recommande vivement !&quot;
              </p>
              <p className="font-bold text-gray-900">- Marie L., 6ème arrondissement</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-6">
              <p className="italic text-gray-700 mb-4">
                &quot;Urgence plomberie le dimanche soir. L&apos;équipe a répondu immédiatement et résolu le problème en 45 minutes.
                Professionnalisme et courtoisie. Tarifs clairs et justes.&quot;
              </p>
              <p className="font-bold text-gray-900">- Thomas D., 15ème arrondissement</p>
            </div>
            <p className="text-gray-700 mb-4">
              Notre entreprise de plomberie à Paris est reconnue pour son sérieux et sa fiabilité. Nous sommes membres
              de la Chambre des Métiers et de l&apos;Artisanat, et tous nos plombiers sont qualifiés et assurés.
              Nous travaillons exclusivement avec des matériaux certifiés et respectons les normes environnementales.
            </p>
            <p className="text-gray-700">
              Plus de 500 clients satisfaits à Paris nous font confiance chaque année. Notre note moyenne de 4.9/5
              sur Google et les plateformes d&apos;avis témoigne de la qualité de notre service. Nous nous engageons à
              fournir un travail de qualité, dans les délais, et au meilleur prix.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Questions Fréquentes sur les Plombiers à Paris</h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center py-8" id="contact">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Besoin d&apos;un Plombier à Paris ? Contactez-nous !</h2>
            <p className="text-lg text-gray-700 mb-6">
              Intervention rapide garantie. Devis gratuit et sans engagement.
            </p>
            <a
              href="tel:0620202084"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transform transition hover:scale-105"
            >
              📞 Appeler le 06 20 20 20 84
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
