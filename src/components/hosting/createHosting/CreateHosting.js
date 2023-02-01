import { useEffect } from "react";
import { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import { useNavigate } from "react-router-dom";
import UseFetch from "../../hooks/UseFetch";

const CreateHosting = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const { data } = UseFetch(SERVER_URL + "hostingcreators", {
    method: "get",
    details: {},
  });
  const [hosting, setHosting] = useState({
    title: "New hosting",
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
  return (
    <>
      <div className="grid md:grid-cols-2 gap-2 sm:grid-cols-1 max-w-[1200px] mx-auto bg-[#ffff] py-4">
        {/* chap tomondagi ma'lumotlar */}
        <Left
          changeHandler={changeHandler}
          basic={hosting}
          basicHosting={data ? data[0] : null}
        />
        {/* O'ng tomondagi ma'lumotlar */}
        <Right
          changeHandler={changeHandler}
          basic={hosting}
          send={Send}
          basicHosting={data ? data[0] : null}
        />
      </div>
    </>
  );
};

export default CreateHosting;
