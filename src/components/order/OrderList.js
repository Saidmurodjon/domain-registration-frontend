import React from "react";

const OrderList = ({ ordered }) => {
  return (
    <div className="p-1 md:p-2">
      <div className="mx-auto w-full xl:pl-8 px-2 md:px-10 xl:px-0">
        <h1 className="w-full text-[20px] pt-4">Buyurtma haqida</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <pre>{JSON.stringify(ordered, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
