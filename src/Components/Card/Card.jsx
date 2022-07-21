import React from 'react'

import { useState } from 'react';
import Button from '../Button/Button';

function Card({food}) {
    const [count , setCount] = useState(0)
    const {title, image,price} = food


    const countplus = () =>{
        setCount(count+1)
    }
    const countminus = () =>{
        setCount(count-1)
    }
    return (
        <div className='cardt'>
          
          <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"
                }`}  >{count}</span>
                <div className="image__container">
                    <img src={image} alt={title} />
                </div>
                <h4 className="card__title">{title} . <span className="card__price">{price}</span></h4>
                <div className="btn-container">
                    <Button title={"+"}  type={"add"} onClick={countplus}  />

                       {count !==0 ? (
                            <Button title={"-"} type={'remove'} onClick={countminus} />
                       ): (
                        ""
                        )}

                </div>
        </div>
    )
}

export default Card