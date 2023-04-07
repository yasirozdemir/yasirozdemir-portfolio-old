import { Route, Routes, useLocation } from "react-router-dom";
import About from "../About";
import LandingPage from "../LandingPage";
import { AnimatePresence } from "framer-motion";
import CustomNav from "../CustomNav";
import Contact from "../Contact";
import { useEffect, useLayoutEffect, useState } from "react";

const AnimatedRoutes = () => {
  const loc = useLocation();
  const [navPlace, setNavPlace] = useState(true);
  const [vw, setVw] = useState(0);

  useLayoutEffect(() => {
    const updateVw = () => {
      setVw(window.innerWidth);
    };
    window.addEventListener("resize", updateVw);
    updateVw();
    return () => window.removeEventListener("resize", updateVw);
  }, []);

  useEffect(() => {
    if (vw >= 992) setNavPlace(true);
    else setNavPlace(false);
  }, [vw]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={loc} key={loc.pathname}>
        <Route
          path="/"
          element={
            <>
              {navPlace ? (
                <>
                  <LandingPage />
                  <CustomNav />
                </>
              ) : (
                <>
                  <CustomNav />
                  <LandingPage />
                </>
              )}
              <About />
              <Contact />
            </>
          }
        />
        <Route path="*" element={<h2>404 Page Not Found!</h2>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
