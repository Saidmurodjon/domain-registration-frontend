import React, { useState } from "react";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
const Info = () => {
  // online information
  const [time, setTime] = useState(new Date().toISOString().slice(11, 19));
  setInterval(() => {
    setTime(new Date().toISOString().slice(11, 19));
  }, 1000);
  return (
    <div className=" bg-slate-600 hidden md:block h-[50px]">
      <div className="max-w-[75rem] px-2 grid grid-cols-8 mx-auto ">
        <div className="col-span-1 lg:col-span-2 flex items-center">
          <h1 className="text-white">{time}</h1>
        </div>
        <div className="col-span-3 flex justify-between mx-5 items-center">
          <h1 className="text-white font-semibold">
            USD=<p className="font-normal inline">11.00</p>
          </h1>{" "}
          <h1 className="text-white font-semibold">
            RUBL=<p className="font-normal inline">175</p>
          </h1>{" "}
          <h1 className="text-white font-semibold">
            EURO=<p className="font-normal inline">12.50</p>
          </h1>
        </div>
        <div className="col-span-4 lg:col-span-3 flex justify-end items-center">
          <div className="mx-5">
            <HiOutlinePhoneMissedCall className="w-[24px] h-[24px] text-[#00A59C]" />
          </div>
          <div className="mx-5">
            <h1 className="text-[#d0cece]">Aloqa uchun</h1>
            <h1 className="text-white">+99873 244-05-35</h1>
          </div>
          <div className="w-[44px] h-[43px] bg-[#00A59C] flex  items-center rounded-md text-white">
            <form action="bg-[#00A59C]">
              <select
                value={localStorage.getItem("language")}
                onChange={(e) => {
                  window.localStorage.setItem("language", e.target.value);
                  window.dispatchEvent(new Event("language"));
                }}
                className="bg-[#00A59C] outline-none"
                name=""
                id=""
              >
                <option className={``} value="uz">
                  Uz
                </option>
                <option className={``} value="ru">
                  Ru
                </option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
