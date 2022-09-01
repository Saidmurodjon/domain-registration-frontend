import React from "react";
import Button from "../button/Button";

const HostingCard = ({ props }) => {
  return (
    <>
      <div className="w-[278px] px-[0px] rounded-lg shadow-lg mx-auto bg-white">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-[24px] md:text-[32px] md:my-[20px] font-semibold text-[#00A59C]">
            Title
          </h1>
          <h1 className="text-[20px] text-[#1F3D9D] font-semibold">
            30000 so'm
          </h1>
        </div>
        {/* body */}
        <div className="grid grid-cols-3">
          <p className="my-[10px] pl-[35px] col-span-2">Hajmi</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.hajmi}</p>
          <p className="my-[10px] pl-[35px] col-span-2">Hajmi</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.hajmi}</p>
          <p className="my-[10px] pl-[35px] col-span-2">Hajmi</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.hajmi}</p>
          <p className="my-[10px] pl-[35px] col-span-2">Hajmi</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.hajmi}</p>
          <p className="my-[10px] pl-[35px] col-span-2">Hajmi</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.hajmi}</p>
          <p className="my-[10px] pl-[35px] col-span-2">Hajmi</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.hajmi}</p>
          <p className="my-[10px] pl-[35px] col-span-2">Hajmi</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.hajmi}</p>
          <p className="my-[10px] pl-[35px] col-span-2">Hajmi</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.hajmi}</p>
          <p className="my-[10px] pl-[35px] col-span-2">Hajmi</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.hajmi}</p>
          <p className="my-[10px] pl-[35px] col-span-2">Hajmi</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.hajmi}</p>
          <p className="my-[10px] pl-[35px] col-span-2">Narxi</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.narxi}</p>
        </div>
        {/* footer */}
        <div className="pt-10 pb-3 px-3 text-center">
            <Button name={"Buyurtma berish"} styles="w-full"/>
        </div>
      </div>
    </>
  );
};

export default HostingCard;
