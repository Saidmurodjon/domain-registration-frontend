import React, { useState } from "react";
import { Link } from "react-router-dom";
import test from "../../test.json";
import HostingCard from "../cards/HostingCard";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Data from "../data/Data";
const Hosting = () => {
  const data = test.slice(0, 4);
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
          <h1 className=" text-[#1F3D9D] text-[24px] md:text-[48px] text-center font-semibold">
            {Data.hosting.title}
          </h1>
          <hr className="border-[#00A59C] w-[90px] mx-auto" />
          <h2 className="md:w-[637px] text-center mx-auto text-[#797979] my-6">
            {Data.hosting.about}
          </h2>
        </div>
        <p className="mx-3">Tariflar</p>

        <div className="hidden md:contents">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 items-center relative justify-center">
            {" "}
            {data.map((item) => {
              return (
                <div key={item.narxi} className="">
                  <HostingCard props={item} />
                </div>
              );
            })}
          </div>
          <div className="mx-3 mt-5 flex justify-end">
            <Link to={`/domen`}>
              <p className=" text-[#00A59C] border-b-2 border-transparent hover:border-b-2 hover:border-current">
                {Data.hosting.more}
              </p>
            </Link>
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
                onClick={nextSlide}
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
