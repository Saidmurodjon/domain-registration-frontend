import React from "react";
import test from "../../test.json";
import HostingCard from "../cards/HostingCard";
const Hosting = () => {
  console.log(test);
  return (
    <>
      <div className="max-w-[1200px] mx-auto bg-[#F1FAFF] py-5">
        <div className="px-2 md:px-0 md:py-5">
          <h1 className=" text-[#1F3D9D] text-[24px] md:text-[48px] md:text-center font-semibold">
          ISHONCHLI HOSTING XIZMATI
          </h1>
          <hr className="border-[#00A59C] w-[90px] mx-auto" />
          <h2 className="md:w-[637px] md:text-center mx-auto text-[#797979] my-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
          </h2>
        </div>
       <p className="mx-3">Tariflar</p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center relative justify-center">
          {" "}
          {test.map((item) => {
            return (
              <div key={item.narxi} className="">
                <HostingCard props={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hosting;
