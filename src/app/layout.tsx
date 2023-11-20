import './globals.css'
import { Montserrat } from 'next/font/google'
import React from 'react';
import Head from 'next/head';
import Navigation from '../component/Navigation';


const monserrat = Montserrat({ subsets: ['latin'] })
const links = [
  { href: '/', label: 'Home' },
  { href: '/About', label: 'About' },
  { href: '/Project', label: 'Project' },
  { href: '/Contact', label: 'Contact' }
]
export const metadata = {
  title: "Teguh Kirana Berutu",
  description: "Explore the portfolio of Teguh Kirana, a passionate web developer skilled in React and Full Stack development.",
  siteUrl: "https://teguhkirana.vercel.app",
  keywords: ["web development", "React", "Full Stack", "portfolio", "frontend", "backend", "JavaScript"],
  author: "Your Name",
  socialMedia: {
    github: "teguh161402025",
    linkedin: "teguhkiranaberutu"
  },
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
