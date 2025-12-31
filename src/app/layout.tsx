import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#2E7D32',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export const metadata: Metadata = {
  title: 'Urgence Plombier Paris & IDF - Intervention 24h/24 et 7j/7',
  description: 'Plombier d\'urgence à Paris et Île-de-France. Intervention en 30 minutes pour fuite d\'eau, débouchage et dépannage chauffe-eau. Disponible 24/7. Devis gratuit.',
  metadataBase: new URL('https://www.urgenceplomb.com'),
  alternates: {
    canonical: 'https://www.urgenceplomb.com',
  },
  openGraph: {
    title: 'Urgence Plombier Paris & IDF - Intervention 24h/24 et 7j/7',
    description: 'Besoin d\'un plombier en urgence ? Arrivée en 30 min sur Paris et IDF. Fuite, débouchage, réparation. Service 24/7.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://www.urgenceplomb.com',
    siteName: 'Urgence Plomb',
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
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}
