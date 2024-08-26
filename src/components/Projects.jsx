import React from 'react'
import { PROJECTS } from '../constants/dummy'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'
import LaptopImage from '../assets/macbook3.png'

const Projects = () => {
    return (
        <section className='pt-20' id='projects'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mb-8 text-center text-3xl lg:text-4xl'>Projects</motion.h2>
            <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
                {PROJECTS.map((project) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        key={project.id} className='group relative h-80 overflow-hidden rounded-3xl cursor-pointer'>

                        {/* Laptop Image */}
                        <img src={LaptopImage} alt="Laptop" className='h-full w-full object-cover' />

                        {/* Inner Image inside Laptop */}
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            src={project.image} alt={project.name}
                            className='absolute inset-0 h-[87%] w-[93%] left-4 top-[0.4rem] rounded-md object-cover transition-transform duration-500' />

                        {/* Hover effect */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className='absolute inset-0 flex flex-col items-center justify-center text-white
                            opacity-0 transition-opacity duration-500 px-2'>
                            <h3 className='mb-2 text-xl'>{project.name}</h3>
                            <p className='mb-4 p-4 text-center'>{project.description}</p>
                            <a href={project.githubLink} target='_blank' rel='noopener noreferrer'
                                className='rounded-lg bg-white px-4 py-2 text-black hover:bg-gray-300'>
                                <div className='flex items-center'>
                                    <span>Click to view</span>
                                    <MdArrowOutward />
                                </div>
                            </a>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects