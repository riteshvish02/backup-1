import React from 'react'
import { useParams } from 'react-router-dom'

function Dets() {
 const {id} = useParams()
   
return (
    <div className='w-[30vh] h-[20vh] bg-slate-100 p-10'>
       <h2>Book<span className='font-bold'> {id}</span></h2>  
    </div>
  )
}

export default Dets
