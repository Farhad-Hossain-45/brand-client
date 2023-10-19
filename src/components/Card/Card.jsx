/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Card = ({card}) => {
    const {id,brand_image,brand_name} = card || {}
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl h-[300px] md:w-[370px] w-full">
        <figure className="">
          <img
            src={brand_image}
            alt="event"
            className="rounded-xl w-full h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">{brand_name}</h2>
          
        </div>
      </div>
        </div>
    );
};

export default Card;