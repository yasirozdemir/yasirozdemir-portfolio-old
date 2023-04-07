import { Route, Routes, useLocation } from "react-router-dom";
import About from "../About";
import LandingPage from "../LandingPage";
import { AnimatePresence } from "framer-motion";
import CustomNav from "../CustomNav";
import Contact from "../Contact";
import { useEffect, useLayoutEffect, useState } from "react";

const AnimatedRoutes = () => {
  const loc = useLocation();
  const [navPlace, setNavPlace] = useState(true); // if true -> navbar must be under the landing page
  const [viewport, setViewport] = useState({
    vw: 0,
    vh: 0,
  });

  useLayoutEffect(() => {
    const updateVw = () => {
      setViewport({
        vw: window.innerWidth,
        vh: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateVw);
    updateVw();
    return () => window.removeEventListener("resize", updateVw);
  }, []);

  useEffect(() => {
    if (viewport.vw >= 992) setNavPlace(true);
    else setNavPlace(false);
  }, [viewport.vw]);

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
                  <CustomNav viewport={viewport} />
                </>
              ) : (
                <>
                  <CustomNav viewport={viewport} />
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
