import { useState } from 'react'

import Bottom1 from '../Components/NavigationBottom/Bottom1';

import Product from "../Components/Product/Product";
import Number from "../Components/Number/Number";
import Cart from '../Components/Cart/Cart';

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

  const [cartItems,setCartItems] = useState([])
  return (
    <header>
      <div className={orderright ? "orderRight mainorder " : "orderRightFalse mainorder"}>
        <div className="container">
          <Cart cartItems/>
          <div className="bottomFixed">
            <button className="btnorder_primary">Tasdiqlash</button>
            <button className="btnorder" onClick={prev}>Ortga</button>
          </div>
        </div>
      </div>
      <Number value={12}/>
          <Product />
      <Bottom1 title={'korzina'} func={orderClick} />
    </header>
  )
}

export default Home