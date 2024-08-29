import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
const Footer = () => {
  return (

    <>
    
       {/* footer */}
       <div className='bg-blue-950 py-8 md:py-20 mt-32'>
     <div className='flex justify-center'>
       <h1 className='text-green-300 font-semibold md:text-green-600'>Melula</h1>
       <p className='text-white ml-2'>11 Dannevirkegade, København, 1763, Denmark</p>
       <h1 className='hover:text-gray-500 text-white ml-3'>hello@melula.com</h1>
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

export default Footer