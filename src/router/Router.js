import { Route, Routes } from "react-router-dom";
import Home from "../view/home/Home";
import E404 from "../components/errors/E404";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </>
  );
}
export default Router;
