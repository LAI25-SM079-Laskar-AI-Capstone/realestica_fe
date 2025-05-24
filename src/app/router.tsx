import { BrowserRouter, Route, Routes } from "react-router-dom";
import HousePages from "../pages/housePage";
import LandingPage from "../pages/landingPage";
import MarketIntelligence from "../pages/marketIntelligence";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/houses" element={<HousePages />} />
        <Route path="/market-intelligence" element={<MarketIntelligence />} />
      </Routes>
    </BrowserRouter>
  );
};
