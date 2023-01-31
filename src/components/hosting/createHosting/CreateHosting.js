import { useEffect } from "react";
import { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import { useNavigate } from "react-router-dom";

const CreateHosting = () => {
  const navigate = useNavigate();

  const [hosting, setHosting] = useState({
    title: "Start",
    price: 50000,
    capacity: 100,
    domain: 2,
    subdomain: 2,
    db: 2,
    domainUz: false,
    pochta: false,
    trafik: false,
    backUp: false,
    ftp: false,
    dns: false,
    access_log: false,
  });
  // eslint-disable-next-line 
  const [basicHosting, setBasicHosting] = useState({
    capacity: [
      { id: 0, value: "0", cost: 0 },
      { id: 1, value: 100, cost: 10000 },
      { id: 2, value: 250, cost: 25000 },
      { id: 3, value: 340, cost: 35000 },
    ],
    domain: [
      { id: 0, value: 0, cost: 0 },
      { id: 1, value: 1, cost: 10000 },
      { id: 2, value: 2, cost: 20000 },
      { id: 3, value: 3, cost: 30000 },
    ],
    subDomain: [
      { id: 0, value: 0, cost: 0 },
      { id: 1, value: 1, cost: 10000 },
      { id: 2, value: 2, cost: 20000 },
      { id: 3, value: 3, cost: 30000 },
    ],
    db: [
      { id: 0, value: 0, cost: 0 },
      { id: 1, value: 1, cost: 10000 },
      { id: 2, value: 2, cost: 20000 },
      { id: 3, value: 3, cost: 30000 },
    ],
    domainUz: 21000,
    pochta: 120,
    trafik: 123,
    backUp: 129,
    ftp: 120,
    dns: 120,
    access_log: 0,
  });
  const [hostingCost, setHostingCost] = useState({
    total: 0,
    capacity: 0,
    domain: 0,
    subDomain: 0,
    db: 0,
    domainUz: 0,
    pochta: 0,
    trafik: 0,
    backUp: 0,
    ftp: 0,
    dns: 0,
    access_log: 0,
  });
  const changeHandler = (object) => {
    setHosting({ ...hosting, [object.name]: object.value });
    if (object.name === "capacity" || "domain" || "subDomain" || "db") {
      setHostingCost({ ...hostingCost, [object.name]: object.cost });
    }
    if (object.value === true) {
      setHostingCost({ ...hostingCost, [object.name]: object.cost });
    } else if (object.value === false) {
      setHostingCost({ ...hostingCost, [object.name]: 0 });
    }
  };
  useEffect(() => {
    setHosting({
      ...hosting,
      price:
        hostingCost.capacity +
        hostingCost.domain +
        hostingCost.subDomain +
        hostingCost.db +
        hostingCost.domainUz +
        hostingCost.pochta +
        hostingCost.trafik +
        hostingCost.backUp +
        hostingCost.ftp +
        hostingCost.dns +
        hostingCost.access_log,
    });
    // eslint-disable-next-line
  }, [hostingCost]);
  const Send = () => {
    navigate("/order", { state: { type: "new-hosting", item: hosting } });
  };
  console.log(hosting);
  return (
    <>
      <div className="grid md:grid-cols-2 gap-2 sm:grid-cols-1 max-w-[1200px] mx-auto bg-[#ffff] py-4">
        {/* chap tomondagi ma'lumotlar */}
        <Left
          changeHandler={changeHandler}
          basic={hosting}
          basicHosting={basicHosting}
        />
        {/* O'ng tomondagi ma'lumotlar */}
        <Right changeHandler={changeHandler} basic={hosting} send={Send} />
      </div>
    </>
  );
};

export default CreateHosting;
