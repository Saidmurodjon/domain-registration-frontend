import React from "react";

const PartnerCard = ({ item }) => {
  return (
    <div
      key={item}
      className="w-[249px] h-[97px] rounded-2xl bg-gradient-to-r from-[#14d353] to-[#129123] border"
    >
      <div className="grid grid-cols-8">
        <div className="col-span-5 h-[97px] rounded-l-2xl">
          <h1 className="">{item}</h1>
        </div>
        <div className="col-span-3 h-full bg-black-400 rounded-r-2xl rounded-bl-[90px]">
          <img
          className="rounded-r-2xl rounded-bl-[90px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9rZ-7ra_nt5701hcS57ET6g7KQK2rajjRg&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      {/* <img src={`./assets/partner/${item}`} alt="" /> */}
    </div>
  );
};

export default PartnerCard;
