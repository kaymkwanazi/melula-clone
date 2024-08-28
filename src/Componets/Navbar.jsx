import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
        <div className=' flex px-6 py-5 justify-between text-white w-full bg-blue-900 md:bg-transparent'>
             <h1 className='text-sm md:text-4xl italic'>Melula.</h1>
             <div className='hidden md:flex gap-8 text-xs md:text-lg font-bold justify-between '>
                <a href= '#' id='shop' class="hover-effect cursor-pointer">SHOP</a>
                <a href= '#' id='about' class="hover-effect cursor-pointer">ABOUT</a>
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
                    <a href='#'>SHOP</a>
                    <a href='#'>ABOUT</a>
                </div>
            )}
        
        </div>

    </nav>
  )
}
