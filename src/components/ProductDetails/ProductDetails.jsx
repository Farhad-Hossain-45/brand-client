/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Rating } from "@mui/material";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const detailsProduct = useLoaderData();
  const { _id, brand, image, name, type, description, rating, price } =
    detailsProduct || {};
  const { user } = useContext(AuthContext);

  const userEmail = user.email;
  console.log(userEmail);
  
  // console.log(detailsProduct);
  const addToProduct = { brand, name, price, image, userEmail };
  const handelAddToCart = (id) => {
    fetch("https://tenth-assignment-server-k8jk1hfsq.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success !',
                text: 'Product added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      });
  };
  return (
    <div>
      <div className="bg-[#1C2C68] shadow-md rounded-md">
        <Navbar></Navbar>
      </div>

      <div className="card card-side bg-base-100 shadow-xl md:flex-row flex-col mt-10">
        <figure>
          <img src={image} className="w-[350px] h-[400px]" alt="Brand" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p className="text-xl font-semibold">Price: ${price}</p>
          <p className="text-xl font-semibold">Product Rating:</p>
          <p>
            <Rating name="size-medium" defaultValue={rating} readOnly />{" "}
            <span className="text-2xl">({rating})</span>
          </p>
          <p className="text-xl font-semibold">Brand Name: {brand}</p>

          <div className="card-actions justify-center">
            <button
              onClick={() => handelAddToCart(_id)}
              className="btn outline bg-[#1C2C68] text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
