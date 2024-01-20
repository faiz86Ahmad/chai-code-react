import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
//import { useEffect } from 'react'

const Github = () => {

  const data = useLoaderData()

 /* const [data,setData] = useState([])

  useEffect(()=>{
    

    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data)
      setData(data)
    })

  },[])
  */

  return (
    <div className="bg-gray-600 text-center text-3xl m-4 p-4 text-white">
      Github Followers:{data.followers}
    <img src={data.avatar_url} alt="github picture" width={300} />
    </div>
  )
}

export default Github


export const githuhubInfo = async()=>{
 
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')

  return response.json()

}
