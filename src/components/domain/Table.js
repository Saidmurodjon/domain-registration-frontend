import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import Data from "../data/Data";
const Table = ({ tableFunction, domain }) => {
  const duration = [
    { id: 1, month: 12, reg: 24000, strtch: 24000 },
    { id: 2, month: 24, reg: 48000, strtch: 24000 },
    { id: 3, month: 48, reg: 96000, strtch: 24000 },
  ];
  const [dur, setDur] = useState({});
  return (
    <>
      <div className="overflow-x-auto relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0)] rounded-none">
        <table className="hidden md:inline w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:bg-[#34495E] dark:text-white">
            <tr className="md:h-[77px] text-center divide-x divide-[#797979]">
              <th scope="col" className="py-3 px-6 w-1/4">
                {Data.domain.table.title1}
              </th>
              <th scope="col" className="py-3 px-6 w-1/4">
                {Data.domain.table.title2}
              </th>
              <th scope="col" className="py-3 px-6 w-1/4">
                {Data.domain.table.title3}
              </th>
              <th scope="col" className="py-3 px-6">
                {/* <span className="sr-only">Edit</span> */}
              </th>
            </tr>
          </thead>
          <tbody>
            {duration.map((elem) => (
              <tr
                key={elem.id}
                className="bg-white dark:bg-white dark:border-gray-700 text-black hover:bg-[#F1FAFF] dark:hover:bg-[#F1FAFF] md:h-[77px] text-center"
              >
                <td className="py-4 px-6">{elem.month} oy</td>
                <td className="py-4 px-6">{elem.reg} so'm</td>
                <td className="py-4 px-6">{elem.strtch} so'm</td>
                <td className="py-4 px-6">
                  <Button
                    ButtonFunction={tableFunction}
                    name={Data.domain.table.button}
                    styles={"md:w-[249px]"}
                    elem={elem}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* mobile */}
      <div className="md:hidden py-4 px-4 mx-auto w-[362px] h-[300px] rounded-md mb-6 border shadow-md bg-white">
        <h1 className="text-center text-[#00A59C] font-bold text-[20px]">
          DOMEN
        </h1>
        <div className="grid grid-cols-2 mx-auto">
          <div className="mt-[21px]">
            <h1 className="">{Data.domain.table.title1}</h1>
          </div>
          <div className="mx-auto mt-[21px] font-semibold">
            <form action="" className="">
              <select
                className="font-semibold cursor-pointer rounded dark:bg-[#00A59C] text-white outline-none text-center"
                onChange={(e) => setDur(JSON.parse(e.target.value))}
              >
                {/* <option className="mt-0">tanlang</option> */}
                {duration.map((elem) => (
                  <option
                    key={elem.id}
                    className="mt-0"
                    value={JSON.stringify(elem)}
                  >
                    {elem.month} oy
                  </option>
                ))}
              </select>
            </form>
          </div>
          {/*  */}
          <div className="mt-[21px]">
            <h1>{Data.domain.table.title2}</h1>
          </div>
          <div className="mx-auto mt-[21px] font-semibold">
            <h1>{domain.duration.reg} so'm</h1>
          </div>
          {/*  */}
          <div className="mt-[21px]">
            <h1>{Data.domain.table.title3}</h1>
          </div>
          <div className="mx-auto mt-[21px] font-semibold">
            <h1>{domain.duration.strtch} so'm</h1>
          </div>
          {/*  */}
        </div>
        <div className="flex items-end h-[105px]">
          <Button
            name={Data.domain.table.button}
            styles={"w-full"}
            ButtonFunction={tableFunction}
            elem={dur}
          />
        </div>
      </div>
      {/* mobile */}
    </>
  );
};

export default Table;
