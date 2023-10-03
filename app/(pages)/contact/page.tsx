'use client'
import ContactForm from '@/components/ContactForm'
import Lottie from 'lottie-react'
import * as animationData from '../../../public/lotties/smile.json'
import { motion } from 'framer-motion' // Import motion from framer-motion
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Contact Me",
    description: "Get in touch with me today to discuss your project or to learn more about my services. I look forward to hearing from you!",
    keywords: "Contact Form, Get in Touch, Send Message,Contact a Freelancer,Contact a Remote Worker,Contact a Web Developer, Software Engineer, Web Developer, MERN Stack Developer, Full Stack Developer, Front-End Developer, Back-End Developer, Web Development Services, MERN Stack Development Services, Full Stack Development Services, Front-End Development Services, Back-End Development Services, Custom Web Development, Custom Software Development, Coding Project, Portfolio, GitHub"
};


export default function page() {
    const containerVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0 },
    };

    return (
        <motion.div
            className="flex justify-center items-center h-[60vh] md:h-[70vh] w-full"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className=" bg-primary opacity- h-80 md:h-96 w-full relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col justify-center items-center md:h-full w-full absolute md:static -bottom-40 xsm:-bottom-32 z-20 bg-primary h-[110px] xsm:h-[60px]  md:w-[40%] gap-8  text-white"
                >
                    <q className='text-xl md:text-3xl font-medium text-center'>I have a joke on programming, but it only works on my computer.</q>
                    <div className="w-[60px] h-[60px] rounded-full hidden md:block">
                        <Lottie animationData={animationData} loop={true} autoPlay={true} width={'50px'} height={'70px'} />
                    </div>
                </motion.div>
                <motion.div
                    className="bg-black text-white dark:bg-white dark:text-black w-full md:w-[50%]  absolute px-8 md:px-12 py-14 md:py-20  md:right-20  -top-12 shadow-xl"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } }}
                >
                    <h1 className='text-4xl font-bold mb-4'>Contact.</h1>
                    <ContactForm />
                </motion.div>
            </div>
        </motion.div>
    )
}
