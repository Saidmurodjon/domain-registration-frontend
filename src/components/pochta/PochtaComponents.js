import React from "react";
import PochtaCard from "../cards/PochtaCard";
import Data from "../data/Data";
import UseFetch from "../hooks/UseFetch";
import config from "../../config.json";
const PochtaComponents = () => {
  const { data, loading } = UseFetch(config.SERVER_URL + "pochta", {
    method: "get",
    details: {},
  });
  // if (error) {
  //   console.log(error);
  // }
  return (
    <>
      {Data ? (
        <div className="bg-[#F1FAFF]">
          <div className="max-w-[1200px] mx-auto py-5">
            <div className="px-2 md:px-0 md:py-5">
              <h1 className=" text-[#1F3D9D] text-[24px] md:text-[48px] text-center font-semibold">
                POCHTA UCHUN TA‘RIFLAR
              </h1>
              <hr className="border-[#00A59C] w-[90px] mx-auto" />
              <h2 className="md:w-[637px] text-center mx-auto text-[#797979] my-6">
                {Data.hosting.about}
              </h2>
            </div>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 items-center relative justify-center">
              {" "}
              {data
                ? data.map((item) => {
                    return (
                      <div key={item.narxi} className="">
                        <PochtaCard props={item} />
                      </div>
                    );
                  })
                : loading}
            </div>
          </div>
        </div>
      ) : (
        false
      )}
    </>
  );
};

export default PochtaComponents;
