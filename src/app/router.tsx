import { BrowserRouter, Route, Routes } from "react-router-dom";
import HousePages from "../pages/housePage";
import LandingPage from "../pages/landingPage";
import MarketPage from "../pages/marketPage";
import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";
import PropertyPage from "../pages/propertyPage";
import Navbar from "../shared/components/navbar";
import Footer from "../shared/components/footer";
import ResultPage from "../pages/resultPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<HousePages />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
