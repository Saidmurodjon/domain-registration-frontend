// import Button from '../../components/button/Button'
import Carousel from "../../components/carausel/Carousel";
import Domain from "../../components/domain/Domain";
// import HeaderCard from "../../components/cards/HeaderCard";
// import Data from "../../components/data/Data";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Hosting from "../../components/hosting/Hosting";
import CreateHosting from "../../components/hosting/createHosting/CreateHosting";
import Sayt from "../../components/sayt/Sayt";
import Partern from "../../components/partner/Partner";
const Home = () => {


  return (
    <>
     <div className="mx-auto">
     <Navbar />
     {/* error of carousel */}
      <Carousel />
      <Domain />
      <div className="">
     {/* error of hosting */}

       <Hosting/>
        <CreateHosting/>
        <Sayt/>
      </div>
      <Partern/>
      <Footer />
     </div>
    </>
  );
};

export default Home;
