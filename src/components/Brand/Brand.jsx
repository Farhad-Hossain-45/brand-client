/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import { Rating } from '@mui/material';

import { Link } from 'react-router-dom';


const Brand = ({product}) => {
    const {_id,brand,image,name,type,description,rating,price} = product || {}
    return (
        <div>
           
            <div className="card bg-base-100 shadow-xl h-[500px] mt-10">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    
                    <Rating name="size-medium" defaultValue={rating} readOnly/>
                    <p> Price: ${price}</p>
                   <div className='flex justify-between gap-10 mt-2'>
                    <div>
                        <Link to={`/productdetails/${_id}`}><button className='btn outline'>Details</button></Link>
                    </div>
                    <div>
                        <Link to={`/updateProduct/${_id}`}>
                            <button className='btn outline'>Update</button>
                        </Link>
                    </div>
                   </div>
                </div>
                </div>
        </div>
    );
};

export default Brand;