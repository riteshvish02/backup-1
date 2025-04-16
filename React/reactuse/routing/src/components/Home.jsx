import React, { useEffect, useRef, useState } from 'react'
import { Route,useNavigate } from 'react-router-dom'
import axios from "axios"

const Home = () => {
  
  const FocusRef = useRef(null)

  const navigate = useNavigate()
  const  RouteHandler = ()=>{
     navigate("/show")
  }
  const [images,setimages] = useState([])
  const [page,setpage] = useState(1)
  const getimages = async()=>{
    try {
      const {data} =  await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=100`)
      setimages(data)
    } catch (error) {
      console.log(error);
    }
  }
useEffect(()=>{
  // console.log(FocusRef.current.focus());
  FocusRef.current.focus()
  // getimages()

},[page])


  return (
    <div className='w-full h-screen wrap bg-slate-300'>
     <div className='overflow-y-auto w-[50vh] h-[80vh]'>
     {
        images.map((image)=>{
          return <img className='w-[15vh] object-cover' src={image.download_url} alt={image.author} key={image.id} />
        })
      }
     </div>
      {/* <button onClick={RouteHandler} className='px-2 py-1 rounded-md bg-red-300'>Show</button> */}
      {/* <button className='p-2 bg-gray-800 rounded' onClick={()=> page > 0 && setpage((old)=>old-1)}>Prev</button>
      <button className='p-2 bg-gray-800 rounded ml-5' onClick={()=>setpage((old)=>old+1)}>Next</button> */}
      <div className='absolute m-auto right-[40%]  top-12 p-3 rounded bg-red-300 flex flex-col gap-4'>
        <h3 className='ml-2'>Focus</h3>
        <input  className='rounded border-[1.2px] border-[black] px-3 py-2 outline-none' placeholder='Name' type="text" />
        <input ref={FocusRef} className='rounded border-[1.2px] border-[black] outline-none px-3 py-2 ' placeholder='Email' type="text" />
      </div>
    </div>
  )
}

export default Home
