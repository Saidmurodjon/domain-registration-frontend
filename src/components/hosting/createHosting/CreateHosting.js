import { useState } from "react";
import Left from "./Left";
import Right from "./Right";
const CreateHosting = () => {
  const [hosting, setHosting] = useState({
    title: "Start",
    narxi: 50000,
    hajmi: 100,
    domain: 2,
    subdomain: 2,
    db: 2,
    domainuz: false,
    pochta: false,
    trafik: false,
    backup: true,
    ftp: true,
    dns: true,
    access_log: true,
  });
  const changeHandler = (object) => {
    setHosting({ ...hosting, [object.name]: object.value });
  };
  const Send = () => {
    console.log(hosting);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-2 sm:grid-cols-1 max-w-[1200px] mx-auto bg-[#ffff] py-4">
        {/* chap tomondagi ma'lumotlar */}
        <Left changeHandler={changeHandler} basic={hosting} />
        {/* O'ng tomondagi ma'lumotlar */}
        <Right changeHandler={changeHandler} basic={hosting} send={Send} />
      </div>
    </>
  );
};

export default CreateHosting;
