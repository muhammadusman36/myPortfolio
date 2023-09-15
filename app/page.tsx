'use client'
import Background from '@/components/Background'
import ThemeSwitch from '@/lib/ThemeSwitcher'
import {renderCanvas} from '../components/canvaus'
import { useEffect } from 'react'
import HeaderLg from '@/components/Header/HeaderLg'
import HeaderSm from '@/components/Header/HeaderSm'
export default function Home() {

  useEffect(()=>{
    renderCanvas()

  },[])
  return (
    <>
    <HeaderLg />
    <Background />
    <span className='dark:text-yellow-300'>elo</span>

<canvas className="bg-skin-base  pointer-events-none absolute inset-0" id="canvas"></canvas>

<HeaderSm />
    </>
  )
}
