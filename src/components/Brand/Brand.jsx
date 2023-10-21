/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Brand = ({product}) => {
    const {_id,brand,image} = product || {}
    return (
        <div>
            <h2>brand name: {brand}</h2>
            <img src={image} alt="" />
        </div>
    );
};

export default Brand;