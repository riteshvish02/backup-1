import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteuser } from '../store/reducer/Userslice';
import { useNavigate } from 'react-router-dom';

function Show() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {value} = useSelector(state => state.counter)
    console.log(value);
    const deleteHandler = (i) => {
        dispatch(deleteuser(i))
        // navigate('/register')
    }
  return value && (
   <>
     {value.map((item,index)=>(
       <div key={index}>
            <div>{item.name}</div>
          <div>{item.email}</div>
          <div>{item.contact}</div>
          <button onClick={()=>deleteHandler(index)}>
              deleteUSER
          </button>
      </div>
     ))}
   </>
    
  )
}

export default Show
