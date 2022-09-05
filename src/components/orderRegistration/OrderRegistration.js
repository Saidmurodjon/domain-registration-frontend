import React from "react";
import Form from "../aloqa/Form";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate ,useLocation} from "react-router-dom";
import Registration from "../form/Registration";
const OrderRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  return (
    <div className="w-full h-full backdrop-blur-sm bg-gray-700/30 overflow-y-auto overflow-x-hidden fixed top-[0px] right-0 left-0 z-50 inset-0 h-modal md:h-full flex md:items-center justify-center">
      <div className="w-[95%] md:w-5/6 xl:w-[1200px] bg-white mx-auto mt-4 rounded-md shadow-md">
       <div className="w-full">
       <HiOutlineX
          onClick={() => {
            navigate(-1);
          }}
          className=" mr-4 mt-4 cursor-pointer float-right"
        />
       </div>
        <div className="grid md:grid-cols-2 w-full ">
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

export default OrderRegistration;
