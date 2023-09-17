'use client'
import React from 'react'
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { TbBrandBlogger } from 'react-icons/tb'
import { TiInfoLargeOutline } from 'react-icons/ti'
import { GiTechnoHeart } from 'react-icons/gi'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ThemeSwitch from '@/lib/ThemeSwitcher'
export default function Bottombar() {
    const pathname = usePathname()
    const isActive = (link: string) => {

        return (pathname.includes(link) && link.length > 1) || pathname === link
    }

    return (
        <>
            <div className="fixed top-6 right-6 ">
                <ThemeSwitch />
            </div>
            <div className="w-screen  fixed bottom-0 z-10">
                <div className="flex bottomBar dark:bg-dark02  gap-1 p-1 xsm:gap-2 xsm:p-2">

                    <Link className='flex-grow' href={'/'}><button className={`p-2 xsm:p-4 hover:text-white hover:bg-primary font-bold  rounded-xl flex flex-col justify-center items-center text-xs xsm:text-sm ${isActive('/') && 'active'}`}><AiOutlineHome size={'24px'} />Home</button></Link>
                    <Link className='flex-grow' href={'/blog'}><button className={`p-2 xsm:p-4 hover:text-white hover:bg-primary font-bold  rounded-xl flex flex-col justify-center items-center text-xs xsm:text-sm ${isActive('/blog') && 'active'}`}><TbBrandBlogger size={'24px'} />Blog</button></Link>
                    <Link className='flex-grow' href={'/projects'}><button className={`p-2 xsm:p-4 hover:text-white hover:bg-primary font-bold  rounded-xl flex flex-col justify-center items-center text-xs xsm:text-sm ${isActive('/projects') && 'active'}`}><AiOutlineFundProjectionScreen size={'24px'} />Projects</button></Link>
                    <Link className='flex-grow' href={'/about'}><button className={`p-2 xsm:p-4 hover:text-white hover:bg-primary font-bold  rounded-xl flex flex-col justify-center items-center text-xs xsm:text-sm ${isActive('/about') && 'active'}`}><TiInfoLargeOutline size={'24px'} />About</button></Link>
                    <Link className='flex-grow' href={'/tech'}><button className={`p-2 xsm:p-4 hover:text-white hover:bg-primary font-bold  rounded-xl flex flex-col justify-center items-center text-xs xsm:text-sm ${isActive('/tech') && 'active'}`}><GiTechnoHeart size={'24px'} />Tech</button></Link>



                </div>
            </div>
        </>
    )
}
