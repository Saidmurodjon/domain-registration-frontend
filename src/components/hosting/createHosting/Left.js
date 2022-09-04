import React, { useState } from "react";
import test from "../../../test.json";
import Data from "../../data/Data";

const Left = ({ left, basic }) => {
  const [toggle, setToggle] = useState({
    domainuz: basic.domainuz,
    pochta: basic.pochta,
    trafik: basic.trafik,
  });
  const card = Data.hosting.card;
  return (
    <>
      {" "}
      <div className="float-left px-3 md:px-[120px]">
        <h1 className="text-semibold text-xl font-semibold cursor-pointer text-[#1F3D9D] text-center my:4 md:my-10">
          {Data.hosting.title2}
        </h1>
        <form className="md:mt-[60px]" action="">
          {/* select hajmi start */}
          <label className="float-left text-[#333333] font-semibold cursor-pointer">
            {card.hajmi}
          </label>
          <select
            className="float-right w-[96px] h-[30px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
            onChange={(e) => left({ name: "hajmi", value: e.target.value })}
          >
            {test.map((item) => (
              <option
                className="dark:bg-white text-black"
                key={item.id}
                value={item.hajmi}
              >
                {item.hajmi} MB
              </option>
            ))}
          </select>
          {/* select hajmi end */}

          {/* select domain start */}
          <br />
          <hr className="border-t dark:border-gray-100 my-5" />
          <label className="float-left text-[#333333] font-semibold cursor-pointer">
            {card.domain}
          </label>
          <select
            className="float-right w-[96px] h-[30px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
            onChange={(e) => console.log(e.target.value)}
          >
            {test.map((item) => (
              <option
                className="dark:bg-white text-black"
                key={item.id}
                value={item.domain}
              >
                {item.domain} ta
              </option>
            ))}
          </select>
          {/* select domain end */}
          {/* select subdomain start */}
          <br />
          <hr className="border-t dark:border-gray-100 my-5" />
          <label className="float-left text-[#333333] font-semibold cursor-pointer">
            {card.subdomain}
          </label>
          <select className="float-right w-[96px] h-[30px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center">
            {test.map((item) => (
              <option
                className="dark:bg-white text-black"
                key={item.id}
                value={item.subdomain}
              >
                {item.subdomain} ta
              </option>
            ))}
          </select>
          {/* select subdomain end */}
          {/* select db start */}
          <br />
          <hr className="border-t dark:border-gray-100 my-5" />
          <label className="float-left text-[#333333] font-semibold cursor-pointer">
            {card.db}
          </label>
          <select className="float-right w-[96px] h-[30px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center">
            {test.map((item) => (
              <option
                className="dark:bg-white text-black"
                key={item.id}
                value={item.db}
              >
                {item.db} ta
              </option>
            ))}
          </select>
          {/* select db end */}
          {/* toggle domainuz start */}
          <br />
          <hr className="border-t dark:border-gray-100 my-5" />
          <label className="float-left text-[#333333] font-semibold cursor-pointer">
            {card.domainuz}
          </label>
          <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={toggle.domainuz}
              onChange={() =>
                left({ name: "domainuz", value: toggle.domainuz })
              }
            />
            <div
              onClick={() => {
                setToggle({ ...toggle, domainuz: !toggle.domainuz });
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
            ></div>
          </label>
          {/* toggle domainuz end */}

          {/* toggle pochta start */}
          <br />
          <hr className="border-t dark:border-gray-100 my-5" />
          <label className="float-left text-[#333333] font-semibold cursor-pointer">
            {card.pochta}
          </label>
          <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={toggle.pochta}
              onChange={() => left({ name: "pochta", value: toggle.pochta })}
            />
            <div
              onClick={() => setToggle({ ...toggle, pochta: !toggle.pochta })}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
            ></div>
          </label>
          {/* toggle pochta end */}

          {/* toggle trafik start */}
          <br />
          <hr className="border-t dark:border-gray-100 my-5" />
          <label className="float-left text-[#333333] font-semibold cursor-pointer">
            {card.trafik}
          </label>
          <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={toggle.trafik}
              onChange={() => left({ name: "trafik", value: toggle.trafik })}
            />
            <div
              onClick={() => setToggle({ ...toggle, trafik: !toggle.trafik })}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
            ></div>
          </label>
          {/* toggle trafik end */}

          <br />
          <hr className="border-t dark:border-gray-100 my-5" />
        </form>
      </div>
    </>
  );
};

export default Left;
