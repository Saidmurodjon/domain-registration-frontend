import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
const Navbar = () => {
    const categories=[
    {name:"Bosh sahifa",slug:""},
    {name:"Domen",slug:"domen"},
    {name:"Hosting",slug:"hosting"},
    {name:"Pochta",slug:"pochta"},
    {name:"Sayt",slug:"sayt"},
    {name:"Aloqa",slug:"aloqa"},

]
  return (
    <div className="container mx-auto px-10 mb-8 shadow-current">
      <div className="w-full inline-block border-blue-500 py-8">
        <div className="md:float-left block">
          <Link to={"/"}>
          <img className='cursor-pointer w-4/6' src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
            {categories.reverse().map((elem,i)=>(<Link key={elem.slug} to={`./${elem.slug}`}>
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