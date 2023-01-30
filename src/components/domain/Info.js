import React from 'react'
import Data from "../data/Data";
const Info = () => {
  return (
    <>
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
      </div></>
  )
}

export default Info