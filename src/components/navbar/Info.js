import axios from "axios";
import React, { useState, useEffect } from "react";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
const Info = ({ show }) => {
  // online information
  const EX_RATE_API = process.env.REACT_APP_EXCHANGE_RATE_API_URL;
  const [time, setTime] = useState("");
  const [usd, setUsd] = useState("");
  const [rub, setRub] = useState("");
  const [eur, SetEur] = useState("");
  setInterval(() => {
    setTime(new Date().toLocaleString().slice(10, 18));
  }, 1000);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resUsd = await axios({
          method: "get",
          url: EX_RATE_API + "USD",
        });
        const resRub = await axios({
          method: "get",
          url: EX_RATE_API + "RUB",
        });
        const resEur = await axios({
          method: "get",
          url: EX_RATE_API + "EUR",
        });
        if (resUsd.status === 200) {
          setUsd(resUsd.data.conversion_rates.UZS);
        }
        if (resRub.status === 200) {
          setRub(resRub.data.conversion_rates.UZS);
        }
        if (resEur.status === 200) {
          SetEur(resEur.data.conversion_rates.UZS);
        }
      } catch (error) {
        throw error;
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className={`${show ? "contents" : "hidden"} duration-1000`}>
      <div className="bg-slate-600 hidden md:block h-[50px]">
        <div className="max-w-[75rem] px-2 grid grid-cols-8 mx-auto ">
          <div className="col-span-1 lg:col-span-2 flex items-center">
            <h1 className="text-white">{time}</h1>
          </div>
          <div className="col-span-3 flex justify-between mx-5 items-center">
            <h1 className="text-white font-semibold">
              USD=<p className="font-normal inline">{usd}</p>
            </h1>{" "}
            <h1 className="text-white font-semibold">
              RUBL=<p className="font-normal inline">{rub}</p>
            </h1>{" "}
            <h1 className="text-white font-semibold">
              EURO=<p className="font-normal inline">{eur}</p>
            </h1>
          </div>
          <div className="col-span-4 lg:col-span-3 flex justify-end items-center">
            <div className="mx-5">
              <HiOutlinePhoneMissedCall className="w-[24px] h-[24px] text-[#00A59C]" />
            </div>
            <div className="mx-5">
              <h1 className="text-[#d0cece]">Aloqa uchun</h1>
              <a className="text-white" href={`tel:+99873 244-05-35`}>
                +99873 244-05-35
              </a>
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
    </div>
  );
};

export default Info;
