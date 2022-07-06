import React, { useContext, useState, useEffect } from "react";
import { ShopCart } from "../Context";
import { NavLink } from "react-router-dom";

const ShoppCart = () => {
  const [total, setTotal] = useState("");

  const { scart} = useContext(ShopCart);
  console.log(scart);

  useEffect(() => {
    setTotal(scart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [scart]);

  console.log(`${total}`);

  return (
    <>
      <div className="bg-blues min-h-screen py-10 border ">
        {scart.length !== 0 ? (
          <div>
            <p className="text-center font-bold text-5xl mb-20 pt-5">
              Shopping Cart
            </p>
            <p className="text-white text-2xl w-2/3 m-auto">
              Total Price: ${total}
            </p>
            ;
          </div>
        ) : null}

        {scart.length !== 0 ? (
          scart.map((prod) => {
            const { img, id, name, price } = prod;
            console.log("2");

            return (
              <>
                <li
                  key={id}
                  className="flex justify-between mb-4 items-center bg-gray-300 text-blues w-2/3 m-auto rounded  px-12"
                >
                  <img src={img} alt="wq" className="w-28 h-28" />
                  <p className="font-bold uppercase text-xl">{name}</p>

                  <div className="totalcosts">Price: $ {price}</div>
                </li>
                
              </>
            );
          })
        ) : (
          <h1 className="bg-blues h-screen items-center flex justify-center text-white text-3xl">
            Your chart is empty.......
          </h1>
        )}
        <NavLink
          to="/shop"
          className="bg-blues absolute top-5 right-10 shadow-lg text-white border-black border px-3 py-2 rounded-md"
        >
          Shop More
        </NavLink>
      </div>
    </>
  );
};
export default ShoppCart;
