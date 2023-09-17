import React from 'react'
import Svg from '../Svg'

export default function Section_1() {
  return (
    <>
      <div className=" flex justify-center items-center p-6 lg:px-36 mt-12 flex-col md:flex-row">
        <div className=" w-full md:w-1/2  ">
          <span className='bg-primary text-white p-1 rounded-md text-sm sm:text-base '>Software Engineer</span>
          <br />
          <h1 className='text-2xl sm:text-4xl mt-4 leading-relaxed'>Making The Impossible Possible. Using 1&apos;s and 0&apos;s.</h1>
          <p className='mt-4'>Problem solving is what makes me unique.</p>

          <div className="flex gap-10 sm:gap-44">
            <div className="flex items-center gap-1 mt-16">
              <h3 className='text-2xl sm:text-4xl'>3</h3>
              <p className='text-xs' >Years of <br /> Experience</p>
            </div>
            <div className="flex items-center gap-1 mt-16">
              <h3 className='text-2xl sm:text-4xl'>182</h3>
              <p className='text-xs' >Projects / <br /> Contributions</p>
            </div>

          </div>

          <button className='border-4 border-primary py-2 px-8 rounded-full mt-8 hover:scale-110 transition-all text-sm sm:text-base'>View CV</button>
        </div>
        <div className="w-full md:w-1/2 ">
          <Svg />
        </div>
      </div>
    </>
  )
}
