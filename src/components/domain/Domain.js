import React from "react";
import { FiSearch } from "react-icons/fi";
import Button from "../button/Button";
const Domain = ({ props }) => {
  return (
    <>
     <div className="md:mt-[70px] max-w-[1200px] mx-auto">
     <div className="px-2 md:px-0">
          <h1 className=" text-[#1F3D9D] text-[24px] md:text-[48px] md:text-center font-semibold">
            DOMENLARNI RO‘YXATGA OLISH
          </h1>
          <hr className="border-[#00A59C] w-[90px] mx-auto" />
          <h2 className="md:w-[340px] mx-auto text-[#797979] my-6">
            Domen bo‘sh yoki bo‘sh emasligini tekshiring! So‘ng domenni
            ro‘yxatdan o‘tkazishga o‘ting.
          </h2>
          <form>
            <div className="flex md:w-[673px] mx-auto mb-10">
              <div className="relative w-full">
                {/* <h3 className="absolute top-0 left-0 p-2.5 text-sm font-medium text-white">w.w.w</h3> */}
                <input
                  type="search"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 outline-none rounded-lg border"
                  placeholder=""
                  required=""
                />
                <button
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white hover:text-black bg-[#00A59C] rounded-r-lg outline-none hover:bg-transparent focus:outline-none dark:bg-[#00A59C] dark:hover:bg-transparent"
                >
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
                Color
              </th>
              <th scope="col" className="py-3 px-6 w-1/4">
                Category
              </th>
              <th scope="col" className="py-3 px-6 w-1/4">
                Price
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
                <Button name={"Buyurtma berish"} styles={"md:w-[249px]"} />
              </td>
            </tr>
            <tr className="bg-white border-t dark:bg-white dark:border-gray-200 text-black hover:bg-[#F1FAFF] dark:hover:bg-[#F1FAFF] md:h-[77px] text-center">
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6">
                <Button name={"Buyurtma berish"}  styles={"md:w-[249px]"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* izoh */}
      <div className="px-2 md:px-0 my-2 md:my-6">
        <h1 className="md:w-[700px] font-semibold">Lorem, ipsum. <span className="text font-normal text-[#797979]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, error blanditiis. Dolor, laudantium porro totam vitae similique sunt asperiores delectus!</span></h1>
      </div>
     </div>
    </>
  );
};

export default Domain;
