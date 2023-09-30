'use client'
import ContactForm from '@/components/ContactForm'
import Lottie from 'lottie-react'
import * as animationData from '../../../public/lotties/smile.json'

import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'


export default function page() {

    return (
        <>
            <div className="flex justify-center items-center h-[60vh] md:h-[70vh] "  >

                <div className=" bg-primary opacity- h-80 md:h-96 w-full relative  ">


                    <div className="flex flex-col justify-center items-center md:h-full w-full absolute md:static -bottom-40 xsm:-bottom-32 z-20 bg-primary h-[110px] xsm:h-[60px]  md:w-[40%] gap-8  text-white">

                        {/* <div className="">
                            <div className="text-4xl font-medium flex items-center gap-4">
                                <FiPhoneCall /> <span>Call Me!</span>
                            </div>
                            <span className='text-lg  ms-14 '>+92 333 4800565</span>
                        </div>
                        <div className="">
                            <div className="text-4xl font-medium flex items-center gap-4">
                                <FiPhoneCall /> <span>Call Me!</span>
                            </div>
                            <span className='text-lg ms-14 '>+92 333 4800565</span>
                        </div>
                        <div className="">
                            <div className="text-4xl font-medium flex items-center gap-4">
                                <FiPhoneCall /> <span>Call Me!</span>
                            </div>
                            <span className='text-lg ms-14 '>+92 333 4800565</span>
                        </div> */}
                        <q className='text-xl md:text-3xl font-medium text-center'>I have a joke on programming, but it only works on my computer.</q>
                        <div className="w-[60px] h-[60px] rounded-full hidden md:block">
                        <Lottie animationData={animationData} loop={true} autoPlay={true} width={'50px'}  height={'70px'} />
                        </div>
                    </div>




                    <div className="bg-black text-white dark:bg-white dark:text-black w-full md:w-[50%]  absolute px-8 md:px-12 py-14 md:py-20  md:right-20  -top-12 shadow-xl ">
                        <h1 className='text-4xl font-bold mb-4'>Contact.</h1>
                        <ContactForm />
                    </div>
                </div>

            </div>

        </>
    )
}
