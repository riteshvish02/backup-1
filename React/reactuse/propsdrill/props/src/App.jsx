import React, { useRef } from 'react'
import Child from './components/Child'
import Input from './components/Input'
function App() {
  const showErr = useRef()
  const changeHandler = ()=>{
    let inp = showErr.current
    if(inp.value.length < 5 ){
      inp.style.color = 'red'
      inp.style.outline = '1px solid red'
    }else{
      inp.style.color = 'black'
      inp.style.outline = '1px solid black'
    }
  }
  return (
    <div>
      <Input type="text" placeholder="Enter fullname" value=''  name=''></Input>
      <Child info="hello">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ullam.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe rem dolorem quis ad, animi explicabo a aut recusandae provident similique nisi, excepturi exercitationem aperiam sunt voluptatum, deleniti consequuntur. Deleniti, excepturi!
        </p>
      </Child>
      <div>
        <input className='border-rounded p-1 px-2 m-6' ref={showErr} onChange={changeHandler} placeholder='Name' type="text" />
      </div>
    </div>
  )
}

export default App
