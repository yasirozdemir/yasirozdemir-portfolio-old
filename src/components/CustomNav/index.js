import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { easeOut, motion as m } from "framer-motion";
import "./style.css";

const CustomNav = ({ loc }) => {
  console.log(loc.pathname);
  if (loc.pathname === "/") return;
  else
    return (
      <m.div
        initial={{ y: "0%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.85, ease: easeOut }}
      >
        <Navbar expand="lg" variant="dark">
          <Container fluid>
            <Link to="/" className="navbar-brand">
              MYO
            </Link>
            <Navbar.Toggle aria-controls="custom-nav" />
            <Navbar.Collapse id="custom-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Link to="/about" className="nav-link" eventKey="1">
                    About
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <a href="/CV" className="nav-link" eventKey="2">
                    Resume
                  </a>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/projects" className="nav-link" eventKey="3">
                    Projects
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/projects" className="nav-link" eventKey="4">
                    Contact
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <a
                    href="https://www.linkedin.com/in/muhammedyasirozdemir/"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                    eventKey="5"
                  >
                    LinkedIn
                  </a>
                </Nav.Item>
                <Nav.Item>
                  <a
                    href="https://github.com/yasirozdemir/"
                    target="_blank"
                    rel="noreferrer"
                    eventKey="6"
                    className="nav-link"
                  >
                    Github
                  </a>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </m.div>
    );
};

export default CustomNav;
