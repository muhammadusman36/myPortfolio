'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsSunFill, BsSun } from 'react-icons/bs'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }


  return (
    <button className='flex items-center' onClick={() => { theme === 'light' ? setTheme('dark') : setTheme('light') }}>{theme === 'light' ? <BsSunFill /> : <BsSun />}</button>

  )
}

export default ThemeSwitch