import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Slide43One = React.lazy(() => import("pages/Slide43One"));
const Slide169One = React.lazy(() => import("pages/Slide169One"));
const Frame656 = React.lazy(() => import("pages/Frame656"));
const NFTsMarketpage = React.lazy(() => import("pages/NFTsMarketpage"));
const SignInPage = React.lazy(() => import("pages/SignInPage"));
const AboutUsPage = React.lazy(() => import("pages/AboutUsPage"));
const RewardsPage = React.lazy(() => import("pages/RewardsPage"));
const NFTsMarketpageOne = React.lazy(() => import("pages/NFTsMarketpageOne"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const SignUpPage = React.lazy(() => import("pages/SignUpPage"));
const TradingPage = React.lazy(() => import("pages/TradingPage"));
const ProfilePageVerificationstatus = React.lazy(() =>
  import("pages/ProfilePageVerificationstatus")
);
const ProfilePagePassword = React.lazy(() =>
  import("pages/ProfilePagePassword")
);
const ProfilePagePersonalData = React.lazy(() =>
  import("pages/ProfilePagePersonalData")
);
const FAQsPage = React.lazy(() => import("pages/FAQsPage"));
const SignupinOverlay = React.lazy(() => import("pages/SignupinOverlay"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signupinoverlay" element={<SignupinOverlay />} />
          <Route path="/faqspage" element={<FAQsPage />} />
          <Route
            path="/profilepagepersonaldata"
            element={<ProfilePagePersonalData />}
          />
          <Route
            path="/profilepagepassword"
            element={<ProfilePagePassword />}
          />
          <Route
            path="/profilepageverificationstatus"
            element={<ProfilePageVerificationstatus />}
          />
          <Route path="/tradingpage" element={<TradingPage />} />
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/nftsmarketpageone" element={<NFTsMarketpageOne />} />
          <Route path="/rewardspage" element={<RewardsPage />} />
          <Route path="/aboutuspage" element={<AboutUsPage />} />
          <Route path="/signinpage" element={<SignInPage />} />
          <Route path="/nftsmarketpage" element={<NFTsMarketpage />} />
          <Route path="/frame656" element={<Frame656 />} />
          <Route path="/slide169one" element={<Slide169One />} />
          <Route path="/slide43one" element={<Slide43One />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
