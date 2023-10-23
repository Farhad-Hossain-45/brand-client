/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Cart from '../../components/Cart/Cart';
import EmptyCart from '../../components/EmptyCart/EmptyCart';

const MyCart = () => {
    const [carts,setCarts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/cart')
        .then(res=>res.json())
        .then(data => {
            setCarts(data)
        })
    },[])
    console.log(carts)
    return (
        <div>
            <div className='bg-[#1C2C68] shadow-md rounded-md'><Navbar></Navbar></div>
            
            {
                carts.length === 0 ? <EmptyCart></EmptyCart>: 
                <div>
                    {
                        carts.map(cart=> <Cart key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></Cart>)
                    }
                </div>
            }
        </div>
    );
};

export default MyCart;