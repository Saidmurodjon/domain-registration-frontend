import Aloqa from "../../components/aloqa/Aloqa";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
const Home = () => {
  return (
    <>
      <div className="mx-auto bg-[#EFEFEF]">
        <Navbar />
        <Aloqa/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
