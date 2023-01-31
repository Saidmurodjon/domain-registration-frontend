import React, { useState } from "react";
import Data from "../../data/Data";

const Left = ({ changeHandler, basic, basicHosting }) => {
  const [toggle, setToggle] = useState({
    domainuz: basic.domainUz,
    pochta: basic.pochta,
    trafik: basic.trafik,
  });
  const card = Data.hosting.card;

  return (
    <div className="float-left px-3 md:px-[120px]">
      <h1 className="text-semibold text-xl font-semibold cursor-pointer text-[#1F3D9D] text-center mb-6 md:my-10">
        {Data.hosting.title2}
      </h1>
      <form className="md:mt-[60px]">
        {/* select hajmi start */}
        <label className="float-left text-[#333333] font-semibold cursor-pointer">
          {card.hajmi}
        </label>
        <select
          className="float-right w-[96px] h-[30px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
          onChange={(e) =>
            changeHandler({
              name: "capacity",
              value: JSON.parse(e.target.value).value,
              cost: JSON.parse(e.target.value).cost,
            })
          }
        >
          {basicHosting?.capacity.map((item) => (
            <option
              className="dark:bg-white text-black"
              key={item.id}
              value={JSON.stringify(item)}
            >
              {item.value} MB
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
          onChange={(e) =>
            changeHandler({
              name: "domain",
              value: JSON.parse(e.target.value).value,
              cost: JSON.parse(e.target.value).cost,
            })
          }
        >
          {basicHosting?.domain.map((item) => (
            <option
              className="dark:bg-white text-black"
              key={item.id}
              value={JSON.stringify(item)}
            >
              {item.value} ta
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
        <select
          className="float-right w-[96px] h-[30px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
          onChange={(e) =>
            changeHandler({
              name: "subDomain",
              value: JSON.parse(e.target.value).value,
              cost: JSON.parse(e.target.value).cost,
            })
          }
        >
          {basicHosting?.subDomain.map((item) => (
            <option
              className="dark:bg-white text-black"
              key={item.id}
              value={JSON.stringify(item)}
            >
              {item.value} ta
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
        <select
          className="float-right w-[96px] h-[30px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
          onChange={(e) =>
            changeHandler({
              name: "db",
              value: JSON.parse(e.target.value).value,
              cost: JSON.parse(e.target.value).cost,
            })
          }
        >
          {basicHosting?.db.map((item) => (
            <option
              className="dark:bg-white text-black"
              key={item.id}
              value={JSON.stringify(item)}
            >
              {item.value} ta
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
            checked={toggle.domainUz}
            onChange={() =>
              changeHandler({
                name: "domainUz",
                value: toggle.domainUz,
                cost: basicHosting.domainUz,
              })
            }
          />
          <div
            onClick={() => {
              setToggle({ ...toggle, domainUz: !toggle.domainUz });
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
            onChange={() =>
              changeHandler({
                name: "pochta",
                value: toggle.pochta,
                cost: basicHosting.pochta,
              })
            }
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
            onChange={() =>
              changeHandler({
                name: "trafik",
                value: toggle.trafik,
                cost: basicHosting.trafik,
              })
            }
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
  );
};

export default Left;
