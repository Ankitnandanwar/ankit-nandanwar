import React, { useState } from 'react'
import { HERO } from '../constants/dummy'
import carImg from "../assets/ankit.jpg"
import Button from './Button'
import Modal from './Modal'
import pdf from "../assets/Ankit_Resume.pdf"
import { motion } from 'framer-motion'

const Hero = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <section className='flex min-h-screen flex-wrap items-center'>
                <motion.div
                initial={{opacity:0, x: -50}}
                animate={{opacity:1, x:0}}
                transition={{duration: 1}}
                className='w-full md:w-1/2'>
                    <h2 className='my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]'>{HERO.name}</h2>
                    <p className='p-2 text-3xl tracking-tighter lg:text-4xl'>{HERO.greet}</p>
                    <p className='mb-8 p-2 text-xl'>Hi, I'm a passionate software developer with a knack for creating intuitive 
                    and engaging user interfaces. With a keen eye for design and a love for coding, I bring ideas to life with clean, 
                    user-friendly layouts. Let's build something amazing together!</p>
                    <Button
                        title="About Me"
                        ContainerStyles="ml-2"
                        handleClick={setShowModal}
                    />
                    <a href={pdf} target='_blank' rel='noopener noreferrer'>
                        <Button
                            title="Download Resume"
                            ContainerStyles="ml-2"
                        />
                    </a>
                </motion.div>
                <motion.div 
                initial={{opacity:0, scale: 0.8}}
                animate={{opacity:1, scale: 1}}
                transition={{duration: 1}}
                className='w-full md:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration: 1}}
                        src={carImg} alt="Ankit_Nandanwar" width={550} height={500} className='rounded-3xl' />
                    </div>
                </motion.div>
            </section>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        </>
    )
}

export default Hero