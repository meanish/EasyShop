import React from "react";

const Announcement = () => {
  return (
    <>
      <div className="announcement bg-blues w-full text-white text-center font-bold">
        <p className="py-1">
          Super Deal !! Free Shopping on Orders Over{" "}
          <span className="text-yellow-500 font-bolder">$50</span>
        </p>
      </div>
    </>
  );
};

export default Announcement;
