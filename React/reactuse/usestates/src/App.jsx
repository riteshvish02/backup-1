import React, { useState } from 'react'

function App() {
  const [val,setval] = useState(
   [
    {name:"Breakfast",completed:false},
    {name:"lunch",completed:false},
    {name:"brunch",completed:false},
    {name:"dinner",completed:false}
   ]
  )
  const [opt,setopt] = useState("option 2")
  const [text,settext] = useState("")
  return (
    <div>
     <div className='w-full h-screen bg-slate-200 p-10'>
     
     <ul >
      {val.map((item,index)=>{
          return <li className={` ${item.completed ? "text-green-300": "text-red-600"}`} key={index}>{item.name}</li>
      })
      }
     </ul>
     <form action="" className='w-[40vh] h-fit' onSubmit={}>
       <div className='flex gap-2'>
        <input className='rounded' type="text" value={text} onChange={(e)=>settext(e.target.value)}/>
        <select value={opt} onChange={(e)=>setopt(e.target.value)}>
        <option value="option 1" >complete</option>
        <option value="option 2">no</option>
      </select>
       </div>
      <input className='mt-1 px-2 py-1 bg-red-500 rounded' type="submit" />
      
     </form>
     </div>
    </div>
  )
}

export default App
