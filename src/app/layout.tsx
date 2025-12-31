import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#D32F2F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Plombier Urgence 24/7 - Dépannage Rapide',
  description: 'Besoin d\'un plombier en urgence ? Intervention en 30 min, disponible 24h/24 et 7j/7. Fuite, débouchage, chauffe-eau. Appelez-nous maintenant !',
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
