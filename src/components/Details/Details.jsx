/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Brand from "../Brand/Brand";
import Slider from "../Slider/Slider";
import NoData from "../NoData/NoData";

const Details = ({ card }) => {
  const [loading, setLoading] = useState(true);
  const { id, brand_name } = card || {};
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    fetch("https://tenth-assignment-server-800sj5qtn.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    const filterData = data.filter((brand) => brand.brand == brand_name);
    setFilter(filterData);
  }, [brand_name, data]);
  console.log(filter);
  console.log(data);

  return (
    <div>
      <div className="bg-[#1C2C68] shadow-md rounded-md">
        <Navbar></Navbar>
      </div>

      <Slider></Slider>
      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <span className="loading loading-spinner loading-lg"></span>{" "}
        </div>
      ) : filter.length === 0 ? (
        <NoData></NoData>
      ) : (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          {filter.map((product) => (
            <Brand key={product._id} product={product}></Brand>
          ))}
        </div>
      )}
    </div>
  );
};

export default Details;
