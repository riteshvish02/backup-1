import React, { createContext, useState } from 'react'
export const userContext = createContext()
function Context(props) {
    const [name,setname] = useState("Ritesh")
  return (
   <userContext.Provider value={[name,setname]}>
    {props.children}
   </userContext.Provider> 
  )
}

export default Context
