import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#2E7D32',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export const metadata: Metadata = {
  title: 'Plombier à Domicile dès 39€ - Urgence Île-de-France 24/7',
  description: 'Plombier d\'urgence en Île-de-France. Intervention en 30 minutes pour fuite d\'eau, débouchage et dépannage chauffe-eau. Disponible 24/7. Devis gratuit.',
  metadataBase: new URL('https://www.urgenceplomb.com'),
  alternates: {
    canonical: 'https://www.urgenceplomb.com',
  },
  openGraph: {
    title: 'Plombier à Domicile dès 39€ - Urgence Île-de-France 24/7',
    description: 'Besoin d\'un plombier en urgence ? Arrivée en 30 min en Île-de-France. Fuite, débouchage, réparation. Service 24/7.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://www.urgenceplomb.com',
    siteName: 'Urgence Plomb',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId="GTM-KCRQWKCJ" />
      <GoogleAnalytics gaId="AW-17852053762" />
      <body>{children}</body>
    </html>
  );
}
