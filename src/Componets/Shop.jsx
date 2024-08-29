import React, { useState } from 'react'
import shopImage from '../assets/Images/shopImage.jpg'
import { Navbar } from './Navbar'
import pic7 from '../assets/Images/shoe1.jpg'
import data from '../imageStore.json'
const Shop = () => {
    const [category,setCategory] = useState("all")

  return (
    <div className='h-full relative' >
        <div className=' h-1/2' style={{backgroundImage: `url(${shopImage})`}}> 
              
        <Navbar/>

                <div className='flex justify-center py-48 '> 
                    <h1 className='text-white text-4xl md:text-7xl font-semibold'>SHOP</h1>
                </div>
        </div>

        <div className='flex  justify-center py-20'> 
             <div className='flex space-x-7   '>
                  <button onClick={() => setCategory("all")}> All</button>
                  <button onClick={() => setCategory("shoe")}> Kids Shoes</button>
                  <button onClick={() => setCategory("lace")} > No-Tie Laces</button>

             </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-3 justify-center  gap-16 px-48 '>
        {
            data.images.map((i) => 
                category === "all" ? ( 
                <div className='flex flex-col space-y-5' key={i.id}> {/* Key prop for React's rendering */}
                <img src={i.url} className='' alt='' />
                <div className='text-center'>
                        <h1>{i.des}</h1>
                        <h1 className='text-gray-400'> 145.00 €</h1>
                    </div>
                    </div>
                ) : i.type === category ? ( 
                    <div className='flex flex-col space-y-5' key={i.id}> {/* Key prop for React's rendering */}
                    <img src={i.url} className='' alt='' />
                    <div className='text-center'>
                            <h1>{i.des}</h1>
                            <h1 className='text-gray-400'> 145.00 €</h1>
                        </div>
                        </div>
                    ) : null
            )}
             </div>           
        </div>
  )
}

export default Shop