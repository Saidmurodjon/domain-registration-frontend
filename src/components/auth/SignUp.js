import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import axios from "axios";
import { toast } from "react-toastify";
// Ro'yxatdan o'tish oynasi
export default function SignUp() {
  const [loading, setLoading] = useState(null);
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const [user, setUser] = useState({
    fullName: "",
    orgName: "",
    email: "",
    password: "",
    phone: "",
    createdAt: Date,
  });

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      createdAt: new Date(),
    });
  };
  const Registration = async () => {
    try {
      setLoading(true);
      const res = await axios({
        method: "post",
        url: SERVER_URL + "users",
        data: user,
      });
      if (res?.status === 201) {
        toast.success("Siz muvaffaqqiyatli kirdingiz", { theme: "colored" });
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data, { theme: "colored" });
      throw error;
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center pt-6 sm:justify-center sm:pt-0  ">
        <div>
          <Link to="/">
            <h3 className="text-4xl font-bold text-purple-600">
              Ro'yxatdan o'tish
            </h3>
          </Link>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white">
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                F.I.SH
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="fullName"
                  value={user.fullName}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Organization Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="orgName"
                  value={user.orgName}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="email"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={user.email}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Phone 
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="tel"
                  name="phone"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={user.phone}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={user.password}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <Link to="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </Link>
            <div className="flex items-center mt-4">
              <Button
                ButtonFunction={Registration}
                name={loading ? "Yuklanmoqda" : "Ro'yxatdan o'tish"}
                styles={`w-full`}
              />
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link className="text-purple-600 hover:underline" to="/signin">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
