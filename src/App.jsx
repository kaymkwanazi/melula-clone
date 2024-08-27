import { useState } from 'react'
import './App.css'
import { Background } from './Componets/Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background></Background>
    </>
  )
}

export default App
