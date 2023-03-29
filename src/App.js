import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container fluid>
                <Row className="mt-3">
                  <WelcomePage />
                </Row>
              </Container>
            </>
          }
        />
        <Route path="*" element={<h2>404 Page Not Found!</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
