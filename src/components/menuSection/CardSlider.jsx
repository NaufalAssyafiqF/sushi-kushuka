import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide,} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { CardData } from "/src/data/data.js";
import Delivery from "/src/assets/fast-delivery.png"

register();


function CardSlider() {
    return (
        <div className="md:w-full ">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[FreeMode, Pagination]}
                className="md:w-full"
            >
                {CardData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="min-w-[250px] md:h-[300px] h-[450px] flex bg-[#f5be97] rounded-lg shadow-lg m-2">
                            <div className=" py-3 px-7">
                                <div className='md:h-[120px] md:w-[190px] h-[200px] w-[300px] rounded-lg border-2 border-white overflow-hidden'>
                                    <img src={item.image} alt="" className="w-full h-full bg-cover bg-center" />
                                </div>

                                <h4 className="md:text-lg text-2xl font-bold mt-2">{item.namaMenu}</h4>
                                <button className="bg-white px-5 py-1 rounded-full mt-1 hover:bg-primary md:text-base text-lg font-semibold">Pesan</button>
                                <div className="w-full flex justify-between text-center mt-5">
                                    <div className="w-1/3 border-r-2 border-black">
                                        <i className="fi fi-ss-star md:text-[20px] text-[40px] w-full"></i>
                                        <p className='md:text-lg md:font-semibold text-2xl font-bold'>{item.bintang}</p>
                                    </div>
                                    <div className="w-1/3 border-r-2 border-black">
                                        <i className="fi fi-sr-usd-circle md:text-[20px] text-[40px]"></i>
                                        <p className='md:text-lg md:font-semibold text-2xl font-bold'>{item.harga}</p>
                                    </div>
                                    <div className="w-1/3">
                                        <img src={Delivery} alt="delivery" className="md:w-[27px] w-[49px] mx-auto mb-1" />
                                        <p className='md:text-lg md:font-semibold text-2xl font-bold md:mt-0 mt-2'>{item.delivery}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    )
}

export default CardSlider