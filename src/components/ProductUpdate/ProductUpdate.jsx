/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductUpdate = () => {
    const updateProduct = useLoaderData()
    const {_id,brand,image,name,type,description,rating,price} = updateProduct|| {}
    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        
        const updatedBrand = {image,name,brand,type,price,description,rating} 
        console.log(updatedBrand)

        fetch(`http://localhost:5000/product/${_id}`,{
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedBrand)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success !',
                    text: 'User updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <div className='bg-[#1C2C68] shadow-md rounded-md'><Navbar></Navbar></div>
            <h2 className='text-4xl text-center mt-5 font-bold'>Product Update</h2>
            <div className="bg-[#1C2C68] w-[350px] md:w-[600px] mb-20 p-10 rounded-md flex  mx-auto justify-center mt-10">
            <form onSubmit={handleUpdate}>
                <p className="text-lg font-semibold text-white">Image</p>
                <input className="pl-2 py-2 w-[300px] md:w-[400px]  text-lg "required type="url" name="image" defaultValue={image} placeholder="Image" id="" />
                <br />
                <p className="text-lg font-semibold text-white">Name</p>
                <input  className="pl-2  py-2 w-[300px] md:w-[400px]" required type="text" name="name" defaultValue={name} placeholder="Name" />
                <br />
                <p className="text-lg font-semibold text-white">Brand Name</p>
                <input className="pl-2  py-2 w-[300px] md:w-[400px]"required type="text" name="brand" defaultValue={brand} placeholder="Brand Name"/>
                <br />
                <br />
                <label className="text-lg font-semibold text-white"  htmlFor="type">Choose Type: </label>
                <select className="text-lg font-medium " defaultValue={type} name="type" id="">

                    <option className="text-lg font-medium" value="laptop">Laptop</option>
                    <option className="text-lg font-medium " value="phone">Phone</option>
                    <option className="text-lg font-medium" value="laptop">Tablet</option>
                    <option className="text-lg font-medium" value="headphone">Headphone</option>
                </select>
                <br />
                <br />

                <p className="text-lg font-semibold text-white">Price</p>
                <input className="pl-2  py-2 w-[300px] md:w-[400px]"required type="text" name="price" defaultValue={price} placeholder="Price" id="" />
                <br />
                <p className="text-lg font-semibold text-white">Short description</p>
                  <input className="pl-2  py-2 w-[300px] md:w-[400px]"required type="text" name="description" defaultValue={description} placeholder="Short description" id="" />
                  <br />
                   <p className="text-lg font-semibold text-white">Rating</p>
                   <input className="pl-2  py-2 w-[300px] md:w-[400px]"required type="text" name="rating" defaultValue={rating} placeholder="Rating" id="" />
                   <br />
                   <button    className="btn w-[300px] mt-4 md:w-[400px]
                    bg-[#1C2C68] text-white  hover:text-black
                     text-lg font-semibold">Submit</button>

            </form>
        </div>
            
        </div>
    );
};

export default ProductUpdate;