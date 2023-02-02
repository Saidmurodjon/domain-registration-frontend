import React from "react";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import SignInComponent from "../../components/auth/SingIn"; 

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen md:h-modal backdrop-blur-sm bg-gray-700/30 overflow-y-auto overflow-x-hidden fixed top-[0px] right-0 left-0 z-50  flex md:items-center justify-center">
      <div className="w-[95%] md:w-5/6 xl:w-[1200px] bg-white mx-auto mt-4 rounded-md shadow-md">
        <div className="w-full">
          <HiOutlineX
            onClick={() => {
              navigate('/');
            }}
            className=" mr-4 mt-4 cursor-pointer float-right md:text-2xl"
          />
        </div>
        <div className="grid md:grid-cols-2 w-full">  
          <SignInComponent />
          <div className="flex items-center justify-center">
            <div className="hidden md:inline">
              <img
                className="w-full"
                src={"./assets/user/user.png"}
                alt="user"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
