import { useState } from "react";
import config from "../../config.json";
import Button from "../button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Form = ({ type, data }) => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    order: JSON.stringify(data),
  });
  // eslint-disable-next-line
  // const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const SendContact = async () => {
    try {
      // setLoading(true);
      const res = await axios.post(config.SERVER_URL + "contact", contact);
      if (res.status === 201) {
        alert("Xabar saqlandi");
        setLoading(false);
        setContact({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //
  const SendOrder = async () => {
    try {
      setLoading(true);
      const res = await axios.post(config.SERVER_URL + "order", contact);
      if (res.status === 201) {
        setLoading(false);
        alert("Buytma saqlandi");
        navigate(-1)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
            ButtonFunction={type === "order" ? SendOrder : SendContact}
            name={"YUBORISH"}
            styles={`w-full ${
              type === "order" ? "" : "xl:w-1/3"
            } mt-[40px] md:float-right`}
          />
        </div>
      </div>
    </>
  );
};

export default Form;
