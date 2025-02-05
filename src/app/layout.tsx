import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/context/modalContext';
import { ModalRoot } from '@/roots/modalRoot';

const roboto_mono = Roboto_Mono({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'React In Order Modal',
  description: ''
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${roboto_mono.className} antialiased`}>
        <ModalProvider>
          {children}
          <ModalRoot />
        </ModalProvider>
      </body>
    </html>
  );
}
