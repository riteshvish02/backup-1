import React from 'react'

function Input(props) {
    console.log(props);
    const {type,placeholder,value,name} = props
  return (
    <div>
      <input className='m-3 p-2 bg-slate-200' type={type} placeholder={placeholder}    name={name}  />
    </div>
  )
}

export default Input
