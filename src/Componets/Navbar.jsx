import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";
import logo from '../assets/Images/logo.png'


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredText, setHoveredText] = useState(null); 


  return (
    <nav>
        <div className=' flex px-5 py-6 justify-between text-white w-full bg-blue-950 md:bg-transparent'>
             <img src={logo} className='w-20' />
             <div className='hidden md:flex gap-8 text-xs md:text-lg font-bold justify-between group '>
                <a href= '#'
                    className={`cursor-pointer ${
                        hoveredText === 'About' ? 'text-gray-200' : 'text-white'
                      }`}
                    onMouseEnter={() => setHoveredText('Shop')}
                    onMouseLeave={() => setHoveredText(null)}
                >SHOP</a>
                <a href= '#'
                    className={`cursor-pointer ${
                        hoveredText === 'Shop' ? 'text-gray-200' : 'text-white'
                      }`}
                    onMouseEnter={() => setHoveredText('About')}
                    onMouseLeave={() => setHoveredText(null)}
                >ABOUT</a>
             </div>
             <div className='relative'>
                <IoCartOutline size={32}/>
                <p className='absolute -top-1 -right-2 bg-orange-400 text-center rounded-full text-white text-xs w-5 h-5 flex items-center justify-center'>0</p>
             </div>
             <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? null : <FaBars />}
                    </button>
            </div>
               
            {isOpen && (
                <div className='fixed inset-0 flex flex-col items-center justify-center space-y-6 bg-white text-black z-50'>
                    <div className='absolute top-5 left-5'>
                        <button onClick={() => setIsOpen(false)}>
                            <FaTimes size={32} />
                        </button>
                    </div>
                    <div className='flex gap-4 flex-col font-bold md:flex:group '> 
                        <a href='#' >SHOP</a>
                        <a href='#'>ABOUT</a>
                    </div>
                </div>
            )}
        
        </div>

    </nav>
  )
}
