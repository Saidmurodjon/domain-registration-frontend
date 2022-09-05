import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const PochtaCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[278px] h-[453px] rounded-lg shadow-lg mx-auto bg-white mt-2 md:mt-6 xl:mt-4 transition duration-500 transform md:hover:-translate-y-[10px] md:hover:shadow-2xl">
        <h1 className="text-[32px] text-center pt-[25px] text-[#00A59C] font-bold">
          Mail-5GB
        </h1>
        <h1 className="text-[24px] text-center pt-[25px] text-[#1F3D9D] font-bold">
          NC panel
        </h1>
        <h1 className="text-[14px] text-center pt-[25px] ">
          Hajmi: <p className="pl-2 inline font-semibold">5GB</p>
        </h1>
        <h1 className="text-[14px] text-center pt-[25px] ">
          Pochta qutilari: <p className="pl-2 inline font-semibold">5GB</p>
        </h1>
        <div className="flex justify-center pt-[25px]">
          <form action="">
            <select
              className="cursor-pointer rounded outline-none text-center w-[110px] h-[32px] shadow-md"
              name=""
              id=""
            >
              <option className="dark:bg-white" value="">
                1 oyga
              </option>
            </select>
          </form>
        </div>
        <h1 className="text-[24px] text-center pt-[25px] text-[#333333] font-bold">
          100 000 so‘m
        </h1>
        <div className="flex justify-center pt-[30px]">
          <Button
            name={"Buyurtma berish"}
            styles="w-[250px]"
            ButtonFunction={() =>
              navigate("/user", { state: { type: "pochta", item: {} } })
            }
          />
        </div>
      </div>
    </>
  );
};

export default PochtaCard;
