import React, { useEffect, useState } from 'react'
import axios from '../helpers/Axios'
const Entry = () => {
  
  const [users,setuser] = useState([])
  const getuser = async () =>{
    try {
     const {data} =  await axios.get('/users')
       console.log(data);
      setuser(data)
    } catch (error) {
      console.log(error);
    }
   
  }
  useEffect(() =>{
    getuser()
  },[])

  return  (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-slate-100 pt-2'>
      <button onClick={getuser} className='px-2 py-1 bg-red-500 text-white rounded-md'>Get users</button>
      <div  className='flex flex-col overflow-y-auto bg-red-300  p-2 rounded m-1 '>
      {users.map((user,i)=>(
        <div  className='flex flex-col bg-gray-200 p-2  rounded m-1 ' key={i}>
          
          <h3><span className='text-red-400'>Name</span>: {user.username}</h3>
          <h3><span className='text-red-400'>Email</span> {user.email}</h3>
        </div>
          // <h3 key={i} className='bg-slate-200 p-1 rounded m-1'><span className='text-red-600'>Name</span>: {user.username}</h3>
          
      ))}
      </div>
     
    </div>
    
  ) 
}

export default Entry
