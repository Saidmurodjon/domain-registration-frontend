import React from "react";
import { Link } from "react-router-dom";
import Data from "../data/Data";
import { RiMapPin2Line, RiGoogleFill, RiInstagramLine } from "react-icons/ri";
import { TbPhonePlus } from "react-icons/tb";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      {Data ? (
        <footer className="p-4 bg-white sm:p-6 dark:bg-[#34495E]">
          <div className="max-w-[1240px] mx-auto">
            <div className="md:flex md:justify-between justify-center">
              <div className="lg:mb-6 mb-0 md:w-1/4 h-max mx-5">
                <img
                  src={Data.footer.logo}
                  className="lg:mr-5 h-15 m-3 mx-auto md:mx-0 w-[204px] h-[84px]"
                  alt="FlowBite Logo"
                />
                &nbsp;
                <span className="hidden md:contents self-center text-1xl text-1xl dark:text-[#d0d0d0] w-5/6 text-start p-2">
                  {Data.footer.about}
                </span>
              </div>
              <div className="mb-6 md:mb-0 md:w-1/4 my-12 hidden md:inline  lg:pl-16">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {Data.footer.title1}
                </h2>
                <div className="flex">
                  <RiMapPin2Line className="mt-3 dark:text-white" />
                  <h3 className="text-1xl dark:text-[#d0d0d0] w-5/6 text-start p-2">
                    {Data.footer.map}
                  </h3>
                </div>
                <div className="flex">
                  <TbPhonePlus className="mt-6 dark:text-white" />
                  <h3 className="text-1xl dark:text-[#d0d0d0] w-5/6 text-start p-2 flex-none">
                    {Data.footer.contact1}
                    <br />
                    {Data.footer.contact2}
                  </h3>
                </div>
              </div>
              <div className="mb-6 md:mb-0 md:w-1/4 md:my-12 flex justify-center">
                <div className="w-max">
                  <h2 className="md:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-[#ffff]">
                    {Data.footer.title2}
                  </h2>
                  &nbsp;
                  <div className="text-start mx-auto text-1xl dark:text-[#d0d0d0]">
                    {Data.category.reverse().map((item, index) => (
                      <Link key={index} to={`./${item.slug}`}>
                        <h3 className="hover:text-[#00A59C]">{item.name}</h3>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-6 md:mb-0 md:w-1/4 my-12 hidden lg:flex">
                <div className="grid grid-cols-2 w-5/6">
                  <div className="">
                    <h1 className="dark:text-[#d0d0d0]">Bugun 20-iyul</h1>
                    <h1 className="dark:text-[#d0d0d0]">Chorshanba</h1>
                  </div>
                  <div className="border-l flex justify-center">
                    <form action="" className="mx-auto dark:text-[#d0d0d0]">
                      <select
                        className="bg-transparent outline-none"
                        name=""
                        id=""
                      >
                        <option className="" value="">
                          Farg'ona
                        </option>
                      </select>
                    </form>
                  </div>
                  <div className="">
                    <img src={`./assets/weather/sun.png`} alt="" />
                  </div>
                  <div className="flex items-center justify-center">
                    <h1 className="text-[32px] font-semibold text-white">
                      +33
                    </h1>
                  </div>
                  <div className="s col-span-2">
                    <h1 className="text-[14px] dark:text-[#d0d0d0]">
                      {Data.footer.update}
                      <p className="font-semibold inline text-white">
                        20.07.2022
                      </p>{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:my-4 lg:pl-6">
              <div className="flex items-center justify-center lg:justify-start">
                <Link to={`/`}>
                  <FaFacebookF className="w-[28px] h-[28px] bg-[#d0d0d0] p-1 text-[#34495E] hover:bg-[#00A59C] hover:text-white mr-4" />
                </Link>
                <Link to={`/`}>
                  <FaTwitter className="w-[28px] h-[28px] bg-[#d0d0d0] p-1 text-[#34495E] hover:bg-[#00A59C] hover:text-white mr-4" />
                </Link>
                <Link to={`/`}>
                  <RiGoogleFill className="w-[28px] h-[28px] bg-[#d0d0d0] p-1 text-[#34495E] hover:bg-[#00A59C] hover:text-white mr-4" />
                </Link>
                <Link to={`/`}>
                  <RiInstagramLine className="w-[28px] h-[28px] bg-[#d0d0d0] p-1 text-[#34495E] hover:bg-[#00A59C] hover:text-white mr-4" />
                </Link>
              </div>
              <div className="flex justify-end">
                <div className="hidden lg:flex">
                  <img
                    src={`./assets/footer/image 2.png`}
                    alt=""
                    className="mr-4 inline"
                  />
                  <img
                    src={`./assets/footer/image 3.png`}
                    alt=""
                    className="mr-4 inline"
                  />
                  <img
                    src={`./assets/footer/image 4.png`}
                    alt=""
                    className="mr-4 inline"
                  />
                  <img
                    src={`./assets/footer/image 5.png`}
                    alt=""
                    className="mr-4 inline"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-2 border-[#ffffffb4] sm:mx-auto dark:border-[#797979] w-full lg:my-4" />
          <div className="flex items-center sm:justify-between">
            <span className="text-sm text-gray-500 text-center dark:text-gray-400 mx-auto">
              {Data.footer.createdBy}
              <Link
                className="text-white font-semibold hover:shadow-sm "
                to="/"
              >
                {" "}
                “SPACE GROUP”
              </Link>
            </span>
          </div>
        </footer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Footer;
