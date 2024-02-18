import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '@/styles/globals.scss';
import styled from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styled.matrix}>
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
        <main className={styled.main}>{children}</main>
      </body>
    </html>
  );
}
