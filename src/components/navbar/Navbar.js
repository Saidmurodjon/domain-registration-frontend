import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import Data from '../data/Data';
const Navbar = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="w-full inline-block border-blue-500 py-8">
        <div className="md:float-left block">
          <Link to={"/"}>
          <img className='cursor-pointer w-4/6' src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
            {Data.category.reverse().map((elem,i)=>(<Link key={elem.slug} to={`./${elem.slug}`}>
                <span className="md:float-right mt-2 align-middle text-[#333333] text-[#16px] ml-4 font-semibold cursor-pointer hover:text-[#00A59C]">
                  {elem.name}
                </span>
            </Link>))}
        </div>
      </div>
    </div>
  
  )
}

export default Navbar