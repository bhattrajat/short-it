import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Short It',
  description: 'A URL Shortener Application created with Next.js 14',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-4 lg:p-8`}>
        <Header />
        {children}
        <Toaster position="bottom-left" reverseOrder={false} />
      </body>
    </html>
  );
}
