import React from 'react'
import { Tooltip } from 'react-tooltip'
import { skillsImg } from '../constants/dummy'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id='skills'>
            <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8 text-center text-3xl lg:text-4xl font-semibold text-cyan-800'>Skills</motion.h2>
            <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-10'>
                {
                    skillsImg.map((skill, index) => (
                        <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        key={index}>
                            <div className='flex flex-col items-center gap-3 cursor-pointer'
                                data-tooltip-id={skill.tooltipId}
                                data-tooltip-content={skill.cont}
                                data-tooltip-place="top"
                            >
                                <img src={skill.image} alt={skill.alt} width={100} />
                            </div>
                            <Tooltip id={skill.tooltipId}/>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}

export default About