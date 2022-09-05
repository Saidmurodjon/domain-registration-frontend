import React from "react";
import Form from "../aloqa/Form";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Registration from "../form/Registration";
const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  return (
    <div className="w-full h-full backdrop-blur-sm bg-gray-700/30 overflow-y-auto overflow-x-hidden fixed top-[0px] right-0 left-0 z-50 inset-0 h-modal md:h-full flex items-center justify-center">
      <div className="w-[95%] md:w-5/6 xl:w-[1200px] bg-white mx-auto mt-4 rounded-md shadow-md">
        <HiOutlineX
          onClick={() => {
            navigate(-1);
          }}
          className="float-right mr-4 mt-4 cursor-pointer"
        />
        <div className="grid md:grid-cols-2 ">
          {location.state.type === "registration" ? (
            <Registration />
          ) : (
            <Form type={"order"} />
          )}
          <div className="flex items-center justify-center">
            <img
              className="hidden md:content"
              src="./assets/user/user.png"
              alt="user"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
