import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
// Login page
export default function SignIn() {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    login: "",
    password: "",
  });
  const [loading, setLoading] = useState(null);
  // eslint-disable-next-line
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const Login = async () => {
    try {
      setLoading(true);
      const res = await axios({
        method: "post",
        url: SERVER_URL + "login",
        data: user,
      });
      if (res?.status === 200) {
        var JWT = res?.data?.token;
        var decoded = jwt_decode(JWT);
        localStorage.setItem("user", JSON.stringify(decoded));
        localStorage.setItem("auth", JSON.stringify(JWT));
        localStorage.setItem("jwt-token", JWT);
        navigate(-1);
        toast.success("Siz muvaffaqqiyatli kirdingiz", { theme: "colored" });
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data, { theme: "colored" });
      toast.error(error?.message, { theme: "colored" });
      throw error;
    }
  };
  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Login
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="login"
              value={user.login}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="password"
              value={user.password}
              onChange={changeHandler}
            />
          </div>
          <Link to="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </Link>
          <div className="mt-6">
            <Button
              ButtonFunction={Login}
              name={loading ? "Yuklanmoqda" : "Kirish"}
              styles={`w-full`}
            />
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          {/* <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a> */}
          <Link
            to="/signup"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
