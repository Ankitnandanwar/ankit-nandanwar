import React from 'react'
import { CERTIFICATION } from '../constants/dummy'
import { BiUpload } from 'react-icons/bi'
import { MdArrowOutward } from 'react-icons/md'
import LiveLogo from '../assets/livewirelogo.png'

const Certification = () => {
    return (
        <section className='pt-20' id='certificate'>
            <h2 className='mb-8 text-center text-3xl lg:text-4xl'>Licenses & Certifications</h2>

            <div className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 lg:gap-x-48'>
                {
                    CERTIFICATION.map((cert, index) => (
                        <div key={index} className="relative pl-16 rounded-xl border border-stone-50/30 bg-white/10 p-4 cursor-pointer">
                            <div className="text-base font-semibold leading-7 text-white">
                                <div className="absolute left-1 -top-0.5 flex h-16 w-16 items-center justify-center rounded-lg">
                                    <img src={LiveLogo} alt="logo" className='w-full h-full object-contain pr-2'/>
                                </div>
                                {cert.title}
                            </div>
                            <p className="mt-1 text-base leading-7 text-stone-300">{cert.institution}</p>
                            <p className="mt-1 text-base leading-7 text-stone-300">{cert.duration}</p>
                            
                            <a href={cert.link} target='_blank' rel='noopener noreferrer'
                            className='flex mt-2 w-20 items-center gap-1 
                            rounded-lg bg-white px-3 py-1 text-black hover:bg-gray-300'>
                                <span>Click</span>
                                <MdArrowOutward />
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Certification