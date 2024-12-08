import React,{useState} from 'react'
import logo from "../assets/logo.png"
import { NAVIGATION_LINKS } from '../constants/dummy';
import { FaBars, FaTimes } from 'react-icons/fa';

import { HiMiniBars3CenterLeft, HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault()
        const targetElement = document.querySelector(href)
        if(targetElement){
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }

        setIsOpen(false)
    }

  return (
    <div>
        <nav className='fixed left-0 right-0 top-0 lg:top-4 z-50'>
            {/* desktop menu */}
            <div className='mx-auto hidden max-w-full md:max-w-2xl items-center 
            justify-center rounded-sm
             py-3 backdrop-blur-lg lg:flex'>
                <div className='flex items-center justify-between gap-6'>
                    <div>
                        <a href="">
                            <img src={logo} alt="logo" width={40} />
                        </a>
                    </div>

                    <div>
                        <ul className='flex items-center gap-10'>
                            {
                                NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} 
                                        className='text-base hover:text-[#abdf3a] duration-300 fontfam'
                                        onClick={(e)=> handleLinkClick(e, item.href)}
                                        >{item.label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className='lg:hidden bg-cyan-800 px-3 py-1'>
                <div className='flex items-center justify-between'>
                    <div>
                        <a href="#">
                            <img src={logo} alt="logo" width={35} className='m-2'/>
                        </a>
                    </div>
                    <div className='flex items-center '>
                        <button className='focus:outline-none lg:hidden duration-500' onClick={toggleMenu}>
                            {isOpen ? (
                                <AiOutlineClose className='m-2 h-7 w-7'/>
                            ) : (
                                <HiBars3 className='m-2 h-7 w-7'/>
                            )}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md pb-4 fontfam'>
                    {
                        NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} 
                                className='block w-full text-base'
                                onClick={(e)=> handleLinkClick(e, item.href)}
                                >{item.label}</a>
                            </li> 
                        ))
                    }
                </ul>
                )}
            </div>
        </nav>
    </div>
  )
}

export default Navbar