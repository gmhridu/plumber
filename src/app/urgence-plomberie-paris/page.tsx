import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Urgence Plomberie Paris - Intervention 24/7 Jour et Nuit',
  description: 'Urgence plomberie Paris ? Intervention immédiate 24h/24 pour fuites, inondations, WC bouchés. Arrivée sous 30 min. Devis gratuit.',
};

export default function UrgencePlomberieParisPage() {
  const faq = [
    {
      question: "Quel est le tarif d'une urgence plomberie à Paris ?",
      answer: "Le tarif d'urgence démarre à 120€ (majoration nocturne/week-end). Tarif dégressif selon la complexité. Devis gratuit."
    },
    {
      question: "Intervenez-vous vraiment 24h/24 ?",
      answer: "Oui, notre service d'urgence plomberie fonctionne 24h/24, 7j/7, y compris jours fériés. Temps de réponse moyen : 30 minutes."
    },
    {
      question: "Quels sont les problèmes d'urgence les plus courants ?",
      answer: "Fuites d'eau importantes, inondations, WC bouchés critiques, chauffe-eau en panne, canalisations éclatées."
    },
    {
      question: "Dois-je payer même si c'est une fausse alerte ?",
      answer: "Non, si le problème n'est pas résoluble ou s'il n'y a pas d'urgence réelle, nous ne facturons que les frais de déplacement (50€)."
    },
    {
      question: "Acceptez-vous les assurances habitation ?",
      answer: "Oui, nous travaillons avec toutes les assurances. Nous vous aidons à constituer votre dossier pour le remboursement."
    }
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Urgence Plomberie',
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
    description: 'Service d\'urgence plomberie 24/7 à Paris'
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
      name: 'Urgence Plomberie Paris'
    },
    author: {
      '@type': 'Person',
      name: 'Claire B.'
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5'
    },
    reviewBody: 'Inondation dans la cuisine à 2h du matin ! L\'équipe est arrivée en 20 minutes, a pompé l\'eau et réparé la fuite. Service impeccable malgré l\'heure tardive.'
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
        <section className="relative bg-gradient-to-b from-red-700 to-red-600 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Urgence Plomberie Paris - Intervention Immédiate 24/7
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Problème de plomberie urgent à Paris ? Fuite d&apos;eau, inondation, WC bouché ? Notre équipe d&apos;urgence intervient
              jour et nuit, week-ends et jours fériés. Arrivée garantie sous 30 minutes. Devis gratuit et intervention immédiate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0620202084"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105 flex items-center gap-2"
              >
                🚨 06 20 20 20 84
              </a>
              <a
                href="#urgence"
                className="bg-white hover:bg-gray-100 text-red-700 font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105"
              >
                Urgence Immédiate
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium opacity-90">
              <span className="flex items-center gap-2">🚨 Arrivée 30 min</span>
              <span className="flex items-center gap-2">✓ 24/7 Disponible</span>
              <span className="flex items-center gap-2">✓ Devis Gratuit</span>
              <span className="flex items-center gap-2">✓ 4.9/5 ⭐ Avis</span>
              <span className="flex items-center gap-2">✓ Garantie Urgence</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Services d&apos;Urgence Plomberie à Paris</h2>
            <p className="text-lg text-gray-700 mb-8">
              Face à une urgence plomberie à Paris, chaque minute compte. Notre service d&apos;urgence spécialisé intervient
              immédiatement pour limiter les dégâts. Que ce soit une fuite importante, une inondation ou un WC bouché critique,
              nous sommes équipés pour réagir rapidement et efficacement.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-red-700">Fuites d&apos;Eau Urgentes</h3>
                <p className="text-gray-600 mb-4">
                  Fuite de robinet, canalisation percée, joint éclaté ? Intervention immédiate pour stopper l&apos;hémorragie
                  et éviter l&apos;inondation. Utilisation de vannes d&apos;arrêt d&apos;urgence et réparation temporaire si nécessaire.
                </p>
                <p className="text-gray-600">
                  Notre équipe arrive avec tout l&apos;équipement nécessaire : clés de vannes, colliers de réparation,
                  et matériaux d&apos;urgence pour une intervention rapide et durable.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-red-700">Débouchage Express</h3>
                <p className="text-gray-600 mb-4">
                  WC bouché, évier inondé, douche qui ne s&apos;évacue plus ? Notre camion hydrocureur haute pression
                  permet un débouchage immédiat et efficace, même dans les situations les plus critiques.
                </p>
                <p className="text-gray-600">
                  Résultat garanti ou intervention gratuite. Prévention incluse avec conseils d&apos;entretien.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-red-700">Inondations</h3>
                <p className="text-gray-600 mb-4">
                  Inondation due à une fuite, rupture de canalisation ou débordement ? Intervention d&apos;urgence
                  pour pomper l&apos;eau, assécher les lieux et réparer la cause du problème.
                </p>
                <p className="text-gray-600">
                  Équipement professionnel de pompage et séchage. Coordination avec votre assurance pour expertise.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-red-700">Chauffe-Eau en Panne</h3>
                <p className="text-gray-600 mb-4">
                  Plus d&apos;eau chaude en pleine nuit ? Problème de sécurité sur votre chauffe-eau ?
                  Diagnostic immédiat et réparation ou remplacement temporaire en urgence.
                </p>
                <p className="text-gray-600">
                  Stock de chauffe-eau d&apos;urgence pour les situations critiques. Intervention sous 1 heure garantie.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-8">
              Notre service d&apos;urgence plomberie à Paris couvre tous les arrondissements et communes limitrophes.
              Grâce à notre flotte de véhicules équipés et notre organisation logistique, nous optimisons les déplacements
              pour arriver le plus rapidement possible, même aux heures de pointe ou en cas d&apos;intempéries.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Pourquoi Notre Service d&apos;Urgence à Paris ?</h2>
            <p className="text-gray-700 mb-4">
              Paris est une ville qui ne dort jamais, et les urgences plomberie peuvent survenir à tout moment.
              Notre équipe dédiée aux urgences est formée pour intervenir dans les conditions les plus difficiles :
              immeubles anciens, copropriétés avec codes d&apos;accès, quartiers touristiques bondés.
            </p>
            <p className="text-gray-700 mb-4">
              Nous connaissons les spécificités de chaque quartier : du Marais avec ses ruelles étroites,
              aux tours modernes de La Défense, en passant par les hôtels particuliers du 7ème arrondissement.
              Cette expertise locale nous permet d&apos;anticiper les difficultés d&apos;accès et d&apos;arriver préparés.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 marker:text-red-600 mb-4">
              <li>Temps d&apos;intervention moyen de 30 minutes dans Paris</li>
              <li>Équipe dédiée disponible 24h/24, 7j/7</li>
              <li>Véhicules équipés pour interventions d&apos;urgence</li>
              <li>Coordination avec assurances et syndics</li>
              <li>Devis transparent même en urgence</li>
            </ul>
            <p className="text-gray-700">
              En cas d&apos;urgence plomberie à Paris, ne prenez pas de risques. Un problème mineur peut rapidement
              devenir une catastrophe coûteuse. Notre intervention précoce permet souvent de limiter les dégâts
              et de réduire le coût total des réparations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Témoignages d&apos;Urgences Résolues</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
              <p className="italic text-gray-700 mb-4">
                &quot;Inondation dans la cuisine à 2h du matin ! L&apos;équipe est arrivée en 20 minutes,
                a pompé l&apos;eau et réparé la fuite. Service impeccable malgré l&apos;heure tardive.&quot;
              </p>
              <p className="font-bold text-gray-900">- Claire B., 10ème arrondissement</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
              <p className="italic text-gray-700 mb-4">
                &quot;WC bouché le jour de Noël. Intervention rapide et efficace. Le plombier a même
                nettoyé après son passage. Tarifs corrects pour une urgence. &quot;
              </p>
              <p className="font-bold text-gray-900">- Michel R., 14ème arrondissement</p>
            </div>
            <p className="text-gray-700 mb-4">
              Notre réputation en matière d&apos;urgence plomberie à Paris repose sur des années d&apos;expérience
              et des centaines d&apos;interventions réussies. Nous sommes fiers de notre taux de satisfaction
              de 98% pour les urgences, et de notre capacité à résoudre 95% des problèmes sur place.
            </p>
            <p className="text-gray-700">
              Tous nos plombiers d&apos;urgence sont certifiés, assurés, et formés aux dernières techniques
              de réparation rapide. Nous utilisons uniquement des matériaux de qualité pour des réparations durables.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Questions Fréquentes - Urgence Plomberie Paris</h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center py-8" id="urgence">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Urgence Plomberie ? Appelez Maintenant !</h2>
            <p className="text-lg text-gray-700 mb-6">
              Intervention immédiate garantie. Ne laissez pas une petite fuite devenir une grande catastrophe.
            </p>
            <a
              href="tel:0620202084"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transform transition hover:scale-105"
            >
              🚨 06 20 20 20 84 - URGENCE
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
