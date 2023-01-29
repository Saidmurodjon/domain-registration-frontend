import Carousel from "../../components/carausel/Carousel";
import Domain from "../../components/domain/Domain";
import Hosting from "../../components/hosting/Hosting";
import CreateHosting from "../../components/hosting/createHosting/CreateHosting";
import Sayt from "../../components/sayt/Sayt";
import Partern from "../../components/partner/Partner";

const Home = () => {
  return (
    <div id="home" className="mx-auto">
      <div className="bg-[#EFEFEF]">
        <Carousel />
        <Domain />
        <div className="bg-[#F1FAFF]">
          <Hosting />
          <CreateHosting />
        </div>
        <Sayt />
      </div>
      <Partern />
    </div>
  );
};

export default Home;
