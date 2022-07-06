import React from "react";
import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";

const Footer = () => {
  return (
    <>
      <footer className=" text-center bg-lightb text-blues pt-10 pb-3">
        <div className="footer-section">
          <div className="heading">
            <h1 className="text-3xl text-center">Contact-Us</h1>
          </div>
          <div className="leading-lose my-5">
            622 Dixie Path , South Tobinchester 98336
            <br />
            +1 234 56 78
          </div>
          <img
            src="https://i.ibb.co/Qfvn4z6/payment.png"
            alt=""
            className="w-60 m-auto"
          />
        </div>
        <div className="icons-only my-8">
          <div className="line">
            <p className="font-bold text-2xl">Copyright @ ShopEasy , 2022.</p>
          </div>
          <div className="mt-5 flex gap-5 justify-center ">
            <Facebook className="text-fb" />
            <Instagram className="text-insta" />
            <Twitter className="text-twitt" />
            <Pinterest className="text-pinte" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
