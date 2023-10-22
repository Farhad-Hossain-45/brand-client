/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ProductDetails = () => {
    const detailsProduct = useLoaderData()
    const {user} = useContext(AuthContext)
    
    const userEmail = user.email
    console.log(userEmail)
    const {_id,brand,image,name,type,description,rating,price} = detailsProduct || {}
    console.log(detailsProduct)
    const addToProduct = {brand,name,price,image,userEmail}
    const handelAddToCart = (id)=>{
        fetch('http://localhost:5000/cart',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addToProduct)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)

        })
    }
    return (
        <div>
            <div className='bg-[#1C2C68] shadow-md rounded-md'><Navbar></Navbar></div>
            {/* ekhaner kaj baki (details) */}
            <h2>{name}</h2>
            <button onClick={()=>handelAddToCart(_id)} className='btn'>Add To Cart</button>
        </div>
    );
};

export default ProductDetails;