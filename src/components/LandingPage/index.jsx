import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "./style.css";

const WelcomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={4} id="landing-page__left">
          <div className="pfp-wrapper">
            <ul className="social-icons">
              <li>
                <a href="/CV">About</a>
              </li>
              <li>
                <a href="/CV">LinkedIn</a>
              </li>
              <li>
                <a href="/CV">Github</a>
              </li>
              <li>
                <a href="/CV">Resume</a>
              </li>
              <li>
                <a href="/CV">Projects</a>
              </li>
              <li>
                <a href="/CV">Contact</a>
              </li>
            </ul>
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1679173887/portfolio/pfp_zk9j0d.jpg"
              alt="pfp"
            />
          </div>
        </Col>
        <Col xs={12} lg={8} id="landing-page__right">
          <h1 className="mb-0">M. Yasir Ozdemir</h1>
          <Typewriter
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
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomePage;
