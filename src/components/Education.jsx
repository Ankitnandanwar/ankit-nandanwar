import React from 'react'
import { EDUCATION } from '../constants/dummy'

const Education = () => {
  return (
    <section className='p-8' id='education'>
        <h2 className='mb-5 text-center text-3xl lg:text-4xl font-semibold'>Education</h2>
        {EDUCATION.map((edu, index)=> (
            <div key={index} className='mb-6 p-10 border border-[#abdf3a] rounded-xl'>
                <h3 className='text-2xl font-semibold fontfam text-[#abdf3a]'>{edu.degree}</h3>
                <p className='text-lg mt-2 fontfam'>{edu.institution}</p>
                <p className='text-sm mt-1 text-stone-400 fontfam'>{edu.duration}</p>
                <p className='mt-2 lg:leading-8 leading-7 fontfam'>{edu.description}</p>
            </div>
        ))}

    </section>
  )
}

export default Education