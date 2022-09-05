import React from "react";
import Button from "../button/Button";
import { BsCheck2Circle } from "react-icons/bs";
import { FiXCircle } from "react-icons/fi";
import { CgInfinity } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Data from "../data/Data";
const HostingCard = ({ props }) => {
  const navigate = useNavigate();
  const card = Data.hosting.card;
  return (
    <>
      <div className="w-[278px] px-[0px] rounded-lg shadow-lg mx-auto bg-white">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-[24px] md:text-[32px] md:my-[20px] font-semibold text-[#00A59C]">
            {props.title}
          </h1>
          <h1 className="text-[20px] text-[#1F3D9D] font-semibold">
            {props.narxi} so'm
          </h1>
        </div>
        {/* body */}
        <div className="grid grid-cols-3">
          <p className="my-[10px] pl-[35px] col-span-2">{card.hajmi}</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.hajmi}</p>
          <p className="my-[10px] pl-[35px] col-span-2">{card.domain}</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.domain}</p>
          <p className="my-[10px] pl-[35px] col-span-2">{card.subdomain}</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.subdomain}</p>
          <p className="my-[10px] pl-[35px] col-span-2">{card.db}</p>
          <p className="my-[10px] font-semibold pl-[20px]">{props.db}</p>
          <p className="my-[10px] pl-[35px] col-span-2">{card.domainuz}</p>
          <p className="my-[10px] font-semibold pl-[20px]">
            {props.domainuz ? (
              <BsCheck2Circle className="text-[#00A59C] text-xl" />
            ) : (
              <FiXCircle className="text-[#FF0000] text-xl" />
            )}
          </p>
          <p className="my-[10px] pl-[35px] col-span-2">{card.pochta}</p>
          <p className="my-[10px] font-semibold pl-[20px]">
            {props.pochta <= 0 ? (
              <CgInfinity className="text-2xl text-[#141414] " />
            ) : (
              props.pochta
            )}
          </p>
          <p className="my-[10px] pl-[35px] col-span-2">{card.trafik}</p>
          <p className="my-[10px] font-semibold pl-[20px]">
            {props.trafik <= 0 ? (
              <CgInfinity className="text-2xl text-[#141414] " />
            ) : (
              props.trafik
            )}
          </p>
          <p className="my-[10px] pl-[35px] col-span-2">{card.backup}</p>
          <p className="my-[10px] font-semibold pl-[20px]">
            {props.backup ? (
              <BsCheck2Circle className="text-[#00A59C] text-xl" />
            ) : (
              <FiXCircle className="text-[#FF0000] text-xl" />
            )}
          </p>
          <p className="my-[10px] pl-[35px] col-span-2">{card.ftp}</p>
          <p className="my-[10px] font-semibold pl-[20px]">
            {props.ftp ? (
              <BsCheck2Circle className="text-[#00A59C] text-xl" />
            ) : (
              <FiXCircle className="text-[#FF0000] text-xl" />
            )}
          </p>
          <p className="my-[10px] pl-[35px] col-span-2">{card.dns}</p>
          <p className="my-[10px] font-semibold pl-[20px]">
            {props.dns ? (
              <BsCheck2Circle className="text-[#00A59C] text-xl" />
            ) : (
              <FiXCircle className="text-[#FF0000] text-xl" />
            )}
          </p>
          <p className="my-[10px] pl-[35px] col-span-2">{card.access_log}</p>
          <p className="my-[10px] font-semibold pl-[20px]">
            {props.access_log ? (
              <BsCheck2Circle className="text-[#00A59C] text-xl" />
            ) : (
              <FiXCircle className="text-[#FF0000] text-xl" />
            )}
          </p>
        </div>
        {/* footer */}
        <div className="pt-10 pb-3 px-3 text-center">
          <Button
            name={card.button}
            ButtonFunction={() => navigate("/user", { state: {type:"hosting", item: props } })}
            styles="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default HostingCard;
