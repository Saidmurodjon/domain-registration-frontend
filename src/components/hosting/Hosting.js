import React, { useState } from "react";
import HostingCard from "../cards/HostingCard";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Data from "../data/Data";
import UseFetch from "../hooks/UseFetch";
const Hosting = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const { data, error } = UseFetch(SERVER_URL + "hostings", {
    method: "get",
    details: {},
  });
  const [slide, setSlide] = useState(0);
  const length = data ? data.length : 0;
  const [more, setMore] = useState(false);
  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  if (error) {
    console.log(error);
  }
  return (
    <div className="max-w-[1200px] mx-auto py-5">
      <div className="px-2 md:px-0 md:py-5">
        <h1 className=" text-[#1F3D9D] text-[24px] md:text-[48px] text-center title-font">
          {Data.hosting.title}
        </h1>
        <hr className="border-[#00A59C] border-t-2 w-[90px] mx-auto" />
        <h2 className="md:w-[637px] text-center mx-auto text-[#797979] my-6">
          {Data.hosting.about}
        </h2>
      </div>
      <p className="mx-3">Tariflar</p>

      <div className="hidden md:contents">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 items-center relative justify-center">
          {" "}
          {data ? (
            data.slice(0, 4).map((item) => {
              return (
                <div key={item._id} className="">
                  <HostingCard props={item} />
                </div>
              );
            })
          ) : (
            <>
              <p>Please wait...</p>
            </>
          )}
        </div>
        <div className="mx-3 mt-5 flex justify-end">
          <p
            onClick={() => setMore(!more)}
            className=" text-[#00A59C] border-b-2 border-transparent hover:border-b-2 hover:border-current cursor-pointer"
          >
            {more ? Data.hosting.less : Data.hosting.more}
          </p>
        </div>
      </div>
      {/* Hosting carousel */}
      <div className="md:hidden">
        {data
          ? (more ? data : data.slice(0, 4)).map((item, index) => (
              <div
                key={index}
                className={index === slide ? "opacity-100" : "opacity-0"}
              >
                {index === slide && (
                  <div key={item.id} className="">
                    <HostingCard props={item} />
                  </div>
                )}
              </div>
            ))
          : false}
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
  );
};

export default Hosting;
