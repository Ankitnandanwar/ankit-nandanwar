import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Slide, Fade } from 'react-awesome-reveal'
import { PROJECTS } from '../constants/dummy'

const Projects = () => {

    const [activeBtn, setActiveBtn] = useState('All')

    const handleClick = (name) => {
        setActiveBtn(name)
    }

    return (
        <section className='pt-20' id='projects'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mb-8 text-center text-3xl lg:text-4xl text-white font-semibold'>Projects
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='fontfam mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-12'>
                <button onClick={() => handleClick('All')}
                    className={`px-1 py-1 duration-300 rounded-sm ${activeBtn === 'All' ? 'bg-white text-black' : 'bg-[#abdf3a] text-black'}`}>All</button>
                <button onClick={() => handleClick('Office')}
                    className={`px-1 py-1 duration-300 rounded-sm ${activeBtn === 'Office' ? 'bg-white text-black' : 'bg-[#abdf3a] text-black'}`}>Office</button>
                <button onClick={() => handleClick('Personal')}
                    className={`px-1 py-1 duration-300 rounded-sm ${activeBtn === 'Personal' ? 'bg-white text-black' : 'bg-[#abdf3a] text-black'}`}>Personal</button>
            </motion.div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-12'>
                {
                    PROJECTS.map((item, index) => (
                        <div className='shadow-md rounded-lg overflow-hidden relative group'>
                            <img src={item.image}
                                alt="img" className='w-full max-w-[320px] h-[350px] rounded-lg' />

                            <div className='absolute top-[-100%] left-0 opacity-0 group-hover:opacity-100 
                    group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm
                    duration-500 '>
                                <div className='space-y-4'>
                                    <Slide cascade>
                                        <h1 className='text-2xl font-semibold'>{item.name}</h1>
                                        <Fade cascade damping={0.05}>
                                            <p className='px-2'>{item.description}</p>
                                        </Fade>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    ))
                }





            </div>


        </section>
    )
}

export default Projects