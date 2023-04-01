import { Route, Routes, useLocation } from "react-router-dom";
import About from "../About";
import LandingPage from "../LandingPage";
import { AnimatePresence } from "framer-motion";
import CustomNav from "../CustomNav";

const AnimatedRoutes = () => {
  const loc = useLocation();
  return (
    <AnimatePresence mode="wait">
      <CustomNav loc={loc} />
      <Routes location={loc} key={loc.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h2>404 Page Not Found!</h2>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
