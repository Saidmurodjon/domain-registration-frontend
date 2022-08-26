import React, { useState } from "react";
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";
import Button from "../button/Button";
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
      <div className="max-w-[1240px] mx-auto px-4 relative flex justify-center itmes-center md:h-[500px]">
        
        <div className="absolute hidden md:top-[200px] md:left-[-85px] md:inline text-3xl text-blue cursor-pointer left-8 bg-[#00A59C] hover:bg-transparent border-2 border-[#00A59C] rounded">
        <FiChevronLeft
          onClick={prevSlide}
          className="text-white hover:text-[#00A59C]"
        />
        </div>
        <div className="absolute hidden md:top-[200px] md:right-[-85px] md:inline text-3xl text-blue cursor-pointer right-8 bg-[#00A59C] hover:bg-transparent border-2 border-[#00A59C] rounded">
        <FiChevronRight
          onClick={nextSlide} 
          className="text-white hover:text-[#00A59C]"
        />
        </div>
        {Data.sliderData.map((item, index) => (
          <div
            key={index}
            className={index === slide ? "opacity-100" : "opacity-0"}
          >
            {index === slide && (
              <div className="grid md:grid-cols-5 sm:grid-cols-1">
                <div className="float-left md:mt-[70px] col-span-3">
                  <h1 className="text-[28px] md:text-[56px] font-bold text-[#1F3D9D] ">
                    {item.title}
                  </h1>
                  <h3 className="text-[#797979] md:mt-7">{item.about}</h3>
                  <div  className='mt-2 md:mt-[60px]'>
                  <Button name={"RO‘YXATDAN O‘TISH"}/>
                  </div>
                </div>
                <div className="float-right md:w-[416px] col-span-2">
                  <img className="rounded-md w-full" src={item.url} alt="/" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="g bg-transparent">
        <div className="max-w-[1240px] mx-auto px-4 md:mt-4 md:flex">
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
