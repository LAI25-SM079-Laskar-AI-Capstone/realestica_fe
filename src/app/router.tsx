import { BrowserRouter, Route, Routes } from "react-router-dom";
import HousePages from "../pages/housePage";
import LandingPage from "../pages/landingPage";
import MarketPage from "../pages/marketPage";
import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/houses" element={<HousePages />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};
