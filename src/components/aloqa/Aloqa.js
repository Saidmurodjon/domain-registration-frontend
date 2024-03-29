import React from "react";
import About from "./About";
import Form from "../form/Form";
import Map from "./Map";
const Aloqa = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2">
        <About />
        <div className="hidden md:inline">
          <Form />
        </div>
        <div className="col-span-2">
          <Map />
          <div className="md:hidden">
            <Form type={"contact"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aloqa;
