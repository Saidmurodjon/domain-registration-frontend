import React from "react";
import Left from "./Left";
import Right from "./Right";
const CreateHosting = () => {

  return (
    <>
      <div className="grid md:grid-cols-2 gap-2 sm:grid-cols-1 max-w-[1200px] mx-auto">
        {/* chap tomondagi ma'lumotlar */}
       <Left/>
        {/* O'ng tomondagi ma'lumotlar */}
        <Right/>
      </div>
    </>
  );
};

export default CreateHosting;
