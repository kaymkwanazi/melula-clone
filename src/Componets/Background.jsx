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

import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'

export const Background = () => {
  return (
    <>
        <div className='relative h-screen bg-cover bg-center'
            style={{backgroundImage: `url(${backgroundPic})`}}>
            <Navbar />
            <div className='container mx-auto px-4 lg:-mt-64 py-52 '>
                <div className='flex flex-col py-2 items-center'>
                    <h1 className='md:text-6xl text-4xl font-semibold pt-36 text-white'>FOR COLOURFUL </h1>
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
        <div className='bg-blue-900  text-2xl md:text-4xl px-36 py-40 w-auto text-white flex flex-col items-cente'>
         <div className='container mx-auto'>
          <h1 className='mb-5 '>Melula Kids shoes</h1>
            <p  className='mb-3'>Melula a Copenhagen based kids fashion brand. Colourful, playfull and gender neutral. Designed in Denmark, produced in Portugal.</p>
            <div> 
              <a className='border-l pl-5 underline text-green-500 text-sm md:text-lg'>Read our story.</a>
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
        <img src={pic3} className='w-full md:w-[65%] object-cover' />
        <div className='w-full md:w-[35%] flex flex-col'>
          <img src={pic4} className='h-1/2 object-cover' />
          <img src={pic5} className='h-1/2 object-cover' />
        </div>
      </div>     </>
  )
}
