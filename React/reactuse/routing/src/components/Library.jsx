import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Library = () => {
  return (
    <div className='w-full h-screen flex-col gap-5 flex justify-center items-center bg-slate-300'>
      <h2 className='bg-red-300 px-2 py-2 rounded-md'>
        Library
      </h2>
      <div><h3 className='bg-gray-800 text-white px-2 py-2 rounded-md'>Books</h3></div>
      <div className='flex flex-col '>
        <Link to='/show/1'>book1</Link>
        <Link to='/show/2'>book2</Link>
        <Link to='/show/3'>book3</Link>
      </div>
    </div>
  )
}

export default Library
