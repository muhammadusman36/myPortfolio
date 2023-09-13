'use client'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function ThemeConfig({children}:{children:React.ReactNode}) {


  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return children
  }



  return (
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  )
}
