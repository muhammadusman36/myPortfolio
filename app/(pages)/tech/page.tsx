import Technologies from '@/components/Technelogies'
import React from 'react'

const Tech = () => {
  return (
    <>
      <div className="overflow-y-scroll scrollBar" style={{ maxHeight: '70vh' }}>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Tech
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My tech stack and Tools.
          </p>
        </div>
        <div className="text-center">
          <h1 className='text-3xl font-bold'>What I Use</h1>
        </div>
        <div className="lg:mt-2">
          <Technologies />
        </div>
        <div className="mt-2">
          <h3 className='text-3xl font-medium'>Editor</h3>
          <ul className='ms-4 flex flex-col gap-2' style={{ listStyleType: 'disc' }}>
            <li className='text-xl my-2'>My editor of choice is <a href='' className='bg-primary text-white px-1' target='_blank'>Visual Studio Code</a> with a giant pile of extensions</li>
            <li className='text-xl my-2'>I am currently using <span className='bg-primary text-white px-1' >dark</span> theme</li>
          </ul>
        </div>
        <div className="my-8">
          <h3 className='text-3xl font-medium'>Terminal</h3>
          <ul className='ms-4 flex flex-col gap-2' style={{ listStyleType: 'disc' }}>
            <li className='text-xl my-2'>I use <span className='bg-primary text-white px-1' >PowerShell</span> Terminal</li>
            <li className='text-xl my-2'>All terminals use <a href='https://github.com/tonsky/FiraCode' target='_blank' className='bg-primary text-white px-1' >Fira Code</a> as fonts because ligatures all the way</li>
          </ul>
        </div>
        <div className="">
          <h3 className='text-3xl font-medium'>Desktop Apps</h3>
          <ul className='ms-4 flex flex-col gap-2' style={{ listStyleType: 'disc' }}>
            <li className='text-xl my-2'><a href='https://www.google.com' className='bg-primary text-white px-1' target='_blank'>Google Chrome</a>is my main browser for both browsing and development</li>
            <li className='text-xl my-2'><a href='https://www.postman.com/' className='bg-primary text-white px-1' target='_blank'>Postman</a>for API development and testing</li>
            <li className='text-xl my-2'><a href='https://www.discord.com/' className='bg-primary text-white px-1' target='_blank'>Discord</a> and <a href='https://www.skype.com/' className='bg-primary text-white px-1' target='_blank'>Skype</a> for messaging or calls</li>
            <li className='text-xl my-2'><a href='https://git-scm.com/' className='bg-primary text-white px-1' target='_blank'>git</a> and <a href='https://github.com/' className='bg-primary text-white px-1' target='_blank'>GitHub</a> for version control</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Tech