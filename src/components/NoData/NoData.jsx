/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../../assets/no_data.png'

const NoData = () => {
    return (
        <div>
            <div className='flex justify-center mt-10'>
                <img className='h-[250px] w-[350px]' src={image} alt="" />
            </div>
            <h2 className='text-3xl font-bold text-center'>There is no data!!!</h2>
        </div>
    );
};

export default NoData;