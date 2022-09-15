import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Button from "../button/Button";
import Data from "../data/Data";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Domain = ({ props }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState({
    state: false,
    aktiv: false,
  });
  const [domain, setDomain] = useState({
    domainName: "",
    zone: "uz",
    status: -1,
  });
  // const [data, setData] = useState([]);
  const Search = async () => {
    try {
      const res = await axios.get(
        `${config.SERVER_URL}whois?domain=${domain.domainName}&zone=${domain.zone}`
      );
      if (res.status === 200) {
        // setData(res.data);
        if (res.data.sorryButDomain) {
          setStatus({ ...status, state: true, aktiv: false });
        } else {
          setStatus({ ...status, state: true, aktiv: true });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {Data ? (
        <div id={`domain`} className="md:mt-[70px] max-w-[1200px] mx-auto ">
          <div className="px-2 md:px-0">
            <h1 className=" text-[#1F3D9D] text-[24px] md:text-[48px] text-center font-semibold">
              {Data.domain.title}
            </h1>
            <hr className="border-[#00A59C] w-[90px] mx-auto" />
            <h2 className="md:w-[340px] mx-auto text-[#797979] my-6 text-center">
              {Data.domain.about}
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex md:w-[673px] mx-auto mb-10">
                <div className="relative w-full">
                  <input
                    type="text"
                    className={`block p-2 h-[60px] w-full z-20 outline-none rounded-lg pl-[70px] text-xl ${
                      status.state
                        ? status.aktiv
                          ? "border-2 border-red-600 text-red-600"
                          : "border-2 border-green-600 text-green-600"
                        : "border-2 border-white text-gray-900"
                    }`}
                    placeholder=""
                    required=""
                    onChange={(e) => {
                      setDomain({ ...domain, domainName: e.target.value });
                      setStatus({ ...status, state: false, aktiv: false });
                    }}
                  />
                  <h1 className="absolute top-0 left-[0px] p-[16px] font-medium text-center text-xl">
                    www.{" "}
                  </h1>
                  <h1 className="absolute top-0 right-[60px] p-[16px] font-medium text-center text-xl ">
                    .uz
                  </h1>
                  <button
                    onClick={() => Search()}
                    className="absolute top-0 right-0 p-[18px] text-sm font-medium text-white hover:text-black bg-[#00A59C] rounded-r-lg outline-none hover:bg-transparent focus:outline-none dark:bg-[#00A59C] dark:hover:bg-transparent"
                  >
                    <FiSearch className="text-2xl" />
                  </button>
                </div>
              </div>
            </form>
            <h2
              className={`mx-auto text-[#797979] md:text-2xl mt-6 mb-8 text-center ${
                status.state
                  ? status.aktiv
                    ? "text-red-600"
                    : "text-green-600"
                  : "hidden"
              }`}
            >
              {status.state
                ? status.aktiv
                  ? Data.domain.aktive
                  : Data.domain.noAktive
                : false}
            </h2>
          </div>

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
                <tr className="bg-white dark:bg-white dark:border-gray-700 text-black hover:bg-[#F1FAFF] dark:hover:bg-[#F1FAFF] md:h-[77px] text-center">
                  <td className="py-4 px-6">Sliver</td>
                  <td className="py-4 px-6">Laptop</td>
                  <td className="py-4 px-6">$2999</td>
                  <td className="py-4 px-6">
                    <Button
                      ButtonFunction={() =>
                        navigate("/user", {
                          state: { type: "domain", item: {} },
                        })
                      }
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
                      ButtonFunction={() =>
                        navigate("/user", {
                          state: { type: "domain", item: {} },
                        })
                      }
                      name={Data.domain.table.button}
                      styles={"md:w-[249px]"}
                    />
                  </td>
                </tr>
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
                    className="outline-none text-[#00A59C] font-semibold"
                    name=""
                    id=""
                  >
                    <option className="mt-0" value="">
                      1 yil
                    </option>
                  </select>
                </form>
              </div>
              {/*  */}
              <div className="mt-[21px]">
                <h1>{Data.domain.table.title2}</h1>
              </div>
              <div className="mx-auto mt-[21px] font-semibold">
                <h1>narhi</h1>
              </div>
              {/*  */}
              <div className="mt-[21px]">
                <h1>{Data.domain.table.title3}</h1>
              </div>
              <div className="mx-auto mt-[21px] font-semibold">
                <h1>narhi</h1>
              </div>
              {/*  */}
            </div>
            <div className="flex items-end h-[105px]">
              <Button
                name={Data.domain.table.button}
                styles={"w-full"}
                ButtonFunction={() =>
                  navigate("/user", { state: { type: "domain", item: props } })
                }
              />
            </div>
          </div>
          {/* mobile */}
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
      ) : (
        false
      )}
    </>
  );
};

export default Domain;
