import './globals.css'
import { Montserrat } from 'next/font/google'
import React from 'react';
import Head from 'next/head';
import Navigation from '../component/Navigation';
import Footer from '@/component/footer';

const monserrat = Montserrat({ subsets: ['latin'] })
const links = [
  { href: '/', label: 'Home' },
  { href: '/About', label: 'About' },
  { href: '/Project', label: 'Project' },
  { href: '/Contact', label: 'Contact' }
]
export const metadata = {
  title: 'Teguh Kirana Berutu',
  description: 'My Portofolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Tambahkan link import font Inter jika diperlukan */}

      </Head>

      <body className={monserrat.className}>


        <Navigation links={links} />
        {
          children
        }

      </body>

    </html>
  )
}
