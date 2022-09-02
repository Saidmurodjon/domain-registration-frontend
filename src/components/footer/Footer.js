import React from "react";
import { Link } from "react-router-dom";
import Data from "../data/Data";
import { RiMapPin2Line } from "react-icons/ri";
import { TbPhonePlus } from "react-icons/tb";
// const icons = [
//   {
//     url: "./assets/icons/instagram.png",
//     slug: "#",
//   },
//   {
//     url: "./assets/icons/google.png",
//     slug: "",
//   },
//   {
//     url: "./assets/icons/twitter.png",
//     slug: "",
//   },
//   {
//     url: "./assets/icons/facebook.png",
//     slug: "",
//   },
// ];
const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-[#34495E]">
      <div className="max-w-[1240px] mx-auto">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/4 mx-5">
            <img
              src={"./assets/logo/logoWhite.png"}
              className="mr-5 h-15 m-3"
              alt="FlowBite Logo"
            />
            &nbsp;
            <span className="hidden md:contents self-center text-1xl text-1xl dark:text-[#d0d0d0] w-5/6 text-start p-2">
              Markaz viloyat hokimligida IT texnalogiyalarini rivojlantirish
              maqsadida 2008 yildan buyon faoliyat yuritib kelmoqda. Asosiy
              vazifalari davlat organlari, korxona va tashlikotlarda sohani
              rivojlantirish yangi bosqichlarga olib chiqish.
            </span>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/4 my-12 hidden md:inline">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Manzil
            </h2>
            <div className="flex">
              <RiMapPin2Line className="mt-3 dark:text-white" />
              <h3 className="text-1xl dark:text-[#d0d0d0] w-5/6 text-start p-2">
                Farg‘ona shahar Alisher Navoi ko‘chasi 15-uy. Mo‘ljal: Aziya
                mehmonxonasi
              </h3>
            </div>
            <div className="flex">
              <TbPhonePlus className="mt-6 dark:text-white" />
              <h3 className="text-1xl dark:text-[#d0d0d0] w-5/6 text-start p-2 flex-none">
                +99890 166 55 66
                <br />
                +99890 166 55 66
              </h3>
            </div>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/4 text-center my-12">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-[#ffff]">
              Menyu
            </h2>
            &nbsp;
            <span className="self-center text-1xl dark:text-[#d0d0d0] w-10">
              {Data.category.reverse().map((item, index) => (
                <Link key={index} to={`./${item.slug}`}>
                  <h3 className="hover:text-[#00A59C] cursor-pointer">
                    {item.name}
                  </h3>
                </Link>
              ))}
            </span>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/4 my-12">
            <div className="grid grid-cols-2 w-5/6">
              <div className="">
                <h1 className="dark:text-[#d0d0d0]">Bugun 20-iyul</h1>
                <h1 className="dark:text-[#d0d0d0]">Chorshanba</h1>
              </div>
              <div className="border-l flex justify-center">
                <form action="" className="mx-auto dark:text-[#d0d0d0]">
                  <select className="bg-transparent outline-none" name="" id="">
                    <option className="" value="">Farg'ona</option>
                  </select>
                </form>
              </div>
              <div className="">
                <img src={`./assets/weather/sun.png`} alt="" />
              </div>
              <div className="flex items-center justify-center">
                <h1 className="text-[32px] font-semibold text-white">+33</h1>
              </div>
              <div className="s col-span-2">
                <h1 className="text-[14px] dark:text-[#d0d0d0]">Soʼngi martta saytdagi maʼlumotlar <p className="font-semibold inline text-white">20.07.2022</p> kuni yangilangan</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="bg-red-300">
            <h1>social</h1>
          </div>
          <div className="bg-red-700">
            <h1>card</h1>
          </div>
        </div>
        <hr className="my-6 border-[#ffffffb4] sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-auto">
            Sayt ishlab chiqildi:{" "}
            <a href="https://" className="hover:underline text-white">
              "Space Group"
            </a>{" "}
            tomonidan
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
