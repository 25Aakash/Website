import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageLoader from '@/components/PageLoader';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Karssoft',
  description: 'Transform your business with cutting-edge web applications and stunning websites',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:rgb(37,99,235);stop-opacity:1" /><stop offset="50%" style="stop-color:rgb(147,51,234);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(236,72,153);stop-opacity:1" /></linearGradient></defs><text x="50" y="75" font-size="80" font-weight="bold" text-anchor="middle" fill="url(%23grad)" font-family="Arial, sans-serif">K</text></svg>',
        type: 'image/svg+xml',
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
    <html lang="en">
      <body className={inter.className}>
        <PageLoader />
        <ScrollProgress />
        <Navigation />
        {children}
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
