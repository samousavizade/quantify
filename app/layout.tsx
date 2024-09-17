import '@/css/prism.css';
import '@/css/tailwind.css';
import '@fontsource/mukta';

import Analytics from '@/components/Analytics';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LenisProvider from '@/components/Providers/LenisProvider';
import ThemeProvider from '@/components/Providers/ThemeProvider';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import AnimatedQIcon from '@/components/QIcon';
import * as React from 'react';

// export const metadata = {
//     title: 'Quantifiable',
//     description: 'Quantifying the Future',
//     metadataBase: new URL('https://dalelarroder.com'),
// };

// @ts-ignore
export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Quantifiable</title>
        <meta name="description" content="A simple 3D scene with Three.js in Next.js" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon.ico" />
        <meta name="msapplicat  ion-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href={'/feed.xml'} />
      </Head>
      <body className="bg-white text-black antialiased dark:bg-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SessionProvider>
            <Header logoIcon={<AnimatedQIcon />} />
            <LenisProvider>
              <main>{children}</main>
            </LenisProvider>
            <Footer />
            <Analytics />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
