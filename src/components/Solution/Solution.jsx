/* eslint-disable no-unused-vars */
import React from 'react';
import image1 from '../../assets/Google Pixel 5.png'
import image2 from '../../assets/OnePlus Bullets Wireless Z2.jpg'
import image3 from '../../assets/OPPO Reno8 T.png'
import image4 from '../../assets/Samsung Galaxy A52.webp'
import image5 from '../../assets/Sony Xperia 5.jpg'
import image6 from '../../assets/MacBook Pro - Apple.jfif'

const Solution = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-5'>Our Top Rated Product</h2>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-8'>
            <div className="card  bg-base-100 shadow-xl h-[300px] md:w-[370px] w-full">
        <figure className="">
          <img
            src={image1}
            alt="event"
            className="rounded-xl w-full h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">Google Pixel 5</h2>
          
        </div>
      </div>
            <div className="card  bg-base-100 shadow-xl h-[300px] md:w-[370px] w-full">
        <figure className="">
          <img
            src={image2}
            alt="event"
            className="rounded-xl w-full h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">OnePlus Bullets Wireless Z2</h2>
          
        </div>
      </div>
            <div className="card  bg-base-100 shadow-xl h-[300px] md:w-[370px] w-full">
        <figure className="">
          <img
            src={image3}
            alt="event"
            className="rounded-xl w-full h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">Oppo Reno8 T</h2>
          
        </div>
      </div>
            <div className="card  bg-base-100 shadow-xl h-[300px] md:w-[370px] w-full">
        <figure className="">
          <img
            src={image4}
            alt="event"
            className="rounded-xl w-full h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">Samsung Galaxy A52</h2>
          
        </div>
      </div>
            <div className="card  bg-base-100 shadow-xl h-[300px] md:w-[370px] w-full">
        <figure className="">
          <img
            src={image5}
            alt="event"
            className="rounded-xl w-full h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">Sony Xperia 5</h2>
          
        </div>
      </div>
            <div className="card  bg-base-100 shadow-xl h-[300px] md:w-[370px] w-full">
        <figure className="">
          <img
            src={image6}
            alt="event"
            className="rounded-xl w-full h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">MacBook Pro - Apple</h2>
          
        </div>
      </div>
        </div>
        </div>
    );
};

export default Solution;