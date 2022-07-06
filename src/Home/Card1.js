import React from "react";
import Sdata from "./Sdata";
import { NavLink } from "react-router-dom";

const Card1 = () => {
  return (
    <>
      <div className="Card flex gap-3 justify-between w-full px-12 py-20 ">
        {Sdata.map((val) => {
          return val.categories.map((Data) => {
            const { id, img, title } = Data;
            return (
              <>
                <div
                  className="Card-body w-1/3 flex flex-col relative items-center justify-center after:content-[''] after:bg-gray-50 after:w-96 after:rounded-xl after:h-96 after:items-center after:-mt-96"
                  key={id}
                >
                  <div className="img-section  z-40">
                    <img
                      src={img}
                      alt=""
                      className=" rounded-full h-80 w-80  overflow-hidden"
                    />
                  </div>
                  <div className="title absolute top-0 h-full w-full  text-white flex flex-col gap-3 items-center justify-center z-40">
                    <h1 className="text-2xl font-extrabold ">{title}</h1>
                    <NavLink
                      to="/shop"
                      className="border-0 p-2 bg-white rounded-md outline:none text-blues transition ease-out duration-700 hover:transform hover:scale-110"
                    >
                      Show Now
                    </NavLink>
                  </div>
                </div>
              </>
            );
          });
        })}
      </div>
    </>
  );
};

export default Card1;
