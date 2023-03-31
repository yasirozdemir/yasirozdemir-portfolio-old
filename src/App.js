import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WelcomePage />
            </>
          }
        />
        <Route path="*" element={<h2>404 Page Not Found!</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
