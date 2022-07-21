
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css"
import img from "../../images/food-sutherland-foodservice-12.png"

const Product = () => {

    let dev = 98787987887875465454654657898787998797978
    const idRandom = Math.floor((Math.random() * dev) + 1);
    const Data = [
        {
            name: "shurva",
            img: img,
            price: 30000,
            id: idRandom,
        },
        {
            name: "shurva",
            img: img,
            price: 30000,
            id: idRandom,
        },
        {
            name: "shurva",
            img: img,
            price: 30000,
            id: idRandom,
        },
        {
            name: "shurva",
            img: img,
            price: 30000,
            id: idRandom,
        },
        {
            name: "shurva",
            img: img,
            price: 30000,
            id: idRandom,
        },
    ]
    console.log(Data);


    const [count, setCount] = useState(0);


    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div className='container'>
            <h1>Food Menu</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="category mt-5">
                            <h2>Yengil Taomlar</h2>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}

                                className="mySwiper"
                            >
                                {
                                    Data.map(({ img, name, price, id }, index) => (

                                        <SwiperSlide className="apiclass" key={index}>
                                            <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"
                                                }`}  >{count}</span>
                                            <img src={img} alt="logo" />
                                            <div className="d-flex ">
                                            <h3>{name}</h3>
                                            <h3 className="h4">{price}</h3>
                                            </div>
                                            <div className="butdiv">
                                                <button className="btn" onClick={handleIncrement}>+</button>
                                                {count !== 0 ? (
                                                    <button className="btn" onClick={handleDecrement}>-</button>
                                                ) : (
                                                    ""
                                                )}

                                            </div>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product