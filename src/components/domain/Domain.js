import React from "react";
import Button from "../button/Button";
const Domain = ({ props }) => {
  return (
    <>
      <div className="overflow-x-auto relative shadow-md max-w-[1200px] mx-auto rounded-none!">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
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
                <Button name={"Buyurtma berish"} />
              </td>
            </tr>
            <tr className="bg-white border-t dark:bg-white dark:border-gray-200 text-black hover:bg-[#F1FAFF] dark:hover:bg-[#F1FAFF] md:h-[77px] text-center">
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6">
                <Button name={"Buyurtma berish"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Domain;
