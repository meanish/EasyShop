import React from "react";
import Navbar from "../Home/Navbar";
import Announce from "./Announcement";
import List from "../Home/List";
import Newletter from "../Home/Newletter";
import Footer from "../Home/Footer";

const Shop = () => {
  return (
    <>
      <Navbar />
      <Announce />
      <div className="heading my-10 px-12">
        <h1 className="text-3xl">Dresses</h1>
      </div>
      <div className="choose-options px-12 flex justify-between items-center mb-20">
        <div className="filter flex">
          <h1 className="font-bold text-xl">Filter Products:</h1>
          <select className="border-2 border-gray-300 mx-2 w-20">
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Blue</option>
            <option>Green</option>
            <option>Others</option>
          </select>
          <select className="border-2 border-gray-300 mx-2 w-20">
            <option disabled selected>
              Size
            </option>
            <option>Xs</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>Xl</option>
          </select>
        </div>
        <div className="sort flex">
          <h1 className="font-bold text-xl">Sort Products:</h1>
          <select className="border-2 border-gray-300 mx-2">
            <option disabled selected>
              Size
            </option>
            <option>Low to high</option>
            <option>High to low</option>
          </select>
        </div>
      </div>
      <List />
      <Newletter />
      <Footer />
    </>
  );
};

export default Shop;
