import React, { useContext } from "react";
import Navbar from "../Home/Navbar";
import Announce from "./Announcement";
import Newletter from "../Home/Newletter";
import Footer from "../Home/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ShopCart } from "../Context";

const Product = () => {
  const location = useLocation();
  const Val = location.state;
  const { img, decription, name, price } = Val;
  console.log(Val);

  const [order, setOrder] = useState(1);
  const [total, setTotal] = useState("");
  const [display, setDisplay] = useState(true);

  const { scart, setScart } = useContext(ShopCart);
  console.log(scart);

  const changeNumber = (order, operation) => {
    var nextValue = 0;
    operation === "add" ? (nextValue = order + 1) : (nextValue = order - 1);
    console.log(nextValue);
    const changeEvent = {
      target: {
        value: nextValue,
      },
    };
    priceCalc(changeEvent);
  };

  const priceCalc = (events) => {
    var num = events.target.value;
    setTotal(num * price);
    setOrder(num);
    setDisplay(false);
  };

  return (
    <>
      <Navbar />
      <Announce />
      <div className="product flex px-12 bg-black bg-opacity-5">
        <div className="product-name text-center flex items-center justify-center my-2 w-1/2">
          <div className="img-section w-3/4 h-full flex justify-center">
            <img src={img} alt="" className="" />
          </div>
        </div>
        <div className="product-mass w-1/2 leading-10 justify-center flex flex-col">
          <h1 className="text-4xl font-Right mb-1 text-red-400 capitalize">
            {name}
          </h1>
          <div className="product-description text-black">
            <p className="mx-auto pb-4 break-all ">{decription}</p>
          </div>
          <div className="size flex gap-4">
            <p>Size</p>
            <select className="border-2 border-gray-300 w-20">
              <option disabled>Size</option>
              <option>Xs</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>Xl</option>
            </select>
          </div>
          <div className="number my-5 flex gap-4 items-center">
            <div className="quantity">Quantity:</div>
            <div className="bg-gray-200 px-3">
              <button
                className="decrease cursor-pointer text-4xl"
                disabled={order <= 1}
                onClick={() => changeNumber(order, "sub")}
              >
                -
              </button>

              <input
                type="text"
                disabled
                className="w-7 text-center bg-gray-200 text-3xl text-blues font-extrabold"
                value={order}
                onChange={priceCalc}
              />

              <button
                disabled={order >= 8}
                onClick={() => changeNumber(order, "add")}
                className="increase text-3xl"
              >
                +
              </button>
            </div>
          </div>

          <div className="div flex gap-8 items-center  text-xl">
            <div className="pricing flex items-center">
              Price:
              <span className="text-4xl font-bold text-green-500">
                {" "}
                ${price}
              </span>
            </div>
            {!display ? (
              <div className="total ml-5 flex items-center">
                <span className="font-bold">Total</span>: $
                <span className="text-4xl font-bold text-green-500">
                  {total}
                </span>
              </div>
            ) : null}
          </div>

          <button
            className="cart  bg-blues text-white rounded px-1 font-3xl mt-3"
            onClick={() => setScart([...scart, Val])}
          >
            Add to cart
          </button>
        </div>
      </div>

      <Newletter />
      <Footer />
    </>
  );
};

export default Product;
