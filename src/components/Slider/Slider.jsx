/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import slider_1 from '../../assets/slider_1.jpg'
import slider_2 from '../../assets/slider_2.5.jpg'
import slider_3 from '../../assets/slider_3.jpeg'

const Slider = () => {
    return (
        <div>
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={slider_1} alt="" className='w-full h-[350px]'/></SwiperSlide>
      <SwiperSlide><img src={slider_2} alt="" className='w-full h-[350px]' /></SwiperSlide>
      <SwiperSlide><img src={slider_3} alt="" className='w-full h-[350px]'/></SwiperSlide>
      
      
    </Swiper>
        </div>
    );
};

export default Slider;