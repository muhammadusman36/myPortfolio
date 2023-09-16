import ThemeSwitch from '@/lib/ThemeSwitcher'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>

      <div className="max-w-6xl  ms-auto me-auto p-10">
        <div className="flex justify-between items-center  ">

          <div className="">
            <Link href={'/'}> <h1 className='text-2xl font-bold'>S.</h1></Link>
          </div>
          <div className="">
            <ul className='flex gap-5 items-center font-3'>
              <li className='font-bold horizontal-underline mx-6'><Link href={'/blog'}>Blog</Link></li>
              <li className='font-bold horizontal-underline mx-6'><Link href={'/projects'}>Projects</Link></li>
              <li className='font-bold horizontal-underline mx-6'><Link href={'/about'}>About</Link></li>
              <li className='font-bold horizontal-underline mx-6'><Link href={'/tech'}>Tech</Link></li>
              <li className='font-bold text-2xl hover:scale-110'><ThemeSwitch /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
