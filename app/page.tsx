
import Background from '@/components/Background'
import ThemeSwitch from '@/lib/ThemeSwitcher'
import {renderCanvas} from '../lib/canvaus'
import { useEffect } from 'react'
import HeaderLg from '@/components/Header/Header'
import Bottombar from '@/components/Header/Bottombar'
import Canvas from '@/components/canvas'
export default function Home() {

  
  return (
    <>
    <Background />
    <span className='dark:text-yellow-300'>elo</span>
    <Canvas />
 
    </>
  )
}
