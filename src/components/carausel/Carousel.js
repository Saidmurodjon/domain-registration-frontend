import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import HeaderCard from "../cards/HeaderCard";
import Data from "../data/Data";
const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = Data.sliderData.length;
  // console.log(length)

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="">
      <div className="max-w-[1240px] mx-auto px-4 relative flex justify-center itmes-center">
        <BsArrowLeftSquareFill
          onClick={prevSlide}
          className="absolute hidden md:top-[200px] md:left-[-10px] md:inline text-3xl text-blue cursor-pointer left-8"
        />
        <BsArrowRightSquareFill
          onClick={nextSlide}
          className="absolute hidden md:top-[200px] md:right-[-10px] md:inline text-3xl text-blue cursor-pointer right-8"
        />
        {Data.sliderData.map((item, index) => (
          <div
            key={index}
            className={index === slide ? "opacity-100" : "opacity-0"}
          >
            {index === slide && (
              <div className="grid md:grid-cols-2 gap-2 sm:grid-cols-1">
                <div className="float-left ">
                  <h1 className="text-semibold text-5xl font-semibold text-[#1F3D9D] ">
                    {item.title}
                  </h1>
                  <h3 className="text-[#797979]">{item.about}</h3>
                </div>
                <div className="float-right">
                  <img className="rounded-md w-full" src={item.url} alt="/" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="g bg-transparent">
        <div className="max-w-[1240px] mx-auto px-4 md:flex">
          {Data.headerCard.map((item) => (
            <div
              key={item.url}
              className="mx-auto p-3 md:flex-1 justify-center itmes-center"
            >
              <HeaderCard props={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
