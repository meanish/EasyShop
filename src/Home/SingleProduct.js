import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArticleIcon from "@mui/icons-material/Article";
import { ShopCart } from "../Context";


import { useNavigate } from "react-router-dom";

const SingleProduct = ({ prod }) => {
  // link to another page
  const navigate = useNavigate();
  const toComponent = (Data) => {
    console.log(Data);
    navigate("/product", { state: Data });
  };

  const { id, img } = prod;

  const { scart, setScart } = useContext(ShopCart);

  return (
    <div
      className="img-section1 grid items-center bg-brown-400 rounded-3xl relative "
      key={id}
    >
      <div className="detail-info absolute top-0 w-full h-full items-center flex flex-cols gap-3 justify-center bg-brown-100 opacity-0 transition ease-in-out duration-900">
        <ShoppingCartIcon
          sx={{ fontSize: 40 }}
          className="bg-white p-2 rounded-full hover:bg-gray-100"
          onClick={() => setScart([...scart, prod])}
        />

        <ArticleIcon
          onClick={() => {
            toComponent(prod);
          }}
          sx={{ fontSize: 40 }}
          className="bg-white p-2 rounded-full hover:bg-gray-100"
        />

        <FavoriteBorderIcon
          sx={{ fontSize: 40 }}
          className="bg-white p-2 rounded-full hover:bg-gray-100"
        />
      </div>
      <img src={img} alt="a" className="" />
    </div>
  );
};

export default SingleProduct;
