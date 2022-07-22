import React from 'react'
import Button from '../Button/Button';


function Cart({ cartItems, onAdd }) {

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  return (
    <div className="cart__container">
      <h3>{
        cartItems.length === 0 ? "Sizda Savatcha bo'sh" : ""
      }</h3>
      <br />
      <span className=''> Jami to'lov : {totalPrice.toFixed(2)} so'm</span>

      <Button 
      title={`${cartItems.length === 0 ? "Order !" : "Checkout"}`}
      type={"checkout"}
      disable={cartItems.length === 0 ? true : false}
      />
    </div>
  )
}

export default Cart;