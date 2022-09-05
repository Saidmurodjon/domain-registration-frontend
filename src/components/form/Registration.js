import React from "react";
import Button from "../button/Button";

const Registration = () => {
  return (
    <div className="py-4">
      <div className="mx-auto w-full xl:pl-8 px-2 md:px-10 xl:px-0">
        <h1 className="w-full text-[20px] pt-4">
          Buyurtma berish uchun quyidagilarni to‘ldiring
        </h1>{" "}
        <h1 className="w-full text-[14px] pt-2">
          Buyurtma berish uchun quyidagilarni to‘ldiring
        </h1>
        <form
          className={`xl:mt-[30px]`}
          action=""
        >
          <input
            className="w-full h-[60px] outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            type="text"
            placeholder="Email*"
            name=""
            id=""
          />
          <input
            className="w-full h-[60px] outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            type="text"
            placeholder="Phone*"
            name=""
            id=""
          />
        </form>
        <Button
          name={"YUBORISH"}
          styles={`w-full mt-[40px] md:float-right`}
        />
      </div>
    </div>
  );
};

export default Registration;
