import { Route, Routes } from "react-router-dom";
import Home from "../view/home/Home";
import E404 from "../components/errors/E404";
import Domen from "../view/domen/Domen";
import Hosting from "../view/hosting/Hosting";
import Pochta from "../view/pochta/Pochta";
import Sayt from "../view/sayt/Sayt";
import Aloqa from "../view/aloqa/Aloqa";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/domen" element={<Domen />} />
      <Route path="/hosting" element={<Hosting />} />
      <Route path="/pochta" element={<Pochta />} />
      <Route path="/sayt" element={<Sayt />} />
      <Route path="/aloqa" element={<Aloqa />} />
      <Route path="*" element={<E404 />} />
    </Routes>
  );
}
export default Router;
