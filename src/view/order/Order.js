import { useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import OrderList from "../../components/order/OrderList";
import Form from "../../components/form/Form";
const Order = () => {
  const navigate = useNavigate();
  let auth = localStorage.getItem("auth");
  window.addEventListener("auth", () => {
    window.location.reload(false);
  });
  var decoded = auth ? jwt_decode(auth) : false;

  const location = useLocation();
  useEffect(() => {
    if (!decoded) {
      navigate("/signin");
    }
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
          {/* {location.state.type === "registration" ? (
            <Registration />
          ) : (
            <Form type={"order"} data={location.state} />
          )} */}

          <OrderList />

          <Form type={"order"} ordered={location.state} />
        </div>
      </div>
    </div>
  );
};

export default Order;
