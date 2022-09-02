import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { HiOutlineX, HiOutlineChevronUp } from "react-icons/hi";
import Data from "../data/Data";
import "./Navbar.css";
const Navbar = () => {
  const [modal, setModal] = useState(false);
  // const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="shadow-md sticky top-0 bg-white z-50">
      {/* scroll to top start*/}
      <div
        onClick={() => scrollToTop()}
        className={`${
          visible ? "hidden" : "flex"
        } animate-bounce cursor-pointer w-[44px] h-[44px] bg-white shadow-md hover:shadow-lg fixed bottom-4 right-4 rounded-full mx-auto items-center hover:border `}
      >
        <HiOutlineChevronUp className="mx-auto w-4/6 h-4/6 font-thin text-[#1F3D9D]" />
      </div>
      {/* scroll to top end*/}

      {/* yuqorida chiquchi ma'lumotlar uchun start */}
      {visible ? (
        <div className=" bg-slate-600 hidden md:block h-[50px]">
          <div className="max-w-[75rem] px-2 grid grid-cols-8 mx-auto ">
            <div className="col-span-1 flex items-center">
              <h1>09:11</h1>
            </div>
            <div className="col-span-3 flex justify-between mx-5 items-center">
              <h1>09:11</h1>
              <h1>09:11</h1>
              <h1>09:11</h1>
            </div>
            <div className="col-span-4 flex justify-end items-center">
              <div className="mx-5">
                <h1>Icons</h1>
              </div>
              <div className="mx-5">
                <h1>Aloqa uchun</h1>
                <h1>+99873 244-05-35</h1>
              </div>
              <div className="w-[44px] h-[43px] bg-[#00A59C] flex justify-center items-center mx-5 rounded-md text-white">
                <form action="bg-[#00A59C]">
                  <select
                    value={localStorage.getItem("language")}
                    onChange={(e) => {
                      window.localStorage.setItem("language", e.target.value);
                      window.dispatchEvent(new Event("language"));
                    }}
                    className="bg-[#00A59C] outline-none"
                    name=""
                    id=""
                  >
                    <option className={``} value="uz">
                      Uz
                    </option>
                    <option className={``} value="ru">
                      Ru
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        false
      )}
      {/* yuqorida chiquchi ma'lumotlar uchun end */}
      <div className="container mx-auto px-2 md:mb-8 max-w-[75rem]">
        {/* navbar brend va category */}
        <div className="w-full inline-block border-blue-500 py-2">
          <div className="float-left inline">
            <Link to={"/"}>
              <img
                className="cursor-pointer md:w-[228px] w-[168px]"
                src={"./assets/logo/logo.png"}
                alt=""
              />
            </Link>
          </div>
          <div className="hidden md:float-right md:contents">
            {Data.category.map((elem, i) => (
              <Link key={elem.slug} to={`./${elem.slug}`}>
                <span className="md:float-right mt-8 align-middle text-[#333333] text-[#16px] lg:ml-14 md:ml-8 font-semibold cursor-pointer hover:text-[#00A59C]">
                  {elem.name}
                </span>
              </Link>
            ))}
          </div>
          <div
            onClick={() => setModal(!modal)}
            className={`md:hidden float-right w-[43px] h-[43px] mt-[21px] shadow-md hover:shadow-lg cursor-pointer right-2`}
          >
            <FaAlignRight className="mx-auto mt-[25%]" />
          </div>
        </div>
        {/* navbar brend va category */}

        {/* modal start */}
        {modal ? (
          <div className="w-full h-full backdrop-blur-sm bg-white/30  overflow-y-auto overflow-x-hidden fixed top-[85px] right-0 left-0 z-50 inset-0 h-modal md:h-full">
            <div className="w-5/6 bg-white mx-auto mt-4 rounded-sm shadow-md">
              <HiOutlineX
                onClick={() => setModal(false)}
                className="float-right mr-4 mt-4 cursor-pointer"
              />
              {Data.category.map((elem, i) => (
                <Link key={elem.slug} to={`./${elem.slug}`}>
                  <h1 className="mx-3 py-3 align-middle text-[#333333] text-[#16px] lg:ml-14 md:ml-8 font-semibold cursor-pointer hover:text-[#00A59C]">
                    {elem.name}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          false
        )}
        {/* modal end */}
      </div>
    </div>
  );
};

export default Navbar;
