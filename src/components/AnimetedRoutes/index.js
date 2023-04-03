import { Route, Routes, useLocation } from "react-router-dom";
import About from "../About";
import LandingPage from "../LandingPage";
import { AnimatePresence } from "framer-motion";
import CustomNav from "../CustomNav";
import { useEffect, useState } from "react";

const AnimatedRoutes = () => {
  const loc = useLocation();
  const [showNav, setShowNav] = useState(false);
  const getScrollableHeight = () => {
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    return viewportHeight;
  };
  const handleScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    const showNav2 = scrollValue >= getScrollableHeight();
    setShowNav(showNav2);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);
  return (
    <AnimatePresence mode="wait">
      <Routes location={loc} key={loc.pathname}>
        <Route
          path="/"
          element={
            <>
              <div className="sticky-top d-block d-lg-none">
                <CustomNav showNav={showNav} />
              </div>
              <LandingPage />
              <div className="sticky-top d-none d-lg-block">
                <CustomNav showNav={showNav} />
              </div>
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
