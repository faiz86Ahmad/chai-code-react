import { useState } from "react"



function App() {

  const [counter,setCounter] = useState(15)

  const increasefun=()=>{
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    


   // if(increase < 20 ){
   // setIncrease(increase+1)
  //  }
  }

  const decreasefun=()=>{
    if(counter > 0){
    setCounter(counter-1)
    }
  }



  return (
    <>
   <h1> counter value : {counter}</h1>

   <button onClick={increasefun} >+</button>
   <button onClick={decreasefun}>-</button>
   </>
  )
}

export default App
