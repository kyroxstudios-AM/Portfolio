import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Abhishek Meena | Portfolio',
  description:
    'Portfolio of Abhishek Meena, BCA research student at Central University of Kerala and Chief Technology Officer at Contios.',
  openGraph: {
    title: 'Abhishek Meena | Portfolio',
    description:
      'BCA research student, freelance CTO, and AI enthusiast based in Kerala.',
    images: ['/abhishek-meena.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
