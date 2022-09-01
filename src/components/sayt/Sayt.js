import React from "react";
import Button from "../button/Button";

const Sayt = () => {
  return (
    <div
      className={`bg-[#EFEFEF] lg:bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/BlankMap-World-Compact.svg/1024px-BlankMap-World-Compact.svg.png')] bg-no-repeat bg-cover bg-center pb-[80px] lg:pb-[160px] pt-[50px] lg:pt-[90px]`}
    >
      <div className="px-2 md:px-0 md:py-5">
        <h1 className=" text-[#1F3D9D] text-[24px] lg:text-[48px] text-center font-semibold">
          SAYT YARATIB BERISH XIZMATI
        </h1>
        <hr className="border-[#00A59C] w-[90px] mx-auto" />
        <h2 className="md:w-[637px] md:text-center mx-auto text-[#797979] my-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 mx-auto max-w-[1200px]">
        <div className="mx-auto">
          <img src={`./assets/site.png`} alt="" />
        </div>
        <div className="mx-auto bg-white md:bg-transparent w-full ">
          <ul className="text-center w-5/6 mx-auto">
            <li className="my-4 w-[322px] text-[18px] font-medium">Turli xildagi saytlarni yaratib berish</li>
            <hr className="border-md md:border-none" />
            <li className="my-4 w-[322px] text-[18px] font-medium">Turli xildagi saytlarni yaratib berish</li>
            <hr className="border-md md:border-none" />
            <li className="my-4 w-[322px] text-[18px] font-medium">Turli xildagi saytlarni yaratib berish</li>
            <hr className="border-md md:border-none" />
            <li className="my-4 w-[322px] text-[18px] font-medium">Turli xildagi saytlarni yaratib berish</li>
            <hr className="border-md md:border-none" />
            <li className="my-4 w-[322px] text-[18px] font-medium">Saytingiz uchun domen va hosting xizmatlari</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white flex w-[362px] lg:w-[495px] mx-auto lg:my-[20px] my-[20px] border shadow-md">
          <div className="w-[110px] h-[110px] lg:w-[143px] lg:h-[143px] bg-gradient-to-r from-[#13E7DB] to-[#00A59C] rounded-2xl shadow-2xl">
            <img
              src={`./assets/icons/yangilash.png`}
              alt=""
              className="mx-auto lg:mt-5 mt-4 w-[72px] h-[72px] lg:w-[94px] lg:h-[94px]"
            />
          </div>
          <div className="flex-1 text-center py-1 lg:py-4">
            <h1 className="text-[16px] lg:text-[18px] font-semibold mx-auto text-[#1F3D9D] w-[248px]">
              Eski dizayndagi saytlarni yangilash
            </h1>
            <p className="w-[255px] mx-auto py-1 lg:py-2 text-[12px] text-[#797979]">
              saytingizni zamonaviy dizayn hamda foydalanuvchiga qulay usulda
              yangilang
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-white flex w-[362px] lg:w-[495px] mx-auto lg:my-[20px] my-[20px] border shadow-md">
          <div className="w-[110px] h-[110px] lg:w-[143px] lg:h-[143px] bg-gradient-to-r from-[#1F3D9D] to-[#7E97E7] rounded-2xl shadow-2xl">
            <img
              src={`./assets/icons/yangi.png`}
              alt=""
              className="mx-auto lg:mt-5 mt-4 w-[72px] h-[72px] lg:w-[94px] lg:h-[94px]"
            />
          </div>
          <div className="flex-1 text-center py-1 lg:py-4">
            <h1 className="text-[16px] lg:text-[18px] font-semibold mx-auto text-[#1F3D9D] w-[248px]">
              Eski dizayndagi saytlarni yangilash
            </h1>
            <p className="w-[255px] mx-auto py-1 lg:py-2 text-[12px] text-[#797979]">
              saytingizni zamonaviy dizayn hamda foydalanuvchiga qulay usulda
              yangilang
            </p>
          </div>
        </div>
        <div className="mx-auto text-center   hidden lg:contents">
          <h1 className="w-[362px] lg:w-[495px] lg:my-[70px] my-[20px] mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here'
          </h1>
        </div>
        <div className="mx-auto px-3 w-[362px] lg:w-[495px] lg:my-[70px] my-[20px] ">
            <Button name={"SAYTGA BUYURTMA BERISH"} styles="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Sayt;
