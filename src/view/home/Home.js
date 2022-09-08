import Carousel from "../../components/carausel/Carousel";
import Domain from "../../components/domain/Domain";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Hosting from "../../components/hosting/Hosting";
import CreateHosting from "../../components/hosting/createHosting/CreateHosting";
import Sayt from "../../components/sayt/Sayt";
import Partern from "../../components/partner/Partner";

const Home = () => {
  // import UseFetch from "../../components/hooks/UseFetch";
  // import config from "../../config.json";
  // const { data, loading, error } = UseFetch(config.SERVER_URL + "pochta", {
  //   method: "get",
  //   details: {
  //     title: "Mail-5GB",
  //     status: "NC panel",
  //     hajmi: 10000,
  //     quti_soni: 80,
  //     narxi: 150000,
  //   },
  // });

  return (
    <>
      <div id="home" className="mx-auto">
        <Navbar />

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
        <Footer />
      </div>
    </>
  );
};

export default Home;
