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
      <div className="max-w-[1200px] mx-auto px-4 relative justify-center itmes-center lg:h-[500px]">
        {/* Qayta ko'rib chiqiladi */}
        <div className="absolute invisible lg:visible md:top-[200px] md:inline text-3xl text-blue cursor-pointer left-[-150px] bg-[#00A59C] hover:bg-transparent border-2 border-[#00A59C] rounded">
        <FiChevronLeft
          onClick={prevSlide}
          className="text-white hover:text-[#00A59C]"
        />
        </div>
        <div className="absolute lg:visible md:top-[200px] md:inline text-3xl text-blue cursor-pointer right-[-150px] bg-[#00A59C] hover:bg-transparent border-2 border-[#00A59C] rounded">
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
              <div className="grid lg:grid-cols-5  md:grid-cols-2 justify-center">
                <div className="float-left md:mt-[70px] lg:col-span-3  mx-auto">
                  <h1 className="text-[28px] lg:text-[56px] md:text-[36px] font-bold text-[#1F3D9D] ">
                    {item.title}
                  </h1>
                  <h3 className="text-[#797979] md:mt-7">{item.about}</h3>
                  <div  className='mt-2 lg:mt-[60px] hidden md:contents'>
                  <Button name={"RO‘YXATDAN O‘TISH"}/>
                  </div>
                </div>
                <div className="float-right lg:w-[416px] md:w-[380px] lg:col-span-2 mx-auto">
                  <img className="rounded-md w-full" src={item.url} alt="/" />
                  <div  className='mt-2 md:mt-[60px] text-center md:hidden'>
                  <Button name={"RO‘YXATDAN O‘TISH"}/>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="">
        <div className="max-w-[1200px] mx-auto px-2 md:px-0 md:mt-16 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center  justify-center">
          {" "}
          {Data.headerCard.map((item) => {
            return (
              <div key={item.url} className="mx-auto">
                <HeaderCard props={item} />
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
