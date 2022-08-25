import React,{useState} from "react";
import Button from "../../button/Button";

const Right = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="float-left px-3 md:px-[120px]">
        <form className="md:mt-[130px]" action="">
          <label
            className="float-left text-[#333333] font-semibold cursor-pointer"
            htmlFor="d"
          >
            Domain
          </label>
          <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
            ></div>
          </label>
          <br />
          <hr className="border-t dark:border-gray-100 my-4" />
          <label
            className="float-left text-[#333333] font-semibold cursor-pointer"
            htmlFor="d"
          >
            Domain
          </label>
          <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
            ></div>
          </label>
          <br />
          <hr className="border-t dark:border-gray-100 my-4" />
          <label
            className="float-left text-[#333333] font-semibold cursor-pointer"
            htmlFor="d"
          >
            Domain
          </label>
          <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
            ></div>
          </label>
          <br />
          <hr className="border-t dark:border-gray-100 my-4" />
          <label
            className="float-left text-[#333333] font-semibold cursor-pointer"
            htmlFor="d"
          >
            Domain
          </label>
          <label className="inline-flex relative items-center mr-5 cursor-pointer float-right">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A59C]"
            ></div>
          </label>
          <br />
          <hr className="border-t dark:border-gray-100 my-4" />
          <p className="text-gray-500">Umumiy to'lov:</p>
          <h3 className="text-4xl font-bold ">560 000 <span className="text-xl font-medium">so'm</span></h3>
          <div className="mx-auto mt-12">
          <Button className="" name={"Buyurtma berish"}/>

          </div>
        </form>
      </div>
    </>
  );
};

export default Right;
