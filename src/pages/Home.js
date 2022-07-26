import { useState } from 'react'

import Bottom1 from '../Components/NavigationBottom/Bottom1';

// import Product from "../Components/Product/Product";
import Number from "../Components/Number/Number";
import Cart from '../Components/Cart/Cart';
import Prod from '../Components/Product/Prod';

const Home = (props) => {


  // const cart = {
  //   "order_id": null,
  //   "table_num": 2,
  //   "people_number":4,
  //   "paymant":3,
  //   "product":[
  //     {
  //       "product_id":1,
  //       "product_amount_id":1,
  //       "amount":2

  //     }
  //   ]
  // }

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

  const [cartItems,setCartItems] = useState([]);

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
        setCartItems(
            cartItems.map((x) =>
                x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
            )
        );
    } else {
        setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
    // console.log(food);
}



const onRemove = (food) => {
  const exist = cartItems.find((x) => x.id === food.id);
  if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
  } else {
      setCartItems(
          cartItems.map((x) =>
              x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
          )
      );
  }
};
  return (
    <header>
      <div className={orderright ? "orderRight mainorder " : "orderRightFalse mainorder"}>
        <div className="container">
          <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
          <div className="bottomFixed">
            {/* <Button className="btnorder_primary" onClick={onAdd}/> */}
            <button className="btnorder" onClick={onRemove}>bekor..</button>
            <button className="btnorder" onClick={prev}>Ortga</button>
          </div>
        </div>
      </div>
      <Number value={12}/>
          {/* <Product onAdd={onAdd} onRemove={onRemove}/> */}
          <Prod onAdd={onAdd} onRemove={onRemove}/>
      <Bottom1 title={'korzina'} func={orderClick} />
    </header>
  )
}

export default Home;