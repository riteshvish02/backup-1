import React from 'react'
import css from "./style.module.css"
import "./style.css"
function App() {
  return (
    <div>
      <div className='w-full h-screen bg-slate-400 items-center flex justify-center flex-col'>
        <h1 className='text-4xl font-bold text-white'>Hello World!</h1>
        <h2 className={css.paracolor}>Ritesh</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, rem.</p>
      </div>
    </div>
  )
}

export default App
