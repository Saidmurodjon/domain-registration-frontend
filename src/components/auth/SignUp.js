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
    firstName: "",
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
    console.log("Registration");
    console.log(user);
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
            <h3 className="text-4xl font-bold text-purple-600">Ro'yxatdan o'tish</h3>
          </Link>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white">
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="firstName"
                  value={user.firstName}
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
                Password
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
                  name="password_confirmation"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}