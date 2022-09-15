import { useEffect } from "react";
import { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import { useNavigate } from "react-router-dom";

const CreateHosting = () => {
  const navigate = useNavigate();

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
    backup: false,
    ftp: false,
    dns: false,
    access_log: false,
  });
  const [hostingCost, setHostingCost] = useState({
    total: 0,
    hajmi: 0,
    domain: 0,
    subdomain: 0,
    db: 0,
    domainuz: 0,
    pochta: 0,
    trafik: 0,
    backup: 0,
    ftp: 0,
    dns: 0,
    access_log: 0,
  });
  const changeHandler = (object) => {
    setHosting({ ...hosting, [object.name]: object.value });
    if (object.name === "hajmi" || "domain" || "subdomain" || "db") {
      setHostingCost({ ...hostingCost, [object.name]: object.cost });
    }
    if (object.value === true) {
      setHostingCost({ ...hostingCost, [object.name]: 10000 });
    } else if (object.value === false) {
      setHostingCost({ ...hostingCost, [object.name]: 0 });
    }
  };
  useEffect(() => {
    setHosting({
      ...hosting,
      narxi:
        hostingCost.hajmi +
        hostingCost.domain +
        hostingCost.subdomain +
        hostingCost.db +
        hostingCost.domainuz +
        hostingCost.pochta +
        hostingCost.trafik +
        hostingCost.backup +
        hostingCost.ftp +
        hostingCost.dns +
        hostingCost.access_log,
    });
     // eslint-disable-next-line
  }, [hostingCost]);
  const Send = () => {
    navigate("/user", { state: { type: "new-hosting", item: hosting } });
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
