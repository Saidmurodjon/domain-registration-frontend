import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ProductCard from "../../components/cards/ProductCard";
import WorkerCard from "../../components/cards/WorkerCard";
import UseFetch from "../../components/hooks/UseFetch";
import Skeleton from "react-loading-skeleton";
const About = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const [show, setShow] = useState(true);
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: SERVER_URL + "products",
        });
        if (res.status === 200) {
          setProducts(res.data);
        }
      } catch (error) {
        toast.error(error?.response?.data, { theme: "colored" });
        throw error;
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  const { data } = UseFetch(SERVER_URL + "workers", {
    method: "get",
    details: {},
  });
  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto py-5">
        <div className="border-b pb-2">
          <h1
            onClick={() => setShow(true)}
            className={`text-[18px] md:text-[28px] text-center font-bold inline mx-2 pb-3 duration-500 cursor-pointer ${
              show
                ? "text-[#1F3D9D] border-b-2 border-[#00A59C]"
                : "text-gray-400"
            }`}
          >
            Bizning jamoa
          </h1>
          <h1
            onClick={() => setShow(false)}
            className={` text-[18px] md:text-[28px] text-center font-bold inline mx-2 pb-3 duration-500 cursor-pointer ${
              !show
                ? "text-[#1F3D9D] border-b-2 border-[#00A59C]"
                : "text-gray-400"
            }`}
          >
            Boshqa loyihalarimiz
          </h1>
        </div>
        <div className="grid xl:grid-cols-4 grid-cols-2 lg:grid-cols-3 items-center relative justify-center mt-1">
          {show ? (
            data ? (
              data?.map((e) => <WorkerCard key={e._id} element={e} />)
            ) : (
              <Skeleton className="" count={8} />
            )
          ) : products ? (
            products?.map((e) => <ProductCard key={e._id} element={e} />)
          ) : (
            <Skeleton count={5} />
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
