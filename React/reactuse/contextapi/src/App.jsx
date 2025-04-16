import React, { useContext } from 'react'
import { userContext } from './contexts/Context';

function App() {
  const [user,setuser] = useContext(userContext)
  let index = false;

  return (
    <div>
      <h2 onClick={()=>{}} className='m-5 text-white bg-black inline-block px-2 py-2 rounded-[5px]'>{user}</h2>
    </div>
  )
}

export default App
