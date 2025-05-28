import { BrowserRouter, Route, Routes } from "react-router-dom";
import HousePages from "../pages/housePage";
import LandingPage from "../pages/landingPage";
import MarketPage from "../pages/marketPage";
import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";
import Navbar from "../shared/components/navbar";
import Footer from "../shared/components/footer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<HousePages />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
