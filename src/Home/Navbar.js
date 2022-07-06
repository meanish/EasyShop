import React, { useState, useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import FormModel from "../Login/FormModel";
import { ShopCart } from "../Context";
const Navbar = () => {
  const [showregister, setShowregister] = useState(true);
  const [showsignin, setShowsignin] = useState(true);

  const { scart } = useContext(ShopCart);
  return (
    <>
      <div className="navbar flex justify-between shadow-md px-12 py-2 items-center z-40">
        <div className="first-section flex gap-5">
          <div className="country items-center flex">en</div>
          <div className="search-items relative ">
            <input
              type="text"
              className="
          form-control
          block
          w-full
          px-1
          py-0.5
          font-normal
          bg-white bg-clip-padding
          border-2 border-solid
          transition
          ease-in-out
          m-0
         focus:bg-white focus:border-blue-600 focus:outline-none
       
        "
              id="exampleFormControlInput3"
              placeholder=""
            />
            <SearchIcon className="absolute right-0 top-1" />
          </div>
        </div>
        <div className="store-name">
          <NavLink to="/" className="headname font-Right text-4xl text-blues">
            EasyStore
          </NavLink>
        </div>
        <div className="end-section flex gap-4">
          <div className="register">
            <button
              type="button"
              className="inline-block px-2 py-2.5 bg-transparent  font-medium text-xs leading-tight uppercase rounded hover:text-red-700 hover:bg-gray-100  active:bg-gray-200 transition duration-150 ease-in-out"
              onClick={() => setShowregister(!showregister)}
            >
              Register
            </button>

            {!showregister ? (
              <FormModel name="register" msg="Your account has been created" />
            ) : null}
          </div>
          <div className="sign-in">
            <button
              type="button"
              className="inline-block px-2 py-2.5 bg-transparent  font-medium text-xs leading-tight uppercase rounded hover:text-red-700 hover:bg-gray-100  active:bg-gray-200 transition duration-150 ease-in-out"
              onClick={() => setShowsignin(!showsignin)}
            >
              Sign In
            </button>
            {!showsignin ? (
              <FormModel
                name="signin"
                msg="Your account is logged in. Enjoy.."
              />
            ) : null}
          </div>
          <NavLink
            to="/shoppCart"
            className="cart-list flex items-center relative"
          >
            <ShoppingCartIcon fontSize="small" />
            <span className="inline-block -right-3 -top-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-400 absolute text-white p-1 rounded-full ">
              {scart.length}
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
