/* eslint-disable no-unused-vars */
import React from 'react';
import { AiOutlineDesktop, AiOutlineLock, AiOutlineSetting } from "react-icons/ai";
import { BsFillDatabaseFill } from "react-icons/bs";
const Solution = () => {
    return (
        <div className='mt-10 '>
            <h2 className='text-center text-4xl font-bold'>Discover Our Solutions</h2>
            <div className='md:flex justify-center gap-20 '>
            <div className='mt-8'>
                <div className='flex gap-4 items-center'>
                    <div className='text-3xl rounded-full  hover:bg-blue-500 outline outline-blue-500 p-2'>
                        <AiOutlineDesktop></AiOutlineDesktop>
                    </div>
                    <div>
                        <h2 className='text-2xl font-medium'>Managed IT Infrastructure</h2>
                        <p className='mt-2'>Rest easy knowing our experts are protecting <br /> your infrastructure.</p>
                    </div>
                </div>
                
            </div>
            <div className='mt-8'>
                <div className='flex gap-4 items-center'>
                    <div className='text-3xl rounded-full  hover:bg-blue-500 outline outline-blue-500 p-2'>
                        <AiOutlineLock></AiOutlineLock>
                    </div>
                    <div>
                        <h2 className='text-2xl font-medium'>Cyber Security</h2>
                        <p className='mt-2'>Protect your network from the latest <br /> cyberthreats.</p>
                    </div>
                </div>
                
            </div>
            </div>
            <div className='md:flex justify-center gap-20'>
            <div className='mt-8'>
                <div className='flex gap-4 items-center'>
                    <div className='text-3xl rounded-full  hover:bg-blue-500 outline outline-blue-500 p-2'>
                        <BsFillDatabaseFill></BsFillDatabaseFill>
                    </div>
                    <div>
                        <h2 className='text-2xl font-medium'>Business Data Backup</h2>
                        <p className='mt-2'>Ensure your organization is always running <br />in a  timely manner.</p>
                    </div>
                </div>
                
            </div>
            <div className='mt-8'>
                <div className='flex gap-4 items-center'>
                    <div className='text-3xl rounded-full  hover:bg-blue-500 outline outline-blue-500 p-2'>
                        <AiOutlineSetting></AiOutlineSetting>
                    </div>
                    <div>
                        <h2 className='text-2xl font-medium'>Website Maintenance</h2>
                        <p className='mt-2'>Easy and convenient website hosting and <br /> maintenance.</p>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Solution;