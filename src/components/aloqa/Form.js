import React from "react";
import Button from "../button/Button"
const Form = () => {
  return (
    <div className="py-4">
      <div className="mx-auto xl:w-full w-5/6  xl:pl-8 px-10 xl:px-0">
      <form className="xl:mt-[120px]" action="">
        <input
          className="md:w-full h-[60px] outline-none rounded-md dark:text-[#5B5B5B] border-2"
          type="text"
          name=""
          id=""
        />
        <input
          className="md:w-full h-[60px] outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
          type="text"
          name=""
          id=""
        />
        <input
          className="md:w-full h-[60px] outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
          type="text"
          name=""
          id=""
        />
        <textarea
          className="md:w-full h-[116px] outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </form>
        <Button name={"YUBORISH"}  styles="md:w-full xl:w-1/3 md:mt-[40px] md:float-right "/>
      </div>
    </div>
  );
};

export default Form;
