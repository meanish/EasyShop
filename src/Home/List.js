import React from "react";
import Sdata from "./Sdata";
import SingleProduct from "./SingleProduct";

const List = () => {
  //  for cart  navigation

  return (
    <>
      <div className="heading">
        <h1 className="text-3xl text-center">Products</h1>
      </div>
      <div className="List-items px-12 py-4 pb-10">
        <div className="listing grid grid-cols-4 gap-10">
          {Sdata.map((Val) => {
            return Val.popularProducts.map((Data) => (
              <SingleProduct prod={Data} />
            ));
          })}
        </div>
      </div>
    </>
  );
};

export default List;
