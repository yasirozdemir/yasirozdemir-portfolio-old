import { Route, Routes, useLocation } from "react-router-dom";
import About from "../About";
import LandingPage from "../LandingPage";
import { AnimatePresence } from "framer-motion";
import CustomNav from "../CustomNav";
import { useEffect } from "react";

const AnimatedRoutes = () => {
  const loc = useLocation();
  const handleScroll = () => {
    console.log(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <Routes location={loc} key={loc.pathname}>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <CustomNav />
              <About />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h2>404 Page Not Found!</h2>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
