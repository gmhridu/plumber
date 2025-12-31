import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#2E7D32',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Urgence Plombier Paris & IDF - Intervention 24/7 en 30 min',
  description: 'Plombier urgence Paris & Île-de-France. Dépannage fuite d\'eau, débouchage WC, chauffe-eau. Disponible 24h/24 et 7j/7. Arrivée en 30 min. Devis gratuit.',
  openGraph: {
    title: 'Urgence Plombier Paris & IDF - Dépannage Rapide',
    description: 'Besoin d\'un plombier maintenant ? Appelez le 06 20 20 20 84. Intervention immédiate pour fuite et débouchage.',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
