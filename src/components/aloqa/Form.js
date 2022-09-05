import React from "react";
import Button from "../button/Button";
const Form = ({ type }) => {
  return (
    <div className="py-4">
      <div className="mx-auto w-full xl:pl-8 px-2 md:px-10 xl:px-0">
        {type === "order" ? (
          <>
            <h1 className="w-full text-[20px] pt-4">
              Buyurtma berish uchun quyidagilarni to‘ldiring
            </h1>{" "}
            <h1 className="w-full text-[14px] pt-2">
              Buyurtma berish uchun quyidagilarni to‘ldiring
            </h1>
          </>
        ) : (
          <h1 className="md:hidden w-1/2 text-[16px] py-4">
            Biz bilan bog‘lanish uchun xabaringizni yuboring
          </h1>
        )}
        <form
          className={`${type === "order" ? "xl:mt-[30px]" : "xl:mt-[100px]"}`}
          action=""
        >
          <input
            className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2"
            type="text"
            placeholder="Name*"
            name=""
            id=""
          />
          <input
            className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            type="text"
            placeholder="Email*"
            name=""
            id=""
          />
          <input
            className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            type="text"
            placeholder="Phone*"
            name=""
            id=""
          />
          <textarea
            className="w-full h-[116px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            name=""
            placeholder="Xabar*"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </form>
        <Button
          name={"YUBORISH"}
          styles={`w-full ${type==="order"?"":"xl:w-1/3"} mt-[40px] md:float-right`}
        />
      </div>
    </div>
  );
};

export default Form;
