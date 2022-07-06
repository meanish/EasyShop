import React from "react";
import SendIcon from "@mui/icons-material/Send";

const Newletter = () => {
  return (
    <>
      <div className="newletter bg-back text-center py-8">
        <div className="heading">
          <h1 className="text-3xl text-center my-4">NewLetter</h1>
          <p>Get timely updates from your favourite products.</p>
        </div>
        <div className="email-details my-12">
          <input type="email" placeholder="Your email" className="w-96 h-12 outline-0 px-2 placeholder:px-2"/>
          <button className="bg-blues mx-2 p-2 w-16 h-12 rounded">
            <SendIcon className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Newletter;
