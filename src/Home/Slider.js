import Slider from "react-slick";
import React, { useRef } from "react";
import "../App.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Sdata from "./Sdata";
import { NavLink } from "react-router-dom";

const Sliderframe = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  //   const getItemInfo=(Val)=>{
  //     setData(Val.Topslider)
  //    return(
  //      {
  //        AllData.map((Val) =>{
  //          return(hi)
  //        })
  //      }
  //    )
  // ;  }

  return (
    <>
      <div className="slider-main relative h-screen">
        <div className="arrows absolute top-1/2 flex w-full justify-between">
          <div
            className="left-one rounded-full bg-white text-blues hover:text-blue-400 z-40 "
            onClick={() => sliderRef.current.slickPrev()}
          >
            <ChevronLeftIcon className="icons" fontSize="large" />
          </div>
          <div
            className="right-one rounded-full bg-white text-blues hover:text-blue-400 z-10"
            onClick={() => sliderRef.current.slickNext()}
          >
            <ChevronRightIcon className="icons" fontSize="large" />
          </div>
        </div>
        <Slider ref={sliderRef} {...settings} className="slider-head ">
          {Sdata.map((Val) => {
            return Val.Topslider.map((Data) => {
              const { img, title, description, bgcolor } = Data;
              return (
                <>
                  <div
                    className="slider-body pr-12 items-center justify-center h-screen"
                    style={{ backgroundColor: `${bgcolor}` }}
                  >
                    <div className="img-section w-1/2 float-left flex items-center h-screen justify-center my-2">
                      <img
                        src={img}
                        alt=""
                        className="h-full w-full position-center object-contain"
                      />
                    </div>
                    <div className="description-section float-left h-full w-1/2 flex flex-col gap-10 justify-center ">
                      <div className="title mb-8">
                        <h1 className="text-8xl font-serif uppercase text-gray-700">
                          {title}
                        </h1>
                      </div>
                      <div className="breif mb-8">
                        <p className="text-2xl uppercase tracking-widest leading-relaxed">
                          {description}
                        </p>
                      </div>
                      <div className="shop-button">
                        <NavLink to="/shop">
                          <button
                            type="button"
                            class="inline-block px-10 py-2.5 bg-blues text-white font-medium text-s leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Shop Now
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </>
              );
            });
          })}
        </Slider>
      </div>
    </>
  );
};

export default Sliderframe;
