import React, { useState } from "react";
import Data from "../../data/Data";

const Left = ({ changeHandler, basic }) => {
  const [toggle, setToggle] = useState({
    domainuz: basic.domainuz,
    pochta: basic.pochta,
    trafik: basic.trafik,
  });
  const card = Data.hosting.card;
  const data = {
    capacity: [
      { id: 1, hajmi: 100, cost: 10000 },
      { id: 2, hajmi: 200, cost: 20000 },
      { id: 3, hajmi: 300, cost: 30000 },
    ],
    domain: [
      { id: 1, domain: 1, cost: 10000 },
      { id: 2, domain: 2, cost: 20000 },
      { id: 3, domain: 3, cost: 30000 },
    ],
    subDomain: [
      { id: 1, subdomain: 1, cost: 10000 },
      { id: 2, subdomain: 2, cost: 20000 },
      { id: 3, subdomain: 3, cost: 30000 },
    ],
    DB: [
      { id: 1, db: 1, cost: 10000 },
      { id: 2, db: 2, cost: 20000 },
      { id: 3, db: 3, cost: 30000 },
    ],
  };
  return (
    <>
      {" "}
      {Data ? (
        <div className="float-left px-3 md:px-[120px]">
          <h1 className="text-semibold text-xl font-semibold cursor-pointer text-[#1F3D9D] text-center mb-6 md:my-10">
            {Data.hosting.title2}
          </h1>
          <form className="md:mt-[60px]" action="">
            {/* select hajmi start */}
            <label className="float-left text-[#333333] font-semibold cursor-pointer">
              {card.hajmi}
            </label>
            <select
              className="float-right w-[96px] h-[30px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
              onChange={(e) =>
                changeHandler({
                  name: "hajmi",
                  value: JSON.parse(e.target.value).hajmi,
                  cost: JSON.parse(e.target.value).cost,
                })
              }
            >
              <option className="dark:bg-white text-[#797979]">tanlang</option>
              {data.capacity.map((item) => (
                <option
                  className="dark:bg-white text-black"
                  key={item.id}
                  value={JSON.stringify(item)}
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
              onChange={(e) =>
                changeHandler({
                  name: "domain",
                  value: JSON.parse(e.target.value).domain,
                  cost: JSON.parse(e.target.value).cost,
                })
              }
            >
              <option className="dark:bg-white text-[#797979]">tanlang</option>
              {data.domain.map((item) => (
                <option
                  className="dark:bg-white text-black"
                  key={item.id}
                  value={JSON.stringify(item)}
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
            <select
              className="float-right w-[96px] h-[30px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
              onChange={(e) =>
                changeHandler({
                  name: "subdomain",
                  value: JSON.parse(e.target.value).subdomain,
                  cost: JSON.parse(e.target.value).cost,
                })
              }
            >
              <option className="dark:bg-white text-[#797979]">tanlang</option>
              {data.subDomain.map((item) => (
                <option
                  className="dark:bg-white text-black"
                  key={item.id}
                  value={JSON.stringify(item)}
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
            <select
              className="float-right w-[96px] h-[30px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
              onChange={(e) =>
                changeHandler({
                  name: "db",
                  value: JSON.parse(e.target.value).db,
                  cost: JSON.parse(e.target.value).cost,
                })
              }
            >
              <option className="dark:bg-white text-[#797979]">tanlang</option>
              {data.DB.map((item) => (
                <option
                  className="dark:bg-white text-black"
                  key={item.id}
                  value={JSON.stringify(item)}
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
                  changeHandler({ name: "domainuz", value: toggle.domainuz })
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
                onChange={() =>
                  changeHandler({ name: "pochta", value: toggle.pochta })
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
                  changeHandler({ name: "trafik", value: toggle.trafik })
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
      ) : (
        false
      )}
    </>
  );
};

export default Left;
