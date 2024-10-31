import React, { useState } from 'react'
import { HERO } from '../constants/dummy'
// import carImg from "../assets/ankit.jpg"
import carImg1 from "../assets/ankit-rembg.png"
import Button from './Button'
// import Modal from './Modal'
import pdf from "../assets/Ankit_Nandanwar_CV.pdf"
import { motion } from 'framer-motion'

const Hero = () => {
    // const [showModal, setShowModal] = useState(false)

    return (
        <>
            <section className='flex min-h-screen flex-wrap items-center gap-5 md:gap-0'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='w-full md:w-1/2 my-5 md:my-0'>
                    <h2 className='mt-12 p-2 text-3xl text-center md:text-start lg:text-start font-bold md:text-5xl lg:text-[3.5rem] text-cyan-800'>{HERO.name}</h2>
                    <h2 className='p-2 text-3xl text-center md:text-start lg:text-start font-bold md:text-5xl lg:text-[2.5rem] text-[#32CD32]'>{HERO.greet}</h2>
                    <p className='mb-8 p-2 text-black text-base lg:text-[17px] lg:leading-8 leading-7 fontfam'>I'm a passionate software developer with a knack for creating intuitive
                        and engaging user interfaces. With a keen eye for design and a love for coding, I bring ideas to life with clean,
                        user-friendly layouts. Let's build something amazing together!</p>
                    {/* <Button
                        title="About Me"
                        ContainerStyles="ml-2"
                        handleClick={setShowModal}
                    /> */}
                    <a href={pdf} target='_blank' rel='noopener noreferrer'>
                        <Button
                            title="Download Resume"
                            ContainerStyles="ml-2"
                        />
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className='w-full md:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            src={carImg1} alt="Ankit_Nandanwar" width={500} className='rounded-full border border-[#32CD32] border-x-4 p-2 cursor-pointer' />
                    </div>
                </motion.div>
            </section>
            {/* <Modal isVisible={showModal} onClose={() => setShowModal(false)} /> */}
        </>
    )
}

export default Hero