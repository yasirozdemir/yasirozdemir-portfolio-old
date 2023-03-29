import { Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "./style.css";

const WelcomePage = () => {
  return (
    <Col
      xs={12}
      id="welcome-page"
      className="d-flex d-lg-block flex-column align-items-center mb-5 mb-lg-0"
    >
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
            .typeString("<h2>BACK-END DEVELOPER</h2>")
            .pauseFor(3000)
            .deleteAll()
            .typeString("<h2>FULL-STACK DEVELOPER</h2>")
            .pauseFor(3000)
            .deleteAll()
            .start();
        }}
      />
      <div className="social-icons mr-2">
        <a href="#projects" className="d-inline-block d-lg-none mr-2">
          See my Projects
        </a>
        <a href="/CV" className="mr-2">
          Resume / CV
        </a>
        <a
          href="https://www.linkedin.com/in/muhammedyasirozdemir/"
          rel="noreferrer"
          target="_blank"
          className="mr-2"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yasirozdemir"
          rel="noreferrer"
          target="_blank"
          className="mr-2"
        >
          Github
        </a>
        <a href="mailto:muhammedyasirozdemircareer@gmail.com">Mail Me!</a>
      </div>
    </Col>
  );
};

export default WelcomePage;
