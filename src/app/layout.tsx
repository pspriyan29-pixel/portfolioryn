import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Riyan Perdhana Putra | Fullstack Developer & AI Engineer',
  description:
    'Portfolio profesional Riyan Perdhana Putra — Fullstack Developer, UI/UX Designer, AI Engineer. Alumni Maxy Academy, Mahasiswa Politeknik Kampar.',
  keywords: 'fullstack developer, UI/UX designer, AI engineer, next.js, react, portfolio, riyan perdhana',
  openGraph: {
    title: 'Riyan Perdhana Putra | Fullstack Developer',
    description: 'Portfolio profesional — Fullstack, UI/UX, AI',
    url: 'https://mahasi.tech',
    siteName: 'Riyan Dev Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} noise`}>{children}</body>
    </html>
  );
}
