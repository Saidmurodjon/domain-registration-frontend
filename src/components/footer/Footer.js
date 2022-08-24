import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Data from "../data/Data";
const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-[#34495E]">
      <div className="max-w-[1240px] mx-auto">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/4 mx-5">
            <img src={logo} className="mr-5 h-15" alt="FlowBite Logo" />
            &nbsp;
            <span className="hidden md:contents self-center text-1xl text-[#FFFFFF]">
              Markaz viloyat hokimligida IT texnalogiyalarini rivojlantirish
              maqsadida 2008 yildan buyon faoliyat yuritib kelmoqda. Asosiy
              vazifalari davlat organlari, korxona va tashlikotlarda sohani
              rivojlantirish yangi bosqichlarga olib chiqish.
            </span>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/4 mx-5">
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
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Menyu
            </h2>
            &nbsp;
            <span className="self-center text-1xl dark:text-white w-10">
              {Data.category.reverse().map((item, index) => (
                <Link key={index} to={`./${item.slug}`}>
                  <h3 className="text-[#FFFFFF] hover:text-[#00A59C] cursor-pointer">{item.name}</h3>
                </Link>
              ))}
            </span>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/4">
            <span className="self-center text-1xl dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              vero? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis eius id mollitia voluptas fugit cumque, porro distinctio.
              Dolore, minima laboriosam?
            </span>
          </div>
        </div>
        <hr className="my-6 border-[#ffffffb4] sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-auto">
            Sayt ishlab chiqildi:{" "}
            <a href="https://" className="hover:underline text-white">
              "Space Group"
            </a>
            {" "}tomonidan
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      
  
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
