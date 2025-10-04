import { Route } from "react-router-dom";
import Home from "../pages/LandingPage";
import Portofolio from "../pages/PortofolioPage";
import PrivacyPolicy from "../pages/PrivacyPage";
import TermsOfService from "../pages/TermsPage";

const PublicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/portofolio" element={<Portofolio />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
  </>
);

export default PublicRoutes;
