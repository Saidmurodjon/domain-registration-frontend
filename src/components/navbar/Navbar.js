import React from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import Data from "../data/Data";
import "./Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [modal, setModal] = useState(false);
  console.log(modal);
  return (
    <div className="shadow-md sticky top-0 bg-white z-50">
      <div className="container mx-auto px-2 md:mb-8 max-w-[75rem]">
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
            {Data.category.reverse().map((elem, i) => (
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
        {/* modal */}
        {modal ? (
          <div className="w-full h-full backdrop-blur-sm bg-white/30  overflow-y-auto overflow-x-hidden fixed top-[85px] right-0 left-0 z-50 inset-0 h-modal md:h-full">
            <div className="w-5/6 bg-white mx-auto mt-4 rounded-sm shadow-md">
              <HiOutlineX onClick={()=>setModal(false)} className="float-right mr-4 mt-4 cursor-pointer"/>
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
      </div>
    </div>
  );
};

export default Navbar;
