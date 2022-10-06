import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import { useLocation } from "react-router-dom";
import { route } from './routes/routeNames';
import Account from "./pages/Account";
import Register from "./pages/Register";
import GearWork from "./pages/GearWork";
import About from "./pages/About";
import SellOrTrade from "./pages/SellOrTrade";
import Support from "./pages/Support";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Finance from "./pages/Finance";
import Buy from "./pages/Buy";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import QualityCheck from "./pages/QualityCheck";
import LoginModal from "./components/FormModal";
import { useState } from "react";
import ProductDetails from "./components/ProductDetails";

function App() {
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header openModal={openModal} setOpenModal={setOpenModal} />
      <main id="main">
        <Routes location={location}>
          <Route path={route.home} element={<Home />} />
          <Route path={route.contact} element={<Contact />} />
          <Route path={route.register} element={<Register />} />
          <Route path={route.account} element={<Account />}></Route>
          <Route path={route.gearWork.index} element={<GearWork />}>
            <Route path={route.gearWork.aboutUs} element={<About />} />
            <Route path={route.gearWork.collection} element={<Collection />} />
            <Route path={route.gearWork.qualityCheck} element={<QualityCheck />} />
          </Route>
          <Route path={route.finance} element={<Finance />} />
          <Route path={route.sellOrTrade} element={<SellOrTrade />}>
          </Route>
          <Route path={route.buy.index} element={<Buy />}> 
            <Route path={route.buy.index} element={<Buy />} /> 
            <Route path={route.buy.productdetail} element={<ProductDetails />} /> 
          </Route>
          <Route path={route.support} element={<Support />} />
          <Route path={route.faq} element={<FAQ />} />
          <Route path={route.blog} element={<Blog />} />
        </Routes>
        <LoginModal openModal={openModal} setOpenModal={setOpenModal} />
      </main>
    </>
  );
}

export default App;
