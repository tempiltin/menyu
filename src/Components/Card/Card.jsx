import React, { useState } from "react";

import img from '../../images/food-sutherland-foodservice-12.png'
import Button from "../Button/Button";
function Card({ food, onAdd, onRemove, item }) {
  const [count, setCount] = useState(0);




  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food);
  };

  return (

    <div className="cardt">
      <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>{count}</span>
      <div className="image__container"><img src={img} alt={"images"} /></div>
      <h4 className="card__title">{item.name}:<span className="card__price">{item.price} so'm</span></h4>
      <p className="param">{item.description} </p>
      
      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count!== 0?(<Button title={"-"} type={"remove"} onClick={handleDecrement} />):("")}
      </div>
    </div>

  );
}

export default Card;
