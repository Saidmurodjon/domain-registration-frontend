import { useState } from "react";
import Button from "../button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
const Form = ({ type, ordered }) => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  let auth = localStorage.getItem("auth");
  window.addEventListener("auth", () => {
    window.location.reload(false);
  });
  let decoded = auth ? jwt_decode(auth) : false;
  const TOKEN = {
    headers: {
      auth: localStorage.getItem("jwt-token"),
    },
  };
  const [contact, setContact] = useState({
    author: decoded?._id,
    fullName: decoded?.fullName,
    email: decoded?.email,
    phone: decoded?.phone,
    message: "",
    type: ordered?.type,
    isOrdered: ordered?.item,
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
      const res = await axios.post(SERVER_URL + "contact", contact);
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
      const res = await axios.post(SERVER_URL + "orders", contact, TOKEN);
      if (res.status === 201) {
        setLoading(false);
        toast.success("Buyritma qabul qilindi", { theme: "colored" });
        navigate(-1);
      }
    } catch (error) {
      toast.error(error?.response?.data, { theme: "colored" });
      console.log(error);
    }
  };
  return (
    <>
      <div className="p-1 md:p-2">
        <div className="mx-auto w-full xl:pl-8 px-2 md:px-10 xl:px-0">
          {type === "order" ? (
            <>
              <h1 className="w-full text-[20px] pt-4">
                Buyurtmachi haqida qisqa ma'lumot
              </h1>{" "}
              <h1 className="w-full text-[14px] pt-2">
                Buyurtma berish bilan bog'liq xamaringizni yozishingiz mumkin
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
              name="fullName"
              value={contact.fullName}
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
