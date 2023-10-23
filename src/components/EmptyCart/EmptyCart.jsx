/* eslint-disable no-unused-vars */
import React from 'react';
import photo from '../../assets/cart_image.svg'

const EmptyCart = () => {
    return (
        <div>
            <div className='flex justify-center mt-10'>
                <img className='h-[250px] w-[350px]' src={photo} alt="" />
            </div>
            
        </div>
    );
};

export default EmptyCart;