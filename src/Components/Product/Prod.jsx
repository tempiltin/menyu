import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import Card from "../Card/Card";
import "./swiper.css";
import axios from "axios";
import { useEffect } from "react";
import Card from "../Card/Card";
// const { getData } = require("../../db/db");
// const foods = getData();

function Prod({ onAdd, onRemove }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        allFood();
    }, []);

    const urlApi =
        "https://stratappresturant.herokuapp.com/api/v1/org/1/getHomeDetail/";

    const allFood = async () => {
        const response = await axios.get(`${urlApi}`);
        const data = response.data;
        setData(data);
    };

    //   console.log(window.innerWidth);

    return (
        <div className="container">
            <h1>{data.organizatsion}</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        {data.category
                            ? data.category.map(
                                (key,index) => (

                                    <div key={index}>

                                        <h2 className="cartegory_name" >{key.name} </h2>
                                        <Swiper className="mySwiper" 
                                        slidesPerView={2.5}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={{
                                          clickable: true,
                                        }}
                                        >

                                            {key.product.map((item, index2) => (
                                               <SwiperSlide key={index2}>

                                                   <Card  item={item} onAdd={onAdd} onRemove={onRemove} />
                                               </SwiperSlide>
                                               
                                            ))}

                                        </Swiper>



                                    </div>
                                )
                            )
                            : ""}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Prod;
