import React from "react";

const PartnerCard = ({ item }) => {
  return (
    <div
      key={item}
      className="w-[175px] h-[60px] md:w-[239px] md:h-[87px] rounded-2xl bg-gradient-to-r from-[#18e35b] to-[#129123] my-4 cursor-pointer"
    >
      <div className="grid grid-cols-8">
        <div className="col-span-5 h-[97px] rounded-l-2xl">
          <h1 className="text-center text-[10px] md:text-[14px] mt-2 w-5/6 rounded-md mx-auto  bg-gradient-to-r from-[#11ad45] to-[#1c972c] text-white">{item.slug}</h1>
          <p className="text-center text-[8px] md:text-[10px] mt-2 md:mt-5 mx-auto">{item.about}</p>
        </div>
        <div className="col-span-3 h-full bg-black-400 rounded-r-2xl rounded-bl-[80px]"> 
          <img
            className="rounded-r-2xl rounded-bl-[60px] h-[60px] md:h-[87px] w-max float-right shadow-2xl"
            src={item.img}
            alt=""
          />
        </div>
      </div>
      {/* <img src={`./assets/partner/${item}`} alt="" /> */}
    </div>
  );
};

export default PartnerCard;
