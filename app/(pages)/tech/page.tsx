import Technologies from '@/components/Technelogies'
import Techstack from '@/components/Techstack'
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
          <Techstack />
        </div>
      </div>
    </>
  )
}

export default Tech