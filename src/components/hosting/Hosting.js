import React, { useState } from "react";
import test from "../../test.json";
import HostingCard from "../cards/HostingCard";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const Hosting = () => {
const data=test.slice(0,4)
  const [slide, setSlide] = useState(0);
  const length = data.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  return (
    <>
      <div className="max-w-[1200px] mx-auto bg-[#F1FAFF] py-5">
        <div className="px-2 md:px-0 md:py-5">
          <h1 className=" text-[#1F3D9D] text-[24px] md:text-[48px] md:text-center font-semibold">
            ISHONCHLI HOSTING XIZMATI
          </h1>
          <hr className="border-[#00A59C] w-[90px] mx-auto" />
          <h2 className="md:w-[637px] md:text-center mx-auto text-[#797979] my-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
          </h2>
        </div>
        <p className="mx-3">Tariflar</p>

        <div className="hidden md:contents">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center relative justify-center">
            {" "}
            {data.map((item) => {
              return (
                <div key={item.narxi} className="">
                  <HostingCard props={item} />
                </div>
              );
            })}
          </div>
        </div>
        {/* Hosting carousel */}
        <div className="md:hidden">
          {data.map((item, index) => (
            <div
              key={index}
              className={index === slide ? "opacity-100" : "opacity-0"}
            >
              {index === slide && (
                <div key={item.narxi} className="">
                  <HostingCard props={item} />
                </div>
              )}
            </div>
          ))}
          <div className="w-[114px]  mx-auto flex justify-between my-4">
            <div className="w-[35px] h-[35px] bg-white border rounded-full float-left">
              <FiChevronLeft
                onClick={prevSlide}
                className="text-black hover:text-[#00A59C] mx-auto mt-2"
              />
            </div>
            <div className="w-[35px] h-[35px] bg-white border rounded-full ">
              <FiChevronRight
                onClick={prevSlide}
                className="text-black hover:text-[#00A59C] mx-auto mt-2"
              />
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Hosting;
