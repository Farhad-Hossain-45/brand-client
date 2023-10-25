/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Swal from 'sweetalert2';

const Cart = ({cart,carts,setCarts}) => {
    const {_id,brand,name,price,image} = cart || {}
    const handelDeleteBtn= (id)=>{
      // console.log(id)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          
          fetch(`https://tenth-assignment-server-800sj5qtn.vercel.app/cart/${id}`,{
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
              Swal.fire(
            'Deleted!',
            'Your cart has been deleted.',
            'success'
          )
            const remaining = carts.filter(cart => cart._id !== id)
            setCarts(remaining)
            }
          })
        }
      })
    } 
    return (
        <div className='md:w-2/3 w-full h-[250px] mt-7'>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={image} className='w-[150px] h-[150px]' alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-[#1C2C68]">{brand}</h2>
    <p>{name}</p>
    <p className='text-xl font-semibold'> Price: ${price}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handelDeleteBtn(_id)} className="btn outline bg-[#1C2C68] text-white">X</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;