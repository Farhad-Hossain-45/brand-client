/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Brand from '../Brand/Brand';

const Details = ({card}) => {
    const {id,brand_name} = card || {}
    const [data,setData] = useState([])
    const [filter,setFilter] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => {
            setData(data)

        })
        
    },[])
    useEffect(()=>{
        const filterData = data.filter(brand => brand.brand == brand_name)
        setFilter(filterData)
    },[brand_name, data])
   console.log(filter)
    console.log(data)
    
    return (
        <div>
            <div className='bg-[#1C2C68] shadow-md rounded-md'><Navbar></Navbar></div>
            
            
            {
                filter.map(product => <Brand key={product._id} product={product}></Brand>)
                
            }


        </div>
    );
};

export default Details;