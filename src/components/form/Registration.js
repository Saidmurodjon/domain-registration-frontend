import axios from "axios";
import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import config from "../../config.json";
const Registration = () => {
  const [customer, setCustomer] = useState({
    email: "",
    password: "",
    created_at: new Date(),
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const changeHandler = (e) => {
    setError("");
    setSuccess("");
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };
  const Registration = async () => {
    if (customer.email.length <= 0) {
      setError("email kiriting");
      return true;
    }
    if (customer.password < 8) {
      setError("Parol uzunligi 8 tadan kam bo'lmasligi kerak!");
      return true;
    }
    try {
      const res = await axios.post(
        config.SERVER_URL + "customers/new",
        customer
      );
      setSuccess(res.data.message);
    } catch (error) {
      if (error.response.status === 400) {
        setError(error.response.data.message);
      }
      console.log(error);
    }
  };
  return (
    <div className="py-4">
      <div className="mx-auto w-full xl:pl-8 px-4 md:px-10 xl:px-0">
        <h1 className="w-full text-[20px] pt-4 flex justify-center">
          Buyurtma berish uchun quyidagilarni to‘ldiring
        </h1>{" "}
        <div className="flex justify-between items-center mx-auto w-1/2 py-[40px]">
          <img src="./assets/icons/social/g.png" alt="" />
          <img src="./assets/icons/social/f.png" alt="" />
          <img src="./assets/icons/social/t.png" alt="" />
        </div>
        <div className="flex my-2 justify-center">
          <hr className="border w-1/3 border-[#000000]/15 mt-4" />
          <p className="inline w-1/4 text-center">yoki</p>
          <hr className="border w-1/3 border-[#000000]/15 mt-4" />
        </div>
        <div
          className={`flex mt-8 justify-center items-center border w-full h-[60px] ${
            error
              ? "bg-red-100 text-red-600"
              : success
              ? "bg-green-200 text-green-600"
              : "border-none"
          }`}
        >
          <p className="inline text-center">{error ? error : success}</p>
        </div>
        <div className="">
          <form
            className={`xl:mt-[30px]`}
            action=""
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
              type="email"
              placeholder="Email*"
              name="email"
              value={customer.email}
              onChange={changeHandler}
            />
            <input
              className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
              type="password"
              placeholder="password*"
              name="password"
              value={customer.password}
              onChange={changeHandler}
            />
          </form>
        </div>
        <Button
          ButtonFunction={Registration}
          name={"YUBORISH"}
          styles={`w-full mt-[40px] md:float-right`}
        />
      </div>
    </div>
  );
};

export default Registration;
