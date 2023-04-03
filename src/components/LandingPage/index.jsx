import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "./style.css";
import { Link } from "react-router-dom";
import { easeOut, motion as m } from "framer-motion";

const WelcomePage = () => {
  return (
    <Container fluid>
      <Row className="flex-column-reverse flex-lg-row">
        <Col xs={12} lg={4} id="landing-page__left_up">
          <div className="pfp-wrapper">
            <ul className="social-icons">
              <m.li
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5, ease: easeOut }}
              >
                <a href="#about">About</a>
              </m.li>
              <m.li
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5, ease: easeOut }}
              >
                <a href="/CV">Resume</a>
              </m.li>
              <m.li
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5, ease: easeOut }}
              >
                <Link to="/projects">Projects</Link>
              </m.li>
              <m.li
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: easeOut }}
              >
                <a href="/CV">Contact</a>
              </m.li>
              <m.li
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5, ease: easeOut }}
              >
                <a
                  href="https://www.linkedin.com/in/muhammedyasirozdemir/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </m.li>
              <m.li
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: easeOut }}
              >
                <a
                  href="https://github.com/yasirozdemir/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </m.li>
            </ul>
            <m.img
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 0.5, ease: easeOut }}
              src="https://res.cloudinary.com/yasirdev/image/upload/v1679173887/portfolio/pfp_zk9j0d.jpg"
              alt="pfp"
            />
          </div>
        </Col>
        <Col xs={12} lg={8} id="landing-page__right_down">
          <div style={{ overflow: "hidden" }}>
            <m.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: easeOut }}
              className="mb-0"
            >
              M. Yasir Ozdemir
            </m.h1>
          </div>
          <div className="d-none d-lg-block">
            <Typewriter
              className="lg"
              options={{
                autoStart: true,
                loop: true,
                cursor: "<h2>|</h2>",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("<h2>FRONTEND DEVELOPER</h2>")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("<h2>BACKEND DEVELOPER</h2>")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("<h2>FULL-STACK DEVELOPER</h2>")
                  .pauseFor(3000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <div className="d-block d-lg-none">
            <Typewriter
              className="lg"
              options={{
                autoStart: true,
                loop: true,
                cursor: "<h2>|</h2>",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("<h2>FRONTEND DEV</h2>")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("<h2>BACKEND DEV</h2>")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("<h2>FULL-STACK DEV</h2>")
                  .pauseFor(3000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomePage;
