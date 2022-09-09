import { useState } from "react";
import config from "../../config.json";
import Button from "../button/Button";
import axios from "axios";
const Form = ({ type }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // eslint-disable-next-line
  const [data, setData] = useState([]);
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const SendContact = async() => {
    try {
      const res = await axios.get(config.SERVER_URL + "hosting");
      if (res) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(data);
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
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2"
            type="text"
            placeholder="Name*"
            name="name"
            value={contact.name}
            onChange={changeHandler}
          />
          <input
            className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            type="email"
            placeholder="Email*"
            name="email"
            value={contact.email}
            onChange={changeHandler}
          />
          <input
            className="w-full h-[60px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            type="text"
            name="phone"
            placeholder="Phone*"
            value={contact.phone}
            onChange={changeHandler}
          />
          <textarea
            className="w-full h-[116px] p-2.5 outline-none rounded-md dark:text-[#5B5B5B] border-2 mt-[20px]"
            name="message"
            placeholder="Xabar*"
            value={contact.message}
            onChange={changeHandler}
            cols="30"
            rows="10"
          ></textarea>
        </form>
        <Button
          ButtonFunction={type === "order" ? false : () => SendContact()}
          name={"YUBORISH"}
          styles={`w-full ${
            type === "order" ? "" : "xl:w-1/3"
          } mt-[40px] md:float-right`}
        />
      </div>
    </div>
  );
};

export default Form;
