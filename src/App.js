import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimetedRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  const imgs = [...document.getElementsByTagName("img")];
  useEffect(() => {
    imgs?.forEach((el) => {
      el.ondragstart = function () {
        return false;
      };
    });
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
