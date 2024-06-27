import { Nunito } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/navbar/Navbar';

const font = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ZenoStay',
  description:
    'ZenoStay - Your ultimate travel companion. Find and book accommodations that suit your style and budget, wherever you go.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
