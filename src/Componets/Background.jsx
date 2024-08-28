import React from 'react'
import backgroundPic from '../assets/Images/colours.jpg'
import pic1 from '../assets/Images/shoe.jpg'
import pic2 from '../assets/Images/scarf.jpg'
import pic3 from '../assets/Images/Ls.jpg'
import pic4 from '../assets/Images/rts.jpg'
import pic5 from '../assets/Images/rbs.jpg'
import pic6 from '../assets/Images/1.jpg'
import pic7 from '../assets/Images/2.jpg'
import pic8 from '../assets/Images/3.jpg'
import pic15 from '../assets/Images/15.jpg'
import pic16 from '../assets/Images/16.jpg'
import pic17 from '../assets/Images/gif.gif'
import logo from '../assets/Images/v.logo.png'
import laces1 from '../assets/Images/laces-1.jpeg'
import laces2 from '../assets/Images/laces2.jpeg'

import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'

export const Background = () => {
  return (
    <>
        <div className='relative h-screen bg-cover bg-center'
            style={{backgroundImage: `url(${backgroundPic})`}}>
            <Navbar />
            <div className='container mx-auto px-4 lg:-mt-64 py-52 '>
                <div className='flex flex-col py-2 items-center'>
                    <h1 className='md:text-6xl text-4xl font-semibold md:pt-96 text-white'>FOR COLOURFUL </h1>
                    <h1 className='md:text-6xl text-4xl mt-2 mb-10 font-semibold text-white'>STEPS IN LIFE</h1>
                    <div className='py-20 md:py-5'>
                        <button className='bg-emerald-400 rounded-full px-10 py-4 text-white font-semibold text-lg hover:bg-gradient-to-l from-emerald-400 hover:bg-transparent'>VISIT OUR SHOP</button>
                    </div>
                </div>
            </div>
        </div>

            {/* 2nd section */}
        <div className='grid cols-1 md:grid-cols-2'>
          <img src={pic1}/>
          <img src={pic2}/>
        </div>

        {/* Third section  */}
        <div className='bg-blue-950  text-2xl md:text-4xl px-36 py-40 w-auto text-white flex flex-col items-cente'>
         <div className='container mx-auto'>
          <h1 className='mb-5 '>Melula Kids shoes</h1>
            <p  className='mb-3'>Melula a Copenhagen based kids fashion brand. Colourful, playfull and gender neutral. Designed in Denmark, produced in Portugal.</p>
            <div> 
              <a className='border-l pl-5 underline text-green-500 text-sm md:text-lg'>Read our story</a>
            </div>
          </div>
        </div>

       {/* edfd */}
      <div className='bg-blue-500 md:flex'>
        <img src={pic3} className='w-full md:w-[65%] object-cover' />
        <div className='w-full md:w-[35%] flex flex-col'>
          <img src={pic4} className='h-1/2 object-cover' />
          <img src={pic5} className='h-1/2 object-cover' />
        </div>
      </div>

      {/* fedfef */}

      <div className='bg-blue-500 md:flex'>
      <div className='w-full md:w-[35%] flex flex-col'>
          <img src={pic6} className='h-1/2 object-cover' />
          <img src={pic7} className='h-1/2 object-cover' />
        </div>
        <img src={pic8} className='w-full md:w-[65%] object-cover' />
      </div>


{/* 
      frf */}

      <div className='bg-blue-500 md:flex'>
        <img src={pic15} className='w-full md:w-[65%] object-cover' />
        <div className='w-full md:w-[35%] flex flex-col'>
          <img src={pic16} className='h-1/2 object-cover' />
          <img src={pic17} className='h-1/2 object-cover' />
        </div>
      </div>     
      
      {/* logos */}
      <div className='py-20'>
        <div className='flex justify-center mb-10'>
            <h1 className='text-blue-950 text-2xl'>They talk about us</h1>
          </div>
            <div className='container mx-auto'>
              <div className='flex justify-center shadow-lg mb-20' >
                <img src = {logo}/>
              </div>
         </div>
      </div>

      {/* subscribe */}
      <div className='grid cols-1 md:grid-cols-2'>
        <div className=''>
          <div className='flex justify-center mb-5 flex-col px-8 md:pl-36'>
            <h className= 'text-blue-950 text-2xl mb-10'>Follow us on Instagram <a href='#' className='underline hover:text-blue-400 '>@melula_copenhagen</a></h>
            <div className='flex gap-4'>
            <img src={laces1} className='w-1/2 h-1/2'/>
            <img src={laces2} className='w-1/2 h-1/2'/>
            </div>
          </div>
        </div>
        <div className='md:justify-center'>
            <h1 className='flex justify-center py-2 font-semibold'>Subscribe</h1>
            <p className='px-2 md:flex justify-center mb-8 py-2'>Sign up with your email address to receive news and updates.</p>
            <form action="" className='px-2 md:flex justify-center py-2'>
              <input type="text" placeholder='E-mailaddress' className='border border-gray-300 py-3 px-4 mr-2'/>
              <button className='bg-green-300 py-3 px-8 border border-gray-300'>SIGN UP</button>
            </form>
            <p className='flex justify-center pt-6 text-gray-400 mb-24'>We respect your privacy.</p>
        </div>
       
      </div>
      
      {/* footer */}
      <div className='bg-blue-950 py-20 mt-32'>
        <div className='flex justify-center'>
          <h1 className='text-green-600'>Melula</h1>
          <p className='text-white ml-5'>11 Dannevirkegade, København, 1763, Denmark</p>
          <h1 className='hover:text-gray-500 text-white ml-2'>hello@melula.com</h1>
        </div>
        <div className='flex justify-center py-6 gap-4 text-white hover:text-gray-500'>
          <FaInstagram size={28} className='cursor-pointer hover:text-white'/> 
          <FaFacebook  size={28} className='cursor-pointer hover:text-white'/> 
          <FaPinterest  size={28} className='cursor-pointer hover:text-white'/>
        </div>
        <div className='flex justify-center text-white gap-4 font-semibold'>
          <a href="#" className=' hover:text-gray-500'>Contact & Wholesale</a>
          <a href="#" className=' hover:text-gray-500'>Terms and conditions</a>
          <a href="#" className=' hover:text-gray-500'>Shipping & Returns</a>
        </div>
      </div>
    </>
  )
}
