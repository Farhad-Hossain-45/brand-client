/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards,setCards] = useState([])
    useEffect(()=>{
        fetch('https://tenth-assignment-server-k8jk1hfsq.vercel.app/brands')
        .then(res=> res.json())
        .then(data => setCards(data))
    },[])
    // console.log(cards)
    return (
        <div className='mt-10'>
           <h2 className='text-4xl text-center font-bold'>Renowned Brand</h2>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
           </div>
        </div>
    );
};

export default Cards;