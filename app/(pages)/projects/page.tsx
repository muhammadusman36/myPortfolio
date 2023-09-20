import MainLayout from '@/components/MainLayout'
import Projects from '@/components/Projects/Projects'
import ProjectsCard from '@/components/ProjectsCard'
import React from 'react'

const Page = () => {
  return (
    <>
    {/* <div className="">
      <h1 className='text-5xl font-bold'>Projects</h1>
      <p className='text-gray-400 mt-6 text-sm mb-4'>Here are my some of selected projects worth sharing!!!</p>
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
    </div> */}

    <MainLayout>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Here are some of my selected projects worth sharing.
        </p>
      </div>
      <Projects />
    </MainLayout>
    </>
  )
}

export default Page