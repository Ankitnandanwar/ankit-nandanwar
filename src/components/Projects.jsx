import React, { useState } from 'react'
import { motion } from 'framer-motion'


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
                className='mb-8 text-center text-3xl lg:text-4xl text-cyan-800 font-semibold'>Projects
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='fontfam mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-12'>
                <button onClick={() => handleClick('All')}
                    className={`px-1 py-1 duration-300 rounded-sm ${activeBtn === 'All' ? 'bg-cyan-800' : 'bg-[#32CD32]'}`}>All</button>
                <button onClick={() => handleClick('Office')}
                    className={`px-1 py-1 duration-300 rounded-sm ${activeBtn === 'Office' ? 'bg-cyan-800' : 'bg-[#32CD32]'}`}>Office</button>
                <button onClick={() => handleClick('Personal')}
                    className={`px-1 py-1 duration-300 rounded-sm ${activeBtn === 'Personal' ? 'bg-cyan-800' : 'bg-[#32CD32]'}`}>Personal</button>
            </motion.div>

        </section>
    )
}

export default Projects