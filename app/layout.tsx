import './globals.css'
import '../css/imports.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeConfig from '@/lib/ThemeConfig';
import Header from '@/components/Header/Header';
import Bottombar from '@/components/Header/Bottombar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <div className="hidden sm:block"><Header /></div>
        <div className="block sm:hidden  "><Bottombar /></div>
        {children}
        </ThemeConfig>
        </body>
    </html>
  )
}
