import React from 'react'
import aboutPhoto from '../assets/Images/products/about.jpg'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'
import about1 from '../assets/Images/about1.jpg'
import about2 from '../assets/Images/about2.jpg'
import about3 from '../assets/Images/about3.jpg'
import about4 from '../assets/Images/about4.jpg'






const About = () => {
  return (
    <div className='h-full relative'>
          <div className='relative h-[700px] bg-cover bg-center'
            style={{backgroundImage: `url(${aboutPhoto})`}}> 
                     <Navbar/>

            <div className='flex flex-col py-20 md:py-56 items-center '> 
          <h1 className='text-white text-4xl md:text-7xl font-semibold'>ABOUT</h1>
        
          <div className='py-20 md:py-10'>
          <Link to='/Shop' >
                      <button className='bg-emerald-300 rounded-full px-10 py-4 text-white font-semibold text-lg hover:bg-emerald-400'>SHOP</button>
             </Link>
          </div>
          
          </div>
           </div>


          <div className='py-20'>
          <div className='flex flex-col px-12  md:px-60 space-y-8 py-5'> 
                <h1 className='text-2xl text-blue-900'>Founders </h1>
                <p> Melula is a Children Fashion brand from Copenhagen, Denmark. <br/>
                The danish design duo Louise Møllermark and Søren Hougesen joined forces in 2015 focusing on simple and beautiful design aesthetics. Melula is a direct prod- uct of this collaboration.</p>
           </div>
           <div className='flex flex-col px-12  md:px-60 space-y-8 py-5'> 
                <h1 className='text-2xl text-blue-900'>Mission</h1>
                <p> We love kids, kids are fun just as they are - active, creative and playfull. <br/>
                Melula was founded because we couldn’t nd children’s shoes with both childlike and playful look in combination with a feel of the simplicity of Scandinavian design.</p>
           </div>
           <div className='flex flex-col px-12  md:px-60 space-y-8 py-5'> 
                <h1 className='text-2xl text-blue-900'>Melula Shoes </h1>
                <p> Shapes and Colors are one of the fundamentals in Melula.<br/>
                We derive our inspiration from the creative processes of children and how they express themselves while playing. Melula have created a classic stylish shoe that are playful, fun and has a unique colourfull approach to design. Melula shoes are aiming for a unisex approach, unless our patterns guides in a clear direction.
                <br/>  <p> <br/> </p>  The shoes is a transition shoe that both can be used for when your little ones needs to look stylish, but also just for everyday use. We are continualy develop- ing new prints and styles, so that Melula can continue to be a brand that dictates trends instead of following them.</p>
           </div>
           <div className='flex flex-col px-12  md:px-60 space-y-8 py-5'> 
                <h1 className='text-2xl text-blue-900'>Materials </h1>
                <p> Quality and comfort are extremely important while creating a shoe for children. That’s why we chose a soft material, which is suitable for the foot. The material and the inner construction stabilizes the ankle but also make it exible enough to bend, which is important for movability as well as Our shoes are made out of strong and durable fabrics. They are easy to clean and breathable for the foot</p>
           </div>
           <div className='flex flex-col px-12  md:px-60 space-y-8 py-5'> 
                <h1 className='text-2xl text-blue-900'>Transparent and Fair production</h1>
                <p> We chose to focus heavily on the design and the production as the most im- portant ingredients in the development of the collection. The production of our shoes is an important factor. We cooperate only with manufacturers that have full transparency and works within sound ethical guidelines, fair work- ing conditions and the compliance with environmental standards. <br/>
                <p><br/></p> Our main shoe manufacture comes from a historical line of shoemakers with there main focus on the creation and development of children’s footwear. A mid- high range productline that is distinguished by its exclusivity and quality of mate- rials. Based in mainland of Portugal.</p>
           </div>
           <div className='flex flex-col px-12  md:px-60 space-y-8 py-5'> 
                <h1 className='text-2xl text-blue-900'>Suppliers </h1>
                <p> 
                All Melulas suppliers are based in the southern part of Euope mainly Italy, Spain and Portugal, where there is a long historie of producing materials of the highest quality, ensuring longlivity and a high standard. All of our textiles comes from Portugal, all leather materials are supllied by our Italien and spanish based suppliers.</p>
           </div>
          </div>

           <div className=' flex flex-col  md:flex-row px-28 gap-10 py-12'>
                     <img src={about1} className=' h-72 w-96' />
                     <img src={about2} className=' h-72 w-96' />
                     <img src={about3} className=' h-72 w-96' />
                     <img src={about4} className=' h-72 w-96' />
           </div>
           

  </div>
    
  )
}

export default About