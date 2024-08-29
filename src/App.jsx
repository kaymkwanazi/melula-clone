import { useState } from 'react'
import './App.css'
import { Background } from './Componets/Background'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './Componets/About'
import Shop from './Componets/Shop'
import { Navbar } from './Componets/Navbar'
import Footer from './Componets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>   
      <Routes> 
                  
           <Route path='/' element={ <Background/>}>   </Route>
           <Route path='/About' element={<About/>}>   </Route>
           <Route path='/Shop' element={ <Shop/>}>   </Route>
      </Routes>
          <Footer/>
      </BrowserRouter>

      
      
    </>
  )
}

export default App
