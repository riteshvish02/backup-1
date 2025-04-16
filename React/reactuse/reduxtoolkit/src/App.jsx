import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment,decrement,asyncincrement } from './store/actions/counteraction';
function App() { 
  const {value} = useSelector(state => state.counterSlice)
  const dispatch = useDispatch()
  console.log(value);
  const incrementHandler = ()=>{
    dispatch(increment(value + 1))
  }
  const decrementHandler = ()=>{
    dispatch(decrement(value - 1))
  }
  
  return (

    <>
      <div className='w-full h-screen flex flex-col items-center pt-[20vh]'>
        <h2 >{value}</h2>
        <button onClick={incrementHandler} className='px-2 py-2 bg-red-400 rounded'>increment by 1</button>
        <button onClick={decrementHandler} className='px-2 py-2 bg-red-400 mt-2 rounded'>decrement by 1</button>
        <button onClick={()=>dispatch(asyncincrement(2))} className='px-2 py-2 bg-red-400 mt-2 rounded'>decrement by 1</button>
      </div>
     
    </>
  )
}

export default App
