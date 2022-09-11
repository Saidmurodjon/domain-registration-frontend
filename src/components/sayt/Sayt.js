import React from "react";
import Button from "../button/Button";
import Data from "../data/Data";
import { FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Sayt.css";
const Sayt = () => {
  const navigate = useNavigate();
  return (
    <>
      {Data ? (
        <div
          className={`bg-[#ffffff] bg-map pb-[80px] lg:pb-[160px] pt-[50px] lg:pt-[90px]`}
        >
          {/* up */}
          <div className="">
            <div className="px-2 md:px-0 md:py-5">
              <h1 className=" text-[#1F3D9D] text-[24px] lg:text-[48px] text-center font-semibold">
                {Data.site.title}
              </h1>
              <hr className="border-[#00A59C] w-[90px] mx-auto" />
              <h2 className="md:w-[637px] md:text-center mx-auto text-[#797979] my-6">
                {Data.site.about}
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 mx-auto max-w-[1200px]">
              <div className="mx-auto">
                <img src={`./assets/site.png`} alt="" />
              </div>
              <div className="mx-auto bg-white md:bg-transparent w-full ">
                <ul className="w-5/6 mx-auto">
                  {Data.site.options.map((item) => (
                    <div key={item} className="">
                      <hr className="border-md md:border-none" />
                      <FiCheck className="inline my-4 mr-1 text-xl text-[#00A59C]" />{" "}
                      <li className="my-4 w-[440px] text-[18px] font-medium inline text-[#282828]">
                        {item}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* up */}

          <div className="grid lg:grid-cols-2 mx-auto max-w-[1200px]">
            <div className="rounded-2xl bg-white flex w-[362px] lg:w-[495px] mx-auto lg:my-[20px] my-[20px] border shadow-md">
              <div className="w-[110px] h-[110px] lg:w-[143px] lg:h-[143px] bg-gradient-to-r from-[#13E7DB] to-[#00A59C] rounded-2xl shadow-2xl">
                <img
                  src={`./assets/icons/yangilash.png`}
                  alt=""
                  className="mx-auto lg:mt-5 mt-4 w-[72px] h-[72px] lg:w-[94px] lg:h-[94px]"
                />
              </div>
              <div className="flex-1 text-center py-1 lg:py-4">
                <h1 className="text-[16px] lg:text-[18px] font-semibold mx-auto text-[#1F3D9D] w-[248px] lg:w-full">
                  {Data.site.card.title1}
                </h1>
                <p className="w-[255px] lg:w-full mx-auto py-1 lg:py-2 text-[12px] lg:text-[16px] text-[#797979]">
                  {Data.site.card.about1}
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white flex w-[362px] lg:w-[495px] mx-auto lg:my-[20px] my-[20px] border shadow-md">
              <div className="w-[110px] h-[110px] lg:w-[143px] lg:h-[143px] bg-gradient-to-r from-[#1F3D9D] to-[#7E97E7] rounded-2xl shadow-2xl ">
                <img
                  src={`./assets/icons/yangi.png`}
                  alt=""
                  className="mx-auto lg:mt-5 mt-4 w-[72px] h-[72px] lg:w-[94px] lg:h-[94px]"
                />
              </div>
              <div className="flex-1 text-center py-1 lg:py-4">
                <h1 className="text-[16px] lg:text-[18px] font-semibold mx-auto text-[#1F3D9D] w-[248px] lg:w-full">
                  {Data.site.card.title2}
                </h1>
                <p className="w-[255px] mx-auto py-1 lg:py-2 text-[12px] lg:text-[16px] text-[#797979]">
                  {Data.site.card.about2}
                </p>
              </div>
            </div>
            <div className="mx-auto  hidden lg:contents">
              <h1 className="w-[362px] lg:w-[495px] lg:my-[70px] my-[20px] mx-auto text-[#797979]">
                {Data.site.about2}
              </h1>
            </div>
            <div className="mx-auto px-3 w-[362px] lg:w-[495px] lg:my-[70px] my-[20px] ">
              <Button
                name={Data.site.button}
                styles="w-full"
                ButtonFunction={() =>
                  navigate("/user", { state: { type: "sayt" } })
                }
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sayt;
