import { Container, Nav, Navbar } from "react-bootstrap";
import "./style.css";
import { useEffect, useState } from "react";

const CustomNav = ({ viewport }) => {
  const [scroll, setScroll] = useState({
    y: 0,
    prevY: 0,
  });
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScroll((prevState) => {
        return {
          y: window.scrollY,
          prevY: prevState.y,
        };
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scroll.prevY > scroll.y) setShowNav(true);
    else if (scroll.prevY === scroll.y) return;
    else setShowNav(false);
  }, [scroll]);

  return (
    <div className="sticky-top">
      <Navbar expand="lg" variant="dark" className={!showNav && "hideNav"}>
        <Container fluid>
          <a href="#myo" className="navbar-brand">
            MYO
          </a>
          <Navbar.Toggle aria-controls="custom-nav" />
          <Navbar.Collapse id="custom-nav">
            <Nav className="ml-auto">
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="/CV" className="nav-link">
                Resume
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
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
    </div>
  );
};

export default CustomNav;
