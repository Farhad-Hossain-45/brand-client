/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Brand from '../Brand/Brand';
import Slider from '../Slider/Slider';
import NoData from '../NoData/NoData';


const Details = ({card}) => {
    const {id,brand_name} = card || {}
    const [data,setData] = useState([])
    const [filter,setFilter] = useState([])
    useEffect(()=>{
        fetch('https://tenth-assignment-server-k8jk1hfsq.vercel.app/product')
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
            
            <Slider></Slider>
           {
                filter.length === 0 ? <NoData></NoData> : 
           <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
           {
                filter.map(product => <Brand key={product._id} product={product}></Brand>)
                
            }
           </div>
           }


        </div>
    );
};

export default Details;