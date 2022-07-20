import React from 'react'

const Order = (props) => {
  return (
   <div  className={props.orderright ? "orderRight " : "orderRightFals"}>
      <div className="mycontainer">
       <h1>salom</h1>
      </div>
   </div>
  )
}

export default Order