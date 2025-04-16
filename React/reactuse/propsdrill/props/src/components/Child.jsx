import React from 'react'

function Child(props) {
    var a = props.children[0].props.children.toUpperCase()
    
  return (
    <div>
     <div className='bg-red-300'>
        {a}
     </div>
    </div>
  )
}

export default Child
