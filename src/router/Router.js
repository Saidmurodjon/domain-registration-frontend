import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../view/home/Home";
import E404 from "../components/errors/E404";
import Domen from "../view/domain/Domain";
import Hosting from "../view/hosting/Hosting";
import Pochta from "../view/pochta/Pochta";
import Sayt from "../view/site/Site";
import Aloqa from "../view/contact/Contact";
// import Order from "../view/user/User";
import Admin from "../view/admin/Admin";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import SignIn from "../view/auth/SignIn";
import SignUp from "../view/auth/SignUp";
import Order from "../view/order/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Routers() {
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/domain" element={<Domen />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/pochta" element={<Pochta />} />
        <Route path="/sayt" element={<Sayt />} />
        <Route path="/aloqa" element={<Aloqa />} />
        <Route path="/user" element={<Order />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<E404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default Routers;
