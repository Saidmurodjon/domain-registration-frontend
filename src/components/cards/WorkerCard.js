import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const WorkerCard = ({ element }) => {
  return (
    <div className="w-[278px] h-[380px] rounded-lg shadow-lg mx-auto bg-white mt-2 md:mt-6 xl:mt-4 transition duration-500 transform md:hover:-translate-y-[10px] md:hover:shadow-2xl col-span-2 md:col-span-1">
      <div className="mx-auto py-8">
        <img
          className="rounded-full w-44 h-44 mx-auto"
          src={element.photo}
          alt="avatar"
        />
      </div>
      <div className="">
        <h1 className="text-center text-[#1F3D9D] font-bold text-2xl">
          {element.fullName}
        </h1>
        <h1 className="text-center text-gray-300 font-semibold text-2xl">
          {element.position}
        </h1>
      </div>
      <div className="mx-auto py-2 px-16 flex justify-between justify-items-center">
        <a href={element.facebook} target="_blank" rel="noreferrer">
          <FaFacebookF className="border w-10 h-10 p-2 bg-gray-300 text-[#1F3D9D]" />
        </a>
        <a href={element.telegram} target="_blank" rel="noreferrer">
          <FaTelegramPlane className="border w-10 h-10 p-2 bg-gray-300 text-[#1F3D9D]" />
        </a>
        <a href={element.email} target="_blank" rel="noreferrer">
          <MdEmail className="border w-10 h-10 p-2 bg-gray-300 text-[#1F3D9D]" />
        </a>
      </div>
    </div>
  );
};

export default WorkerCard;
