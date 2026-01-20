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
    images: [
      {
        url: '/urgence-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Urgence Plomb - Plombier à Domicile 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plombier à Domicile dès 39€ - Urgence Île-de-France 24/7',
    description: 'Plombier d\'urgence en Île-de-France. Intervention en 30 minutes pour fuite d\'eau, débouchage et dépannage chauffe-eau. Disponible 24/7. Devis gratuit.',
    images: ['/urgence-removebg-preview.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/manifest.json',
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
