import React from 'react'
import backgroundPic from '../assets/Images/colours.jpg'
import { Navbar } from './Navbar'

export const Background = () => {
  return (
    <div className='relative h-screen bg-cover bg-center md:-mt-64'
         style={{backgroundImage: `url(${backgroundPic})`}}>
        <Navbar />
        <div className='container mx-auto px-4 h-1/2 py-52 md:py-96'>
            <div className='flex flex-col py-2 md:py-36 items-center'>
                <h1 className='md:text-7xl text-6xl font-semibold text-white'>FOR COLOURFUL </h1>
                <h1 className='md:text-7xl text-6xl mt-2 mb-10 font-semibold text-white'>STEPS IN LIFE</h1>
                <div className='py-20 md:py-5'>
                    <button className='bg-emerald-400 rounded-full px-10 py-4 text-white font-semibold text-lg hover:bg-gradient-to-l from-emerald-400 hover:bg-transparent'>VISIT OUR SHOP</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
