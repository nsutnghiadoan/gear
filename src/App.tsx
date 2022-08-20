import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import { useLocation } from "react-router-dom";
import {route } from './routes/routeNames';
import Account from "./pages/Account";
import Login from "./pages/Login";
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
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <main id="main">
        <Routes location={location}>
          <Route path={route.login} element={<Login />} />
          <Route path={route.contact} element={<Contact />} />
          <Route path={route.register} element={<Register />} />
          <Route path={route.account} element={<Account />}></Route>
          <Route path={route.gearWork.index} element={<GearWork />}>
            <Route path={route.gearWork.aboutUs} element={<About />} />
          </Route>
          <Route path={route.finance} element={<Finance />} />
          <Route path={route.sellOrTrade} element={<SellOrTrade />}>
          </Route>
          <Route path={route.buy} element={<Buy />} />
          <Route path={route.support} element={<Support />} />
          <Route path={route.faq} element={<FAQ />} />
          <Route path={route.blog} element={<Blog />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
