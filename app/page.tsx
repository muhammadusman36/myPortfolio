'use client'
import Background from '@/components/Background'
import ThemeSwitch from '@/lib/ThemeSwitcher'
import {renderCanvas} from '../components/canvaus'
import { useEffect } from 'react'
import Header from '@/components/Header/Header'
export default function Home() {

  useEffect(()=>{
    renderCanvas()

  },[])
  return (
    <>
    <Header />
    <Background />
    <span className='dark:text-yellow-300'>elo</span>

<canvas className="bg-skin-base  pointer-events-none absolute inset-0" id="canvas"></canvas>
    </>
  )
}
