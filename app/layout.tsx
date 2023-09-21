import './globals.css'
import '../css/imports.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeConfig from '@/lib/ThemeConfig';
import Header from '@/components/Header/Header';
import Bottombar from '@/components/Header/Bottombar';
import Footer from '@/components/Footer/Footer';
import NavigationMenu from '@/components/NavigationMenu';
import Background from '@/components/Background';


export const metadata: Metadata = {
  title: 'Muhammad Saim',
  description: 'Mern stack portfolio ya woo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" className=''>

      <body className={`bg-white dark:bg-black dark:text-white`}>
        <ThemeConfig>
          <Background />
          <div className="hidden sm:block"><Header /></div>
          <div className="block sm:hidden  "><Bottombar /></div>
          <main>
            <div className="px-6 md:px-4 lg:px-36 md:mt-0 mt-20 mb-">

              {children}
            </div>
          </main>
          <NavigationMenu />

          <Footer />
        </ThemeConfig>
      </body>
    </html>
  )
}
