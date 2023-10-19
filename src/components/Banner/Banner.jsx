/* eslint-disable no-unused-vars */
import React from 'react';
import css from './Banner.css'
import banner_image from '../../assets/backround_banner-removebg-preview.png'

const Banner = () => {
    return (
        <div >
            <div className=" mt-6">
            <div className=" flex justify-around items-center md:flex-row flex-col h-96">
                
                <div data-aos="fade-up"
                data-aos-duration="3000">
                {/* <h1 className="text-pink-300">Life is an event</h1> */}
                <p className="text-5xl font-bold text-white">FOX TECH
                    <br /> <span className='text-[#F18A20]'>UNLIMITED</span> <br /> </p>
                    <p className='text-white mt-2 text-xl'>If You Want Best Tech Gadget <br /> Than You Are In Right Place</p>
                <button className='text-[#F18A20] btn-outline btn mt-2'>Explore</button>
                
                </div>
                <div>
                <img src={banner_image}className=" h-[250px] w-[400px]" />
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;