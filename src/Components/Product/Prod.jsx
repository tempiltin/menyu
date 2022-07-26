import React, { useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import Card from "../Card/Card";
import "./swiper.css";
import axios from "axios";
import { useEffect } from "react";
// const { getData } = require("../../db/db");
// const foods = getData();


function Prod({ onAdd, onRemove }) {


    const [data, setData] = useState([]);

    useEffect(() => {
        allFood()
    }, [])
   
     const urlApi = 'https://stratappresturant.herokuapp.com/api/v1/org/1/getHomeDetail/';

    const allFood = async () => {
        const response = await axios.get(`${urlApi}`)
        const data = response.data
        setData(data)
        console.log(data.category);
    }

    return (
        <div className='container'>
            <h1>{data.organizatsion}</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                       

                       {
                        data.category.map((item , index)=>{
                            return(
                                <h1>{item.name}</h1>
                            )
                        })
                       }
                  
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Prod;