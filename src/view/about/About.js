import React from "react";
import { useState } from "react";
import WorkerCard from "../../components/cards/WorkerCard";
import UseFetch from "../../components/hooks/UseFetch";
const About = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const [show, setShow] = useState(true);
  const { data, loading } = UseFetch(SERVER_URL + "workers", {
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
        <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 items-center relative justify-center">
          {show ? (
            data ? (
              data?.map((e) => <WorkerCard key={e._id} element={e} />)
            ) : (
              loading
            )
          ) : (
            <h1>Jsbd</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
