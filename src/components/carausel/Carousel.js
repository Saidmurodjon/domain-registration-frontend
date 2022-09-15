import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Button from "../button/Button";
import HeaderCard from "../cards/HeaderCard";
import Data from "../data/Data";
const Carousel = () => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const length = Data ? Data.sliderData.length : 0;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <>
      {Data ? (
        <div className="bg-[#ffff]">
          <div className="max-w-[1200px] mx-auto px-4 relative justify-center itmes-center md:h-[400px] xl:h-[450px] ">
            {/* Qayta ko'rib chiqiladi */}
            <div className="absolute w-max top-[220px] md:top-[400px] xl:top-[200px] left-3 md:left-[45%] xl:left-[-45px] text-3xl text-blue cursor-pointer bg-[#00A59C] hover:bg-transparent border-2 border-[#00A59C] rounded">
              <FiChevronLeft
                onClick={prevSlide}
                className="text-white hover:text-[#00A59C]"
              />
            </div>
            <div className="absolute w-max top-[220px] md:top-[400px] xl:top-[200px] right-3 md:right-[45%] xl:right-[-45px] text-3xl text-blue cursor-pointer bg-[#00A59C] hover:bg-transparent border-2 border-[#00A59C] rounded">
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
                      <h1 className="text-[28px] xl:text-[56px] lg:text-[36px] md:text-[32px] font-bold text-[#1F3D9D] text-center md:text-start ">
                        {item.title}
                      </h1>
                      <h3 className="text-[#797979] md:mt-7">{item.about}</h3>
                      <div className="mt-2 lg:mt-[60px] hidden md:contents">
                        <Button
                          name={"RO‘YXATDAN O‘TISH"}
                          ButtonFunction={() =>
                            navigate("/user", {
                              state: { type: "registration" },
                            })
                          }
                          styles="mt-16"
                        />
                      </div>
                    </div>
                    <div className="float-right lg:w-[416px] md:w-[380px] lg:col-span-2 mx-auto">
                      <img
                        className="rounded-md w-full"
                        src={item.url}
                        alt="/"
                      />
                      <div className="my-6 md:mt-[60px] text-center md:hidden">
                        <Button
                          name={"RO‘YXATDAN O‘TISH"}
                          ButtonFunction={() =>
                            navigate("/user", {
                              state: { type: "registration" },
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#EFEFEF] md:bg-[#ffff]">
            <div className="max-w-[1200px] mx-auto px-2 md:px-0 md:mt-16">
              <div className="grid xl:grid-cols-3 md:grid-cols-2 items-center  justify-center">
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
      ) : (
        <></>
      )}
    </>
  );
};

export default Carousel;
