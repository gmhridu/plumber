import type { Metadata, Viewport } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';

const SEO_DEFAULTS = {
  title: 'Plombier à Domicile dès 39€ - Urgence Île-de-France 24/7',
  description: 'Plombier d\'urgence en Île-de-France. Intervention en 30 minutes pour fuite d\'eau, débouchage et dépannage chauffe-eau. Disponible 24/7. Devis gratuit.',
  keywords: ['plombier', 'urgence', 'Île-de-France', 'fuite d\'eau', 'débouchage', 'chauffe-eau', 'réparation', '24/7'],
  ogImage: '/urgence-removebg-preview.png',
};

export const viewport: Viewport = {
  themeColor: '#2E7D32',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://www.urgenceplomb.fr/'),
  title: SEO_DEFAULTS.title,
  description: SEO_DEFAULTS.description,
  keywords: SEO_DEFAULTS.keywords,
  alternates: {
    canonical: 'https://www.urgenceplomb.fr/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Urgence Plomb',
    startupImage: [
      {
        url: '/apple-touch-icon.png',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
  },
  openGraph: {
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    images: [SEO_DEFAULTS.ogImage],
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Urgence Plomb',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    images: [SEO_DEFAULTS.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
      {/* Google Ads (gtag.js) setup */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=AW-17852053762`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17852053762');
          `,
        }}
      />
      <body>{children}</body>
    </html>
  );
}
