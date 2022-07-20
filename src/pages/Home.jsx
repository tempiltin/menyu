// import { useState } from 'react'
import React from "react"
import Bottom1 from '../Components/NavigationBottom/Bottom1';

import { useState } from 'react';

const Home = (props) => {


  const [orderright, setOrderRight] = useState(false)
  const orderClick = (e) => {
    e.preventDefault();
    if (orderright) {
      setOrderRight(false);
    } else {
      setOrderRight(true);
    }
  };
  const prev = (e)=>{
    e.preventDefault();
    if (orderright) {
      setOrderRight(false);
    } else {
      setOrderRight(true);
    }
  }
  return (
    <header>

     
      <div className={orderright ? "orderRight mainorder " : "orderRightFalse mainorder"}>
        <div className="mycontainer">
        <h1>salom</h1>
         
          <div className="bottomFixed">
            <button className="btnorder_primary">Tasdiqlash</button>
            <button className="btnorder" onClick={prev}>Ortga</button>
          </div>
        </div>
      </div>
      <Bottom1 title={'korzina'} func={orderClick} />
    </header>
  )
}

export default Home