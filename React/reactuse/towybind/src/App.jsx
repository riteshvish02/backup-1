import React from 'react'
import { useState } from 'react'

function App() {
  const [graduated,setgraduated] = useState(false)
  const [gender,setgender] = useState("male")
  const [option,setoption]  = useState("option 2")
  const [caption,setcaption]  = useState("write caption")
  
  const handler = (e)=>{
     console.log(graduated,gender,option,caption);
 }
  return (
    <div className='p-10'>
      <form className='flex flex-col gap-1 items-start' action="" onSubmit={handler}>
        <input type="radio" name='rv' defaultValue="male" checked={gender == "male"?true:false} onChange={(e)=>setgender(e.target.value)} />male
        <input type="radio" name='rv' defaultValue="female" checked={gender == "female"?true:false}  onChange={(e)=>setgender(e.target.value)} />female
        <input type="checkbox" onChange={(e)=>setgraduated(e.target.checked)} checked={graduated}/>graduated
        <select className='w-24 h-fit bg-slate-400 text-black' value={option} onChange={(e)=>setoption(e.target.value)} >
          <option value="option 1">option1</option>
          <option value="option 2">option2</option>   
          <option value="3">option3</option>
        </select>
        <textarea className='bg-slate-300 rounded-md p-3 text-gray-500'value={caption} onChange={(e)=>setcaption(e.target.value)} name="" id="" cols="30" rows="5"></textarea>
        <button className='px-2 py-1 bg-blue-300 rounded' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
