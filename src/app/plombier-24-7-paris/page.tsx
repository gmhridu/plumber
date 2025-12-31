import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plombier 24/7 Paris - Intervention d\'Urgence Jour et Nuit',
  description: 'Plombier 24/7 Paris disponible 7j/7. Urgences plomberie nuit/week-end. Intervention sous 30 min. Devis gratuit, prix transparents.',
};

export default function Plombier247ParisPage() {
  const faq = [
    {
      question: "Vraiment disponible 24h/24 et 7j/7 ?",
      answer: "Oui, notre service de plomberie d'urgence fonctionne 24h/24, 365 jours par an, y compris jours fériés et week-ends."
    },
    {
      question: "Quel est le tarif d'une intervention de nuit ?",
      answer: "Majoration de 50€ pour les interventions entre 18h et 8h, et 100€ le dimanche/jours fériés. Tarifs transparents."
    },
    {
      question: "Temps d'arrivée réel à Paris ?",
      answer: "Moyenne de 25 minutes dans Paris intra-muros. Notre équipe est répartie stratégiquement pour optimiser les déplacements."
    },
    {
      question: "Puis-je appeler pour un problème non urgent ?",
      answer: "Oui, mais pour les interventions non urgentes, nous privilégions les créneaux horaires normaux. Tarifs standards appliqués."
    },
    {
      question: "Quels sont les vrais urgences plomberie ?",
      answer: "Inondation, fuite importante, WC bouché critique, chauffe-eau en panne, rupture de canalisation. Nous évaluons l'urgence sur place."
    }
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Plomberie d\'Urgence 24/7',
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
    description: 'Service de plomberie d\'urgence 24/7 à Paris'
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

      <main className="min-h-screen bg-gray-50">
        <section className="relative bg-gradient-to-b from-purple-700 to-purple-600 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Plombier 24/7 Paris - Disponible Jour et Nuit
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Besoin d&apos;un plombier de toute urgence à Paris ? Notre service 24/7 intervient à toute heure,
              week-ends et jours fériés inclus. Arrivée garantie sous 30 minutes. Devis gratuit, intervention immédiate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0620202084"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105 flex items-center gap-2"
              >
                🚨 06 20 20 20 84
              </a>
              <a
                href="#urgence24"
                className="bg-white hover:bg-gray-100 text-purple-700 font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105"
              >
                Urgence 24/7
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium opacity-90">
              <span className="flex items-center gap-2">✓ 24/7 Disponible</span>
              <span className="flex items-center gap-2">✓ Arrivée 30 min</span>
              <span className="flex items-center gap-2">✓ Tous Arrondissements</span>
              <span className="flex items-center gap-2">✓ 4.9/5 ⭐ Avis</span>
              <span className="flex items-center gap-2">✓ Prix Transparents</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Plombier 24/7 à Paris : Notre Engagement</h2>
            <p className="text-lg text-gray-700 mb-8">
              À Paris, les urgences plomberie ne respectent pas les horaires de bureau. Une fuite d&apos;eau,
              un WC bouché ou un chauffe-eau en panne peuvent survenir à 3h du matin un dimanche.
              Notre service de plomberie 24/7 est conçu pour répondre à ces situations d&apos;urgence,
              avec une équipe dédiée disponible en permanence.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-purple-700">Intervention Nocturne</h3>
                <p className="text-gray-600 mb-4">
                  Problème en pleine nuit ? Notre équipe de nuit prend le relais. Intervention discrète
                  pour ne pas déranger les voisins. Équipement complet pour toutes les urgences.
                </p>
                <p className="text-gray-600">
                  Moyenne d&apos;arrivée : 20 minutes. Tarifs avec majoration nocturne clairement affichés.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-purple-700">Week-End et Jours Fériés</h3>
                <p className="text-gray-600 mb-4">
                  Urgence le samedi, dimanche ou jour férié ? Même service, même qualité.
                  Notre permanence week-end assure une couverture totale sans interruption.
                </p>
                <p className="text-gray-600">
                  Majoration week-end de 100€, mais service premium avec techniciens expérimentés.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-purple-700">Temps de Réponse Garanti</h3>
                <p className="text-gray-600 mb-4">
                  Dans Paris intra-muros : arrivée sous 30 minutes garantie. Banlieue proche :
                  sous 45 minutes. Géolocalisation en temps réel de nos équipes.
                </p>
                <p className="text-gray-600">
                  Système de dispatching optimisé pour réduire les temps d&apos;intervention au maximum.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-purple-700">Équipe Spécialisée Urgence</h3>
                <p className="text-gray-600 mb-4">
                  Plombiers formés aux interventions d&apos;urgence. Matériel d&apos;urgence embarqué :
                  vannes d&apos;arrêt, pompes de relevage, générateurs temporaires.
                </p>
                <p className="text-gray-600">
                  Formation continue et protocoles d&apos;urgence éprouvés depuis 10 ans.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-8">
              Notre service 24/7 couvre tous les arrondissements de Paris, ainsi que les communes limitrophes
              comme Neuilly-sur-Seine, Boulogne-Billancourt, Levallois-Perret et Vincennes. Notre maillage
              territorial nous permet de maintenir des temps d&apos;intervention records même aux heures de pointe.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Pourquoi un Plombier 24/7 à Paris ?</h2>
            <p className="text-gray-700 mb-4">
              Paris ne dort jamais, et les urgences plomberie non plus. Une inondation en pleine nuit
              peut causer des milliers d&apos;euros de dégâts si elle n&apos;est pas traitée immédiatement.
              Notre service 24/7 permet de limiter les dommages et de protéger votre patrimoine.
            </p>
            <p className="text-gray-700 mb-4">
              Au-delà de l&apos;urgence, nous connaissons les spécificités parisiennes : codes d&apos;accès
              aux immeubles, parkings souterrains exigus, réglementations de copropriété strictes.
              Notre équipe est formée pour intervenir dans ces conditions particulières.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 marker:text-purple-600 mb-4">
              <li>Réduction des dégâts grâce à l&apos;intervention rapide</li>
              <li>Évitement des surcoûts d&apos;urgence (hôtel, nettoyage)</li>
              <li>Protection des biens et des voisins en copropriété</li>
              <li>Expertise des contraintes parisiennes (accès, horaires)</li>
              <li>Service premium avec techniciens qualifiés</li>
            </ul>
            <p className="text-gray-700">
              Investir dans un service de plomberie 24/7, c&apos;est investir dans la tranquillité d&apos;esprit.
              À Paris, où le coût de l&apos;immobilier est élevé, prévenir les catastrophes est essentiel.
              Notre assurance urgence couvre tous les risques, et nos tarifs restent compétitifs malgré la disponibilité permanente.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Interventions d&apos;Urgence Réussies 24/7</h2>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mb-6">
              <p className="italic text-gray-700 mb-4">
                &quot;Inondation à 2h30 du matin ! Le plombier est arrivé en 18 minutes, a stoppé
                la fuite et pompé l&quot;eau. Service incroyable, même à cette heure. Merci pour la réactivité !&quot;
              </p>
              <p className="font-bold text-gray-900">- Nathalie K., 8ème arrondissement</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mb-6">
              <p className="italic text-gray-700 mb-4">
                &quot;Chauffe-eau en panne le jour de Noël. Intervention rapide malgré les fêtes.
                Problème résolu en 45 minutes. Tarifs justes pour une urgence.&quot;
              </p>
              <p className="font-bold text-gray-900">- Antoine L., 12ème arrondissement</p>
            </div>
            <p className="text-gray-700 mb-4">
              Notre service 24/7 a traité plus de 2000 urgences à Paris ces 3 dernières années.
              Notre taux de satisfaction pour les interventions nocturnes et week-end atteint 4.8/5,
              preuve de la qualité de notre service même dans les conditions les plus difficiles.
            </p>
            <p className="text-gray-700">
              Tous nos plombiers d&quot;urgence sont certifiés, assurés, et équipés de véhicules
              complets. Nous respectons les réglementations parisiennes en matière de bruit et
              d&quot;accès, même en intervention nocturne.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Questions Fréquentes - Plombier 24/7 Paris</h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center py-8" id="urgence24">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Urgence Plomberie 24/7 ? Appelez Maintenant !</h2>
            <p className="text-lg text-gray-700 mb-6">
              Intervention immédiate garantie, jour et nuit. Ne laissez pas une urgence empirer.
            </p>
            <a
              href="tel:0620202084"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transform transition hover:scale-105"
            >
              🚨 06 20 20 20 84 - 24/7
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
