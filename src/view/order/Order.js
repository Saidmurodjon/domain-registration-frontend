import { useEffect } from "react";
import axios from "axios";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";
import OrderList from "../../components/order/OrderList";
import Form from "../../components/form/Form";
import { toast } from "react-toastify";

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const TOKEN = {
    headers: {
      auth: localStorage.getItem("jwt-token"),
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(SERVER_URL + "auth", TOKEN);
        if (!res.status === 200) {
          navigate("/signin");
        }
      } catch (error) {
        navigate("/signin");
        toast.error(error?.response?.data, { theme: "colored" });
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="w-full h-full backdrop-blur-sm bg-gray-700/30 overflow-y-auto overflow-x-hidden fixed top-[0px] right-0 left-0 z-50 inset-0 h-modal md:h-full flex md:items-center justify-center">
      <div className="w-[95%] md:w-5/6 xl:w-[1200px] bg-white mx-auto mt-2 rounded-md shadow-md">
        <div className="w-full">
          <HiOutlineX
            onClick={() => {
              navigate(-1);
            }}
            className="mr-4 mt-2 cursor-pointer float-right text-2xl"
          />
        </div>
        <div className="grid md:grid-cols-2 w-full ">
          <OrderList ordered={location.state} />
          <Form type={"order"} ordered={location.state} />
        </div>
      </div>
    </div>
  );
};

export default Order;
