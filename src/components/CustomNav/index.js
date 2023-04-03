import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const CustomNav = ({ showNav }) => {
  return (
    <Navbar expand="lg" variant="dark" className="sticky-top">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          MYO
        </Link>
        <Navbar.Toggle aria-controls="custom-nav" />
        <Navbar.Collapse id="custom-nav">
          <Nav className="ml-auto">
            <Link to="/about" className="nav-link">
              About
            </Link>
            <a href="/CV" className="nav-link">
              Resume
            </a>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/projects" className="nav-link">
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/muhammedyasirozdemir/"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yasirozdemir/"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              Github
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
