/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';

const MyCart = () => {
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/cart')
        .then(res=>res.json())
        .then(data => {
            setCart(data)
        })
    },[])
    console.log(cart)
    return (
        <div>
            <div className='bg-[#1C2C68] shadow-md rounded-md'><Navbar></Navbar></div>
            <h2>this is my card page</h2>
            {/* ekhaner kaj baki (myCart) */}
        </div>
    );
};

export default MyCart;