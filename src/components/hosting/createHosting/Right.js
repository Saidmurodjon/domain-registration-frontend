import React, { useState } from "react";
import Button from "../../button/Button";
import Data from "../../data/Data";

const Right = ({ changeHandler, basic, send, basicHosting }) => {
  const [toggle, setToggle] = useState({
    backUp: basic.backUp,
    ftp: basic.ftp,
    dns: basic.dns,
    access_log: basic.access_log,
  });

  const card = Data.hosting.card;
  return (
    <div className="float-left px-3 md:px-[120px]">
      <form
        className="md:mt-[130px]"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="float-left text-[#333333] font-semibold cursor-pointer">
          {card.backup}
        </label>
        <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={toggle.backUp}
            onChange={() =>
              changeHandler({
                name: "backUp",
                value: toggle.backUp,
                cost: basicHosting.backUp,
              })
            }
          />
          <div
            onClick={() => {
              setToggle({ ...toggle, backUp: !toggle.backUp });
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
          ></div>
        </label>
        <br />
        <hr className="border-t dark:border-gray-100 my-4" />
        <label className="float-left text-[#333333] font-semibold cursor-pointer">
          {card.ftp}
        </label>
        <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={toggle.ftp}
            onChange={() =>
              changeHandler({
                name: "ftp",
                value: toggle.ftp,
                cost: basicHosting.ftp,
              })
            }
          />
          <div
            onClick={() => {
              setToggle({ ...toggle, ftp: !toggle.ftp });
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
          ></div>
        </label>
        <br />
        <hr className="border-t dark:border-gray-100 my-4" />
        <label className="float-left text-[#333333] font-semibold cursor-pointer">
          {card.dns}
        </label>
        <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={toggle.dns}
            onChange={() =>
              changeHandler({
                name: "dns",
                value: toggle.dns,
                cost: basicHosting.dns,
              })
            }
          />
          <div
            onClick={() => {
              setToggle({ ...toggle, dns: !toggle.dns });
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
          ></div>
        </label>
        <br />
        <hr className="border-t dark:border-gray-100 my-4" />
        <label className="float-left text-[#333333] font-semibold cursor-pointer">
          {card.access_log}
        </label>
        <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={toggle.access_log}
            onChange={() =>
              changeHandler({
                name: "access_log",
                value: toggle.access_log,
                cost: basicHosting.access_log,
              })
            }
          />
          <div
            onClick={() => {
              setToggle({ ...toggle, access_log: !toggle.access_log });
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
          ></div>
        </label>
        <br />
        <hr className="border-t dark:border-gray-100 my-4" />
        <p className="text-gray-500">{card.total}</p>
        <h3 className="text-4xl font-bold ">
          {basic.price} <span className="text-xl font-medium">so'm</span>
        </h3>
        <div className="mx-auto mt-12">
          <Button ButtonFunction={send} name={card.button} styles={"w-full"} />
        </div>
      </form>
    </div>
  );
};

export default Right;
