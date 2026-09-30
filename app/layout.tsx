import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Laubloom Clone',
  description: 'Kado digital yang mekar saat dibuka.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
