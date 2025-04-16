import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='w-full flex items-center justify-center gap-3 h-[8vh] bg-green-300'>
      <NavLink className={(e)=>console.log(e)}  to="/">Home</NavLink>
      <NavLink to="/entry">Entry</NavLink>
      <NavLink to="/show">Library</NavLink>
    </div>
  )
}

export default Nav
