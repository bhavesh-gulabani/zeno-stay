import { Nunito } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';

const font = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ZenoStay',
  description:
    'ZenoStay - Your ultimate travel companion. Find and book accommodations that suit your style and budget, wherever you go.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-32'>{children}</div>
      </body>
    </html>
  );
}
