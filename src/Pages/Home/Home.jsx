/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import ExtraSection from '../../components/ExtraSection/ExtraSection';


const Home = () => {
    return (
        <div >
            
            <div id='bg-img' className='h-[500px]'>
            <Navbar></Navbar>
            <Banner></Banner>
            </div>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;