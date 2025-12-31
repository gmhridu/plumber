import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Débouchage Canalisation Paris - WC, Évier, Douche 24/7',
  description: 'Débouchage canalisation Paris professionnel. WC bouchés, évier bloqué ? Intervention rapide haute pression. Devis gratuit, résultat garanti.',
};

export default function DebouchageCanalisationParisPage() {
  const faq = [
    {
      question: "Comment déboucher une canalisation bouchée ?",
      answer: "Nous utilisons des furets électriques, hydrocureurs haute pression et produits écologiques. Méthode adaptée selon le type de bouchon."
    },
    {
      question: "Le débouchage est-il garanti ?",
      answer: "Oui, résultat garanti. Si la canalisation n'est pas débouchée, vous ne payez pas (hors recherche de panne complexe)."
    },
    {
      question: "Prix d'un débouchage à Paris ?",
      answer: "Forfait débouchage à partir de 80€. Tarif selon complexité et accessibilité. Devis gratuit sur place."
    },
    {
      question: "Quels sont les signes d'une canalisation bouchée ?",
      answer: "Refoulement d'eau, mauvaises odeurs, évacuation lente, bruits de gargouillis. N'attendez pas que ça empire."
    },
    {
      question: "Prévention des bouchons ?",
      answer: "Utilisez une grille anti-déchets, versez régulièrement du vinaigre blanc, évitez graisses et cheveux dans les canalisations."
    }
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Débouchage Canalisation',
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
    description: 'Service de débouchage professionnel à Paris'
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
        <section className="relative bg-gradient-to-b from-blue-700 to-blue-600 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Débouchage Canalisation Paris - Intervention Rapide et Efficace
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Spécialiste du débouchage de canalisations à Paris. WC bouchés, évier bloqué, douche qui ne s&apos;évacue plus ?
              Notre équipe utilise des équipements haute pression pour un résultat immédiat. Devis gratuit, intervention 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0620202084"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105 flex items-center gap-2"
              >
                📞 06 20 20 20 84
              </a>
              <a
                href="#debouchage"
                className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105"
              >
                Devis Gratuit
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium opacity-90">
              <span className="flex items-center gap-2">✓ Résultat Garanti</span>
              <span className="flex items-center gap-2">✓ 24/7 Disponible</span>
              <span className="flex items-center gap-2">✓ Équipement Pro</span>
              <span className="flex items-center gap-2">✓ 4.9/5 ⭐ Avis</span>
              <span className="flex items-center gap-2">✓ Prix Transparents</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Nos Services de Débouchage à Paris</h2>
            <p className="text-lg text-gray-700 mb-8">
              Le débouchage de canalisations est notre spécialité à Paris. Avec des années d&apos;expérience dans
              les immeubles anciens et modernes de la capitale, nous maîtrisons toutes les techniques de débouchage
              pour résoudre rapidement vos problèmes d&apos;évacuation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-blue-700">Débouchage WC</h3>
                <p className="text-gray-600 mb-4">
                  WC bouchés par du papier toilette, jouets d&apos;enfants ou autres objets ? Notre furet électrique
                  haute rotation permet un débouchage efficace et sans casse de la cuvette.
                </p>
                <p className="text-gray-600">
                  Intervention rapide, généralement résolue en 30 minutes. Prévention incluse avec conseils d&apos;utilisation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-blue-700">Débouchage Évier</h3>
                <p className="text-gray-600 mb-4">
                  Évier de cuisine ou salle de bain bouché par des restes alimentaires, cheveux ou savon ?
                  Utilisation combinée de furet mécanique et produits déboucheurs écologiques.
                </p>
                <p className="text-gray-600">
                  Nettoyage complet de la canalisation pour éviter les récidives. Siphon démontable si nécessaire.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-blue-700">Débouchage Douche/Baignoire</h3>
                <p className="text-gray-600 mb-4">
                  Accumulation de cheveux, savon et calcaire dans la bonde ? Notre hydrocureur haute pression
                  nettoie en profondeur sans endommager les canalisations.
                </p>
                <p className="text-gray-600">
                  Installation possible d&apos;un filtre anti-cheveux pour prévention future. Résultat immédiat garanti.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-blue-700">Débouchage Colonne Générale</h3>
                <p className="text-gray-600 mb-4">
                  Problème d&apos;évacuation collectif dans l&apos;immeuble ? Refoulement dans plusieurs appartements ?
                  Intervention spécialisée avec caméra d&apos;inspection pour localiser le bouchon.
                </p>
                <p className="text-gray-600">
                  Coordination avec le syndic de copropriété. Solutions adaptées aux installations anciennes parisiennes.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-8">
              À Paris, les canalisations anciennes peuvent présenter des particularités : diamètres réduits,
              coudes difficiles d&apos;accès, matériaux sensibles. Notre expertise locale nous permet d&apos;intervenir
              sans risque de casse, en préservant l&apos;intégrité de votre installation.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Débouchage de Canalisation à Paris : Notre Expertise Locale</h2>
            <p className="text-gray-700 mb-4">
              Paris compte des millions de mètres de canalisations souterraines, dont beaucoup datent du XIXe siècle.
              Les bouchons peuvent être causés par l&apos;accumulation de calcaire, de graisses, de racines d&apos;arbres,
              ou simplement par l&apos;usure des matériaux. Notre équipe connaît parfaitement ces enjeux spécifiques à la capitale.
            </p>
            <p className="text-gray-700 mb-4">
              Nous intervenons dans tous les arrondissements, des quartiers historiques comme le Marais ou Saint-Germain-des-Prés,
              aux zones plus modernes comme La Défense ou les Olympiades. Notre maillage territorial nous permet
              d&apos;arriver rapidement, souvent sous la demi-heure, même en période de forte affluence.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 marker:text-blue-600 mb-4">
              <li>Équipement adapté aux canalisations parisiennes anciennes</li>
              <li>Connaissance des réseaux d&apos;évacuation collectifs</li>
              <li>Partenariats avec les syndics et gardiens d&apos;immeubles</li>
              <li>Respect des réglementations environnementales parisiennes</li>
              <li>Intervention possible dans les espaces confinés</li>
            </ul>
            <p className="text-gray-700">
              Un bouchon non traité peut rapidement dégénérer : refoulements, infiltrations, odeurs nauséabondes,
              voire ruptures de canalisations. Notre intervention précoce permet d&apos;éviter ces complications coûteuses
              et de maintenir votre confort de vie dans la capitale.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Pourquoi Nous Choisir pour Votre Débouchage ?</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-6">
              <p className="italic text-gray-700 mb-4">
                &apos;Évier bouché depuis 3 jours, impossible de faire la vaisselle ! L&apos;équipe est arrivée
                rapidement, a débouché en 15 minutes avec leur machine. Propre et efficace. Merci !&apos;
              </p>
              <p className="font-bold text-gray-900">- Sophie L., 11ème arrondissement</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-6">
              <p className="italic text-gray-700 mb-4">
                &apos;Bouchon dans la colonne d&apos;évacuation de l&apos;immeuble. Intervention impeccable,
                coordination parfaite avec le syndic. Problème résolu sans travaux invasifs.&apos;
              </p>
              <p className="font-bold text-gray-900">- Pierre M., 5ème arrondissement</p>
            </div>
            <p className="text-gray-700 mb-4">
              Notre taux de réussite pour les débouchages à Paris dépasse 95%. Nous utilisons des méthodes
              respectueuses de l&apos;environnement et de vos canalisations. Tous nos techniciens sont formés
              aux dernières techniques et utilisent du matériel professionnel de haute qualité.
            </p>
            <p className="text-gray-700">
              Nous sommes membres de la Chambre des Métiers et certifiés pour les interventions en plomberie.
              Notre assurance couvre tous les risques, et nous proposons une garantie sur nos interventions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Questions Fréquentes sur le Débouchage à Paris</h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center py-8" id="debouchage">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Canalisation Bouchée ? Appelez-Nous !</h2>
            <p className="text-lg text-gray-700 mb-6">
              Résultat garanti ou intervention gratuite. Devis gratuit et immédiat.
            </p>
            <a
              href="tel:0620202084"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transform transition hover:scale-105"
            >
              📞 06 20 20 20 84
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
