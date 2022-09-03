import React from "react";
import { FiSearch } from "react-icons/fi";
import Button from "../button/Button";
import Data from "../data/Data";
const Domain = ({ props }) => {
  return (
    <>
      <div className="md:mt-[70px] max-w-[1200px] mx-auto">
        <div className="px-2 md:px-0">
          <h1 className=" text-[#1F3D9D] text-[24px] md:text-[48px] text-center font-semibold">
            {Data.domain.title}
          </h1>
          <hr className="border-[#00A59C] w-[90px] mx-auto" />
          <h2 className="md:w-[340px] mx-auto text-[#797979] my-6 text-center">
            {Data.domain.about}
          </h2>
          <form>
            <div className="flex md:w-[673px] mx-auto mb-10">
              <div className="relative w-full">
                <input
                  type="search"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 outline-none rounded-lg border"
                  placeholder=""
                  required=""
                />
                <button className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white hover:text-black bg-[#00A59C] rounded-r-lg outline-none hover:bg-transparent focus:outline-none dark:bg-[#00A59C] dark:hover:bg-transparent">
                  <FiSearch className="text-xl" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="overflow-x-auto relative shadow-md rounded-none!">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#34495E] dark:text-white">
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
              <tr className="bg-white dark:bg-white dark:border-gray-700 text-black hover:bg-[#F1FAFF] dark:hover:bg-[#F1FAFF] md:h-[77px] text-center">
                <td className="py-4 px-6">Sliver</td>
                <td className="py-4 px-6">Laptop</td>
                <td className="py-4 px-6">$2999</td>
                <td className="py-4 px-6">
                  <Button
                    name={Data.domain.table.button}
                    styles={"md:w-[249px]"}
                  />
                </td>
              </tr>
              <tr className="bg-white border-t dark:bg-white dark:border-gray-200 text-black hover:bg-[#F1FAFF] dark:hover:bg-[#F1FAFF] md:h-[77px] text-center">
                <td className="py-4 px-6">Sliver</td>
                <td className="py-4 px-6">Laptop</td>
                <td className="py-4 px-6">$2999</td>
                <td className="py-4 px-6">
                  <Button
                    name={Data.domain.table.button}
                    styles={"md:w-[249px]"}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* izoh */}
        <div className="px-2 md:px-0 my-2 md:my-6">
          <h1 className="md:w-[700px] font-semibold">
            "{Data.domain.information.title1}"
            <span className="text font-normal text-[#797979]">
              {" "}
              {Data.domain.information.about1}
            </span>
          </h1>
          <h1 className="md:w-[700px] font-semibold">
            "{Data.domain.information.title2}"
            <span className="text font-normal text-[#797979]">
              {" "}
              {Data.domain.information.about2}
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Domain;
