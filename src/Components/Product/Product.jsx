
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css"
import img from "../../images/food-sutherland-foodservice-12.png"

const Product = () => {

    let dev = 98787987887875465454654657898787998797978
 const idRandom =   Math.floor((Math.random() * dev) + 1);
    const Data = [
        {
            name:"shurva",
            img:img,
            price:30000,
            id:idRandom,
        },
        {
            name:"shurva",
            img:img,
            price:30000,
            id:idRandom,
        },
        {
            name:"shurva",
            img:img,
            price:30000,
            id:idRandom,
        },
        {
            name:"shurva",
            img:img,
            price:30000,
            id:idRandom,
        },
        {
            name:"shurva",
            img:img,
            price:30000,
            id:idRandom,
        },
    ]
    console.log(Data);
    return (
        <div className='container'>
            <h1>Food Menu</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="category">
                            <h2>Yengil Taomlar</h2>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}

                                className="mySwiper"
                            >
                                {
                                    Data.map(({img , name , price ,id},index) => (

                                        <SwiperSlide key={index}>
                                            <img src={img} alt="logo" />
                                             <h3>{name}</h3>
                                             <h4>{price}</h4>
                                             <div className="butdiv">
                                             <button>+</button>
                                             <button>-</button>
                                             </div>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                        <div className="category">
                            <h2>Yengil Taomlar</h2>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}

                                className="mySwiper"
                            >
                                {
                                    Data.map(({img , name , price ,id},index) => (

                                        <SwiperSlide key={index}>
                                            <img src={img} alt="logo" />
                                             <h3>{name}</h3>
                                             <h4>{price}</h4>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                        <div className="category">
                            <h2>Yengil Taomlar</h2>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}

                                className="mySwiper"
                            >
                                {
                                    Data.map(({img , name , price ,id},index) => (

                                        <SwiperSlide key={index}>
                                            <img src={img} alt="logo" />
                                             <h3>{name}</h3>
                                             <h4>{price}</h4>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                        <div className="category">
                            <h2>Yengil Taomlar</h2>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}

                                className="mySwiper"
                            >
                                {
                                    Data.map(({img , name , price ,id},index) => (

                                        <SwiperSlide key={index}>
                                            <img src={img} alt="logo" />
                                             <h3>{name}</h3>
                                             <h4>{price}</h4>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                        <div className="category">
                            <h2>Yengil Taomlar</h2>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}

                                className="mySwiper"
                            >
                                {
                                    Data.map(({img , name , price ,id},index) => (

                                        <SwiperSlide key={index}>
                                            <img src={img} alt="logo" />
                                             <h3>{name}</h3>
                                             <h4>{price}</h4>
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