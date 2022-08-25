import React, {useState}from 'react'
import test from "../../../test.json";

const Left = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <> <div className="float-left px-3 md:px-[120px]">
    <h1 className="text-semibold text-xl font-semibold cursor-pointer text-[#1F3D9D] text-center my:4 md:my-10">
      Lorem ipsum dolor sit.
    </h1>
    <form className="md:mt-[60px]" action="">
      <label
        className="float-left text-[#333333] font-semibold cursor-pointer"
        htmlFor="hajmi"
      >
        Hajmi
      </label>
      <select
        className="float-right w-[96px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
        id="hajmi"
      >
        {test.map((item) => (
          <option
            className="dark:bg-white text-black"
            key={item.narxi}
            value={item.domain}
          >
            {item.hajmi} MB
          </option>
        ))}
      </select>
      <br />
      <hr className="border-t dark:border-gray-100 my-4" />
      <label
        className="float-left text-[#333333] font-semibold cursor-pointer"
        htmlFor="domain"
      >
        Domain
      </label>
      <select
        className="float-right w-[96px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
        id="domain"
      >
        {test.map((item) => (
          <option
            className="dark:bg-white text-black"
            key={item.narxi}
            value={item.domain}
          >
            {item.hajmi} MB
          </option>
        ))}
      </select>
      <br />
      <hr className="border-t dark:border-gray-100 my-4" />
      <label
        className="float-left text-[#333333] font-semibold cursor-pointer"
        htmlFor="d"
      >
        Domain
      </label>
      <select
        className="float-right w-[96px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
        id="d"
      >
        {test.map((item) => (
          <option
            className="dark:bg-white text-black"
            key={item.narxi}
            value={item.domain}
          >
            {item.hajmi} MB
          </option>
        ))}
      </select>
      <br />
      <hr className="border-t dark:border-gray-100 my-4" />
      <label
        className="float-left text-[#333333] font-semibold cursor-pointer"
        htmlFor="d"
      >
        Domain
      </label>
      <select
        className="float-right w-[96px] cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
        id="d"
      >
        {test.map((item) => (
          <option
            className="dark:bg-white text-black"
            key={item.narxi}
            value={item.domain}
          >
            {item.hajmi} MB
          </option>
        ))}
      </select>
      <br />
      <hr className="border-t dark:border-gray-100 my-4" />
      <label
        className="float-left text-[#333333] font-semibold cursor-pointer"
        htmlFor="d"
      >
        Domain
      </label>
      <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={enabled}
          readOnly
        />
        <div
          onClick={() => {
            setEnabled(!enabled);
          }}
          className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
        ></div>
      </label>
      <br />
      <hr className="border-t dark:border-gray-100 my-4" />
      <label
        className="float-left text-[#333333] font-semibold cursor-pointer"
        htmlFor="d"
      >
        Domain
      </label>
      <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={enabled}
          readOnly
        />
        <div
          onClick={() => {
            setEnabled(!enabled);
          }}
          className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
        ></div>
      </label>
      <br />
      <hr className="border-t dark:border-gray-100 my-4" />
      <label
        className="float-left text-[#333333] font-semibold cursor-pointer"
        htmlFor="d"
      >
        Domain
      </label>
      <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={enabled}
          readOnly
        />
        <div
          onClick={() => {
            setEnabled(!enabled);
          }}
          className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
        ></div>
      </label>
      <br />
      <hr className="border-t dark:border-gray-100 my-4" />
    </form>
  </div></>
  )
}

export default Left