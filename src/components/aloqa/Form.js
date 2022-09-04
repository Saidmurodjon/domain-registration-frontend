import React from "react";
import Button from "../button/Button";
const Form = () => {
  return (
    <div className="py-4">
      <div className="mx-auto w-full xl:pl-8 px-2 md:px-10 xl:px-0">
        <h1 className="md:hidden w-1/2 text-[16px] py-4">Biz bilan bog‘lanish uchun xabaringizni yuboring</h1>
        <form className="xl:mt-[100px]" action="">
          <input
            className="w-full h-[60px] outline-none rounded-md dark:text-[#5B5B5B] border-2"
            type="text"
            name=""
            id=""
          />
          <input
            className="w-full h-[60px] outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            type="text"
            name=""
            id=""
          />
          <input
            className="w-full h-[60px] outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            type="text"
            name=""
            id=""
          />
          <textarea
            className="w-full h-[116px] outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </form>
        <Button
          name={"YUBORISH"}
          styles="w-full xl:w-1/3 mt-[40px] md:float-right "
        />
      </div>
    </div>
  );
};

export default Form;
