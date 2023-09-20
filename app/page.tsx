
import Background from '@/components/Background'
import ThemeSwitch from '@/lib/ThemeSwitcher'
import { renderCanvas } from '../lib/canvaus'
import { useEffect } from 'react'
import HeaderLg from '@/components/Header/Header'
import Bottombar from '@/components/Header/Bottombar'
import Canvas from '@/components/canvas'
import Section_1 from '@/components/Home/Section_1'
import NavigationMenu from '@/components/NavigationMenu'
export default function Home() {


  return (
    <>

      <div className="px-6 md:px-4 lg:px-36 md:mt-0 mt-20 mb-">
      <Background />
      <Section_1 />
      </div>
      <Canvas />


    </>
  )
}
