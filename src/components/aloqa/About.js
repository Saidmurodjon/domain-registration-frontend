import React from "react";
import Data from "../data/Data";
import { MdEmail } from "react-icons/md";
import { RiMapPinLine, RiGlobalFill } from "react-icons/ri";
import { TbPhonePlus } from "react-icons/tb";
const About = () => {
  return (
    <>
      {Data ? (
        <div className="px-4">
          <h1 className="font-semibold text-[#1F3D9D] text-[30px]">
            Aloqa Uchun
          </h1>
          <div className="grid xl:grid-cols-2 mt-10 xl:mt-20">
            <div className="text-[16px] flex-1">
              <div className="flex">
                <TbPhonePlus className="mt-1 mr-2 dark:text-[#5B5B5B]" />
                <h3 className="dark:text-[#5B5B5B] text-start">
                  {Data.footer.contact1}
                </h3>
              </div>
              <div className="flex mt-[20px]">
                <MdEmail className="mt-1 mr-2 dark:text-[#5B5B5B]" />
                <h3 className="dark:text-[#5B5B5B] text-start flex-none">
                  farmarkaz@ferghana.uz
                </h3>
              </div>
              <div className="flex mt-[20px]">
                <RiGlobalFill className="mt-1 mr-2 dark:text-[#5B5B5B]" />
                <h3 className="dark:text-[#5B5B5B] text-start flex-none">
                  fcc.uz
                </h3>
              </div>
            </div>
            {/*  */}
            <div className="">
              <div className="flex">
                <RiMapPinLine className=" mr-2 dark:text-[#5B5B5B] xl:text-[32px]" />
                <h3 className="text-[#5B5B5B] text-[16px]">
                  {Data.footer.map} yonida
                </h3>
              </div>
            </div>
            {/*  */}
          </div>
          <h2 className="text-[16px] dark:text-[#5B5B5B] mt-10">
            Farg`ona viloyat hokimligi binosi Axmad Al Farg'oniy va Alisher
            Navoiy ko`chalari kesishgan joyda, "Aziya" mehmonhonasi yonida
            ostanovka 'A' joylashgan. Bu yerga "Markaz-Aeroport" yo`nalishida
            qatnovchi barcha shahar transportlarida borish mumkin.
          </h2>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default About;
