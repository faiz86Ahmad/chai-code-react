import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from "./components/Card"

function App() {

  
  
  return (
    <>
      
      <h1 className='bg-green-400 p-4 mb-4'>Tailwind Css</h1>

      <Card name="faizan Ahmad" btnText="click me"/>
      <Card name="sameer"  />
      

     
    </>
  )
}

export default App
