import React from 'react'
import { HERO, TAGS_NAMES } from '../constants/dummy'
import { FaCross } from 'react-icons/fa'
import Tags from './Tags'
import mongodb from "../assets/mongoDB.png"
import react from "../assets/react.png"
import node from "../assets/node.png"
import aboutme from "../assets/aboutme.png"

import 'react-tooltip/dist/react-tooltip.css'

import { Tooltip } from 'react-tooltip'

const Modal = ({isVisible, onClose}) => {

    if(!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose()
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' 
        onClick={handleClose} id='wrapper'>
            <div className='w-[900px] h-[600px] overflow-scroll md:h-auto md:overflow-hidden'>
                <div className='bg-[#141414] px-14 py-8 rounded-md md:flex'>
                    <div className='w-full md:w-full'>
                        <h1 className='text-[#40688A] font-semibold text-xl mb-4 uppercase'>About Me</h1>
                        <p>{HERO.description}</p>
                        <div className='mt-5'>
                            {
                                TAGS_NAMES.map((items, index) => (
                                    <Tags items={items} />
                                ))
                            }
                        </div>
                        <h1 className='text-[#40688A] font-semibold text-xl mb-4 mt-8'>MERN STACK</h1>

                        <div className='mt-10 flex gap-5 cursor-pointer'>
                            <div className='flex flex-col items-center gap-3'
                                data-tooltip-id="mongo-tooltip"
                                data-tooltip-content="MongoDb"
                                data-tooltip-place="top"
                            >
                                <img src={mongodb} alt="react_logo" width={35} />
                                <span className='text-[#287c22]'>M</span>
                            </div>
                            <Tooltip id="mongo-tooltip" />


                            <div className='flex flex-col items-center gap-2'
                                data-tooltip-id="express-tooltip"
                                data-tooltip-content="Express Js"
                                data-tooltip-place="top"
                            >
                                <span className='text-[38px]'>ex</span>
                                <span>E</span>
                            </div>
                            <Tooltip id="express-tooltip" />


                            <div className='flex flex-col items-center gap-3'
                                data-tooltip-id="react-tooltip"
                                data-tooltip-content="React Js"
                                data-tooltip-place="top"
                            >
                                <img src={react} alt="react_logo" width={52} />
                                <span className='text-[#61DBFB]'>R</span>
                            </div>
                            <Tooltip id="react-tooltip" />


                            <div className='flex flex-col items-center gap-3'
                                data-tooltip-id="node-tooltip"
                                data-tooltip-content="Node Js"
                                data-tooltip-place="top"
                            >
                                <img src={node} alt="node_logo" width={52} />
                                <span className='text-[#85f551]'>N</span>
                            </div>
                            <Tooltip id="node-tooltip" />

                        </div>
                    </div>

                    {/* <div className='w-full md:w-1/2 hidden md:block'>
                        <div className='flex justify-center'>
                            <img src={aboutme} alt="Ankit_Nandanwar" className='rounded-3xl w-full h-auto' />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Modal