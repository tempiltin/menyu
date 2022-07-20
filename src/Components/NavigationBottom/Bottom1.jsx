import React from 'react'

const Bottom1 = (props) => {
  return (
   
      <button className='bottomClass' onClick={props.func}>
        {props.title}
      </button>
  
  )
}

export default Bottom1