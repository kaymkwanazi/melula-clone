import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 right-0 left-0 shadow-lg z-50 bg-white'>
        <div className=' flex px-6 py-5 justify-between text-white absolute w-full bg-blue-900 md:bg-transparent'>
             <h1 className='text-sm md:text-4xl italic'>Melula.</h1>
             <div className='hidden md:flex gap-8 text-xs md:text-lg font-bold justify-between '>
                <a href= '#'>SHOP</a>
                <a href= '#'>ABOUT</a>
             </div>
                <IoCartOutline size={32}/>

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
