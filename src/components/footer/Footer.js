import React from "react";
import { Link } from "react-router-dom";
import Data from "../data/Data";
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
            <span className="hidden md:contents self-center text-1xl text-[#FFFFFF]">
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
            &nbsp;
            <span className="self-center text-1xl dark:text-white w-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              vero? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis eius id mollitia voluptas fugit cumque, porro distinctio.
              Dolore, minima laboriosam?
            </span>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/4 text-center my-12">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Menyu
            </h2>
            &nbsp;
            <span className="self-center text-1xl dark:text-white w-10">
              {Data.category.reverse().map((item, index) => (
                <Link key={index} to={`./${item.slug}`}>
                  <h3 className="text-[#FFFFFF] hover:text-[#00A59C] cursor-pointer">
                    {item.name}
                  </h3>
                </Link>
              ))}
            </span>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/4 my-12">
            <span className="self-center text-1xl dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              vero? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis eius id mollitia voluptas fugit cumque, porro distinctio.
              Dolore, minima laboriosam?
            </span>
          </div>
        </div>
        {/* <div className="md:flex md:justify-between mt-12">
          <div className="mb-6 md:w-1/2">
            <span className="self-center text-1xl text-black w-10">
              {icons.map((item, index) => (
                <Link key={index} to={`./${item.slug}`}>
                  <div className="w-10 h-10 inline-flex mx-5  bg-[#D9D9D9] hover:bg-[#00A59C]">
                    <img className="fill-black" src={item.url} alt="sa" />
                  </div>
                </Link>
              ))}
            </span>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/2">
            <span className="self-center text-1xl dark:text-white w-10">
              {icons.map((item, index) => (
                <Link key={index} to={`./${item.slug}`}>
                  <h3 className="text-[#FFFFFF] hover:text-[#00A59C] inline cursor-pointer">
                    {item.url}
                  </h3>
                </Link>
              ))}
            </span>
          </div>
        </div> */}
        <hr className="my-6 border-[#ffffffb4] sm:mx-auto dark:border-gray-700 lg:my-8" />
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
