import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Card from "../Card/Card";
import "./swiper.css";
import axios from "axios";
import { useEffect } from "react";
const { getData } = require("../../db/db");
const foods = getData();
function Product({ onAdd, onRemove }) {


    const [data, setData] = useState([]);

    useEffect(() => {
        allFood()
    }, [])
    const allFood = async () => {
        const response = await axios.get(`https://stratappresturant.herokuapp.com/api/v1/org/1/getHomeDetail/`)
        const data = response.data
        setData(data)
    }
    // console.log(data.organizatsion);
    // console.log(data.organizatsion);`




    
    return (
        <div className='container'>
            <h1>Food Menu</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="category mt-5">
                            <h2>Yengil Taomlar</h2>
                            <Swiper slidesPerView={2} spaceBetween={30} pagination={{
                                clickable: true,
                            }} className="mySwiper"
                            >
                                {
                                    foods.map((food) => {
                                        return (
                                            <SwiperSlide key={food.id}>
                                                <Card food={food} onAdd={onAdd} onRemove={onRemove} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;