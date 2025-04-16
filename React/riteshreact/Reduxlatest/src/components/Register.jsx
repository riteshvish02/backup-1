import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import {create} from '../store/reducer/Userslice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [contact,setcontact] = useState("")
    const handleform = (e)=>{
        e.preventDefault()
        const user = {
            id:nanoid(),
            name:name,
            email:email,
            contact:contact
        }

        dispatch(create(user))
        navigate('/show')
        console.log(name,email,contact);
    }
  return (
    <div>
      <form onSubmit={handleform} action="">
        <input onChange={(e)=>setname(e.target.value)} value={name} type="name" placeholder='name' />
        <input onChange={(e)=>setemail(e.target.value)} value={email} type="text" placeholder='email' />
        <input onChange={(e)=>setcontact(e.target.value)} type="text" placeholder='contact' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Register
