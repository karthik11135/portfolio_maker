import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import { Wrapper } from '@/components/common/RecoilWrapper';
import { Modal } from '@/components/common/Modal';

const roboto = Figtree({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'Generated you porfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Wrapper>{children}</Wrapper>
        <Modal />
      </body>
    </html>
  );
}
