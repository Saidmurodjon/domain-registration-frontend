import React from "react";
// import Button from '../../components/button/Button'
import Carousel from "../../components/carausel/Carousel";
import Domain from "../../components/domain/Domain";
// import HeaderCard from "../../components/cards/HeaderCard";
// import Data from "../../components/data/Data";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
// import Hosting from "../../components/hosting/Hosting";
import test from "../../test.json";
import CreateHosting from "../../components/hosting/createHosting/CreateHosting";
console.log(test);
const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Domain />
      <div className="max-w-[1200px] mx-auto md:flex justify-between items-centergrid grid-cols-3">
        {/* {test.map((item) => {
          return (
            <div className="w-[200px] mx-3 inline">
              <Hosting key={item.narxi} props={item} />
            </div>
          );
        })} */}
        <CreateHosting/>
      </div>
      <Footer />
    </>
  );
};

export default Home;
