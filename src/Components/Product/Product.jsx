
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Card from "../Card/Card";
import "./swiper.css"


const {getData} = require("../../db/db")

const foods = getData();
function Product () {

    

    return (
        <div className='container'>
            <h1>Food Menu</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        
                          
                      
                        <div className="category mt-5">
                            <h2>Yengil Taomlar</h2>
                            <Swiper  slidesPerView={1.5} spaceBetween={30}  pagination={{
                                    clickable: true,
                                }} className="mySwiper"
                            >
                                {
                                    foods.map((food)=>{
                                        return (
                                            <SwiperSlide key={food.id}>
                                                <Card food={food} />
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