import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réparation Fuite d\'Eau Paris - Détection et Réparation Rapide',
  description: 'Réparation fuite d\'eau Paris. Détection fuite invisible, réparation robinet, canalisation. Économies d\'eau garanties. Devis gratuit.',
};

export default function ReparationFuiteEauParisPage() {
  const faq = [
    {
      question: "Comment détecter une fuite d'eau invisible ?",
      answer: "Nous utilisons des caméras thermiques, des détecteurs acoustiques et des compteurs d'eau. Détection précise sans casse."
    },
    {
      question: "Prix réparation d'une fuite à Paris ?",
      answer: "À partir de 80€ pour une réparation simple. Tarif selon accessibilité et complexité. Devis gratuit avant travaux."
    },
    {
      question: "Les fuites sont-elles garanties ?",
      answer: "Oui, toutes nos réparations sont garanties 2 ans pièces et main d'œuvre. Contrôle systématique après intervention."
    },
    {
      question: "Puis-je avoir une réduction sur ma facture d'eau ?",
      answer: "Oui, nous vous aidons à constituer un dossier pour obtenir le remboursement des fuites non-détectées auprès de votre assurance."
    },
    {
      question: "Intervention possible sans casser les murs ?",
      answer: "Oui, dans 80% des cas, nous réparons sans travaux invasifs grâce à nos techniques modernes et équipements spécialisés."
    }
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Réparation Fuite d\'Eau',
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
    description: 'Service de réparation de fuites d\'eau à Paris'
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
        <section className="relative bg-gradient-to-b from-cyan-700 to-cyan-600 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Réparation Fuite d&apos;Eau Paris - Détection et Réparation Professionnelle
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Spécialiste de la réparation de fuites d&apos;eau à Paris. Détection de fuites invisibles, réparation de robinets,
              canalisations percées. Économies d&apos;eau garanties. Intervention rapide, devis gratuit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0620202084"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105 flex items-center gap-2"
              >
                💧 06 20 20 20 84
              </a>
              <a
                href="#fuite"
                className="bg-white hover:bg-gray-100 text-cyan-700 font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105"
              >
                Détection Fuite
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium opacity-90">
              <span className="flex items-center gap-2">✓ Détection Haute Tech</span>
              <span className="flex items-center gap-2">✓ Réparation Sans Casse</span>
              <span className="flex items-center gap-2">✓ Économies Garanties</span>
              <span className="flex items-center gap-2">✓ 4.9/5 ⭐ Avis</span>
              <span className="flex items-center gap-2">✓ Garantie 2 ans</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Réparation de Fuites d&apos;Eau à Paris</h2>
            <p className="text-lg text-gray-700 mb-8">
              Les fuites d&apos;eau sont responsables de 20% de la consommation d&apos;eau en France. À Paris,
              où l&apos;eau est particulièrement chère, une fuite non détectée peut coûter plusieurs centaines d&apos;euros
              par an. Notre expertise en détection et réparation de fuites vous permet de réaliser des économies
              substantielles tout en préservant votre installation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-cyan-700">Détection de Fuites Invisibles</h3>
                <p className="text-gray-600 mb-4">
                  Fuite cachée dans les murs, sous le carrelage ou derrière les meubles ? Nos équipements
                  de pointe (caméras thermiques, détecteurs acoustiques) localisent précisément les fuites
                  sans travaux destructeurs.
                </p>
                <p className="text-gray-600">
                  Précision de localisation à 5 cm près. Rapport détaillé avec photos et vidéos d&apos;inspection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-cyan-700">Réparation Robinet/Robinets</h3>
                <p className="text-gray-600 mb-4">
                  Robinet qui goutte, mitigeur défaillant, flexible percé ? Remplacement des joints,
                  réfection des cartouches céramiques, changement complet si nécessaire.
                </p>
                <p className="text-gray-600">
                  Utilisation de pièces de qualité supérieure. Réglage précis pour éviter les futures fuites.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-cyan-700">Réparation Canalisation</h3>
                <p className="text-gray-600 mb-4">
                  Canalisation percée, fissurée ou corrodée ? Réparation par chemisage, collier de réparation
                  ou remplacement partiel selon la gravité et l&apos;accessibilité.
                </p>
                <p className="text-gray-600">
                  Techniques modernes permettant de réparer sans casser les murs dans 80% des cas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-2 text-cyan-700">Réparation WC et Chasse d&apos;Eau</h3>
                <p className="text-gray-600 mb-4">
                  WC qui fuit, chasse d&apos;eau qui coule en continu ? Problème de joint, de mécanisme
                  ou de flotteur ? Diagnostic précis et réparation rapide.
                </p>
                <p className="text-gray-600">
                  Économies d&apos;eau immédiates. Installation possible de mécanismes économes en eau.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-8">
              À Paris, les installations anciennes (immeubles haussmanniens) nécessitent une expertise particulière.
              Nos plombiers connaissent les spécificités des canalisations parisiennes : matériaux anciens,
              accès difficiles, contraintes architecturales. Nous intervenons avec respect pour le patrimoine bâti.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Pourquoi Traiter les Fuites d&apos;Eau à Paris ?</h2>
            <p className="text-gray-700 mb-4">
              Paris est l&apos;une des villes où l&apos;eau est la plus chère de France. Le prix du mètre cube
              d&apos;eau potable dépasse les 4€, hors assainissement. Une petite fuite de 1 litre par minute
              représente 43m³ par an, soit plus de 170€ de facture d&apos;eau !
            </p>
            <p className="text-gray-700 mb-4">
              Au-delà de l&apos;aspect financier, les fuites peuvent causer des dégradations importantes :
              moisissures, infiltrations, décollement de papiers peints, affaiblissement des structures.
              Dans les copropriétés parisiennes, une fuite non traitée peut affecter plusieurs voisins.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 marker:text-cyan-600 mb-4">
              <li>Économies sur la facture d&apos;eau : jusqu&apos;à 200€/an pour une petite fuite</li>
              <li>Prévention des dégradations des murs et sols</li>
              <li>Évitement des conflits avec les voisins en copropriété</li>
              <li>Réduction de l&apos;empreinte environnementale</li>
              <li>Valorisation de votre bien immobilier</li>
            </ul>
            <p className="text-gray-700">
              Notre service de réparation de fuites à Paris inclut systématiquement un contrôle après intervention
              pour vérifier l&apos;efficacité de la réparation. Nous vous remettons un certificat de conformité
              et des conseils de prévention pour éviter les récidives.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Témoignages de Réparations Réussies</h2>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl mb-6">
              <p className="italic text-gray-700 mb-4">
                &quot;Fuite invisible dans la salle de bain depuis des mois. L&apos;équipe a détecté
                le problème en 20 minutes avec leur caméra thermique. Réparation sans casser le carrelage.
                Facture d&apos;eau divisée par 3 !&quot;
              </p>
              <p className="font-bold text-gray-900">- Isabelle R., 16ème arrondissement</p>
            </div>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl mb-6">
              <p className="italic text-gray-700 mb-4">
                &quot;Robinet de cuisine qui gouttait jour et nuit. Changement du mécanisme en 30 minutes.
                Plus une goutte ! Service impeccable et prix correct pour Paris.&quot;
              </p>
              <p className="font-bold text-gray-900">- Marc D., 3ème arrondissement</p>
            </div>
            <p className="text-gray-700 mb-4">
              Plus de 95% de nos clients parisiens constatent une baisse significative de leur facture d&apos;eau
              après notre intervention. Notre taux de satisfaction atteint 4.9/5, et 98% de nos réparations
              tiennent sans problème au-delà de 2 ans.
            </p>
            <p className="text-gray-700">
              Nous travaillons en partenariat avec les principales compagnies d&apos;assurance pour faciliter
              le remboursement des frais de réparation. Notre rapport d&apos;intervention détaillé est
              accepté par tous les assureurs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Questions Fréquentes - Réparation Fuites Paris</h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center py-8" id="fuite">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Fuite d&apos;Eau ? Contactez-Nous Immédiatement !</h2>
            <p className="text-lg text-gray-700 mb-6">
              Détection gratuite, réparation garantie. Économisez sur votre facture d&apos;eau.
            </p>
            <a
              href="tel:0620202084"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transform transition hover:scale-105"
            >
              💧 06 20 20 20 84
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
