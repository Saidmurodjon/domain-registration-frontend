import React from "react";

const HeaderCard = ({ props }) => {
  return (
    <>
      <div
        className="w-[360px] bg-white rounded-lg shadow-xl border border-gray-100 md:border-none md:dark:bg-[#0A96FF]  hover:bg-[#00A59C] h-[202px
] md:h-[223px] xl:h-[273px] md:w-[380px] xl:w-[370px] transition duration-500 transform md:hover:-translate-y-[30px] md:hover:shadow-2xl my-4"
      >
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col md:items-center pb-10 mx-3">
          <img
            className="mb-3 w-[70px] h-[70px] mt-2 rounded-full shadow-lg float-left md:mx-auto ml-4"
            src={props.url}
            alt={props.title}
          />
          <h5 className="mb-1 text-xl font-medium text-[#1F3D9D] md:text-[#FFFFFF] md:dark:text-white md:text-center mt-4">
            {props.title}
          </h5>
          <span className="text-sm text-[#333333] md:dark:text-[#F8F8F8] md:text-center w-2/3 md:w-3/6 mt-2">
            {props.info}
          </span>
          {/* <div className="flex mt-4 space-x-3 md:mt-6"></div> */}
        </div>
      </div>
    </>
  );
};

export default HeaderCard;
