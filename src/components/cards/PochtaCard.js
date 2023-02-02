import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PochtaCard = ({ props }) => {
  const navigate = useNavigate();
  const [duration, setDuration] = useState(1);
  return (
    <>
      <div className="w-[278px] h-[453px] rounded-lg shadow-lg mx-auto bg-white mt-2 md:mt-6 xl:mt-4 transition duration-500 transform md:hover:-translate-y-[10px] md:hover:shadow-2xl">
        <h1 className="text-[32px] text-center pt-[25px] text-[#00A59C] font-bold capitalize">
          {props.title}
        </h1>
        <h1 className="text-[24px] text-center pt-[25px] text-[#1F3D9D] font-bold">
          {props.status}
        </h1>
        <h1 className="text-[14px] text-center pt-[25px] ">
          Hajmi: <p className="pl-2 inline font-semibold">{props.capacity}</p>
        </h1>
        <h1 className="text-[14px] text-center pt-[25px] ">
          Pochta qutilari:{" "}
          <p className="pl-2 inline font-semibold">{props.box}</p>
        </h1>
        <div className="flex justify-center pt-[25px]">
          <form action="">
            <select
              className="cursor-pointer rounded outline-none text-center w-[110px] h-[32px] shadow-md"
              name=""
              onChange={(e) => setDuration(e.target.value)}
            >
              {[1, 2, 3, 4, 5, 6, 12,24].map((item) => (
                <option key={item} className="dark:bg-white" value={item}>
                  {item} oyga
                </option>
              ))}
            </select>
          </form>
        </div>
        <h1 className="text-[24px] text-center pt-[25px] text-[#333333] font-bold">
          {props.price * duration - (props.price * duration) / 200} so‘m
        </h1>
        <div className="flex justify-center pt-[30px]">
          <Button
            name={"Buyurtma berish"}
            styles="w-[250px]"
            ButtonFunction={() =>
              navigate("/order", { state: { type: "pochta", item: props } })
            }
          />
        </div>
      </div>
    </>
  );
};

export default PochtaCard;
