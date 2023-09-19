
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
      <Background />
      <span className='dark:text-yellow-300'></span>
      <Section_1 />
      <Canvas />

      <NavigationMenu />


    </>
  )
}
