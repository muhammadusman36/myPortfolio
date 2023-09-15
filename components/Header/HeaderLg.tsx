import ThemeSwitch from '@/lib/ThemeSwitcher'
import Link from 'next/link'
import React from 'react'

export default function HeaderLg() {
  return (
    <>

    <div className="max-w-6xl  ms-auto me-auto p-10">
        <div className="flex justify-between items-center  ">

        <div className="">
            <h1 className='text-2xl font-bold'>S.</h1>
        </div>
        <div className="">
            <ul className='flex gap-4 items-center font-3'>
                <li className='font-bold horizontal-underline'><Link href={''}>Blog</Link></li>
                <li className='font-bold horizontal-underline'><Link href={''}>Projects</Link></li>
                <li className='font-bold horizontal-underline'><Link href={''}>About</Link></li>
                <li className='font-bold horizontal-underline'><Link href={''}>Uses</Link></li>
                <li className='font-bold text-2xl hover:scale-110'><ThemeSwitch/></li>
            </ul>
        </div>
        </div>
    </div>
    </>
  )
}
