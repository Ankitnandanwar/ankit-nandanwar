import React from 'react'
import { EXPERIENCES } from '../constants/dummy'
import { motion } from 'framer-motion'

const WorkExp = () => {
  return (
    <section className='pt-20' id='work'>
        <motion.h2 
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity: 1, y:0 }}
        transition={{duration: 1}}
        className='mb-8 text-center text-3xl lg:text-4xl font-semibold'>Work Experience</motion.h2>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1, delay: 0.5}}
        className='space-y-8 p-10'>
            {EXPERIENCES.map((exp, index)=>(
                <motion.div 
                initial={{opacity:0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1, delay: index * 0.2 }}
                key={index} className='fontfam rounded-xl border border-[#abdf3a] p-4'>
                    <h3 className='text-2xl font-semibold'>{exp.title}</h3>
                    <div className='flex justify-between items-center'>
                    <p className='text-base mt-1 text-stone-400'>{exp.company}</p>
                    <p className='text-sm text-stone-300'>{exp.duration}</p>
                    </div>
                    <p className='mt-2 leading-7'>{exp.description}</p>
                </motion.div>
            ))}
        </motion.div>
    </section>
  )
}

export default WorkExp