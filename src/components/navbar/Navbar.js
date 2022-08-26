import React from 'react'
import { Link } from "react-router-dom";
import Data from '../data/Data';
const Navbar = () => {
  return (
    <div className="container mx-auto px-2 md:mb-8 md:w-[1200px]">
      <div className="w-full inline-block border-blue-500 py-2">
        <div className="md:float-left block">
          <Link to={"/"}>
          <img className='cursor-pointer md:w-[228px] w-[168px]' src={"./assets/logo/logo.png"} alt="" />
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
            {Data.category.reverse().map((elem,i)=>(<Link key={elem.slug} to={`./${elem.slug}`}>
                <span className="md:float-right mt-8 align-middle text-[#333333] text-[#16px] md:ml-14 sm:ml font-semibold cursor-pointer hover:text-[#00A59C]">
                  {elem.name}
                </span>
            </Link>))}
        </div>
      </div>
    </div>
  
  )
}

export default Navbar