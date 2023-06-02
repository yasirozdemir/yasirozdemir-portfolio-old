import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const About = ({ observer }) => {
  const skillBadges = document.querySelectorAll(".col.hidden");
  skillBadges.forEach((el) => observer.observe(el));

  return (
    <Container id="about" className="my-5 py-0">
      <Row className="justify-content-center">
        <Col xs={12} className="about_col_up mt-5 mb-4">
          <h1 className="text-center text-md-left">About Me</h1>
          <div className="about-me-par">
            <p className="text-justify" style={{ textIndent: "2rem" }}>
              Hi, there! It's Muhammed Yasir 🧑‍💻 I am a young full-stack web
              developer with diverse international experience, an interest in
              technology, and a passion for continuous learning. I have recently
              completed EPICODE's full-stack developer boot camp that helped me
              develop a range of skills in web development, including
              TypeScript, React, Express, and Node.js. Currently, I am looking
              for a job as a full-stack developer in a dynamic and innovative
              company where I can keep enhancing my soft & hard skills, and make
              an impact.
            </p>
          </div>
          <div className="links justify-content-center justify-content-md-start">
            <a
              href="https://medium.com/@muhammedyasirozdemir/"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
            <a
              href="https://www.instagram.com/yasirunofficial_/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </Col>
      </Row>
      <h1 className="text-center text-md-left">Tech Stack</h1>
      <Row xs={2} sm={3} md={4} lg={6} xl={12} className="about_row_down">
        <Col className="d-flex justify-content-center p-0 hidden">
          <div className="skill-badge">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/icons/html_txesmj.png"
              alt="html"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center p-0 hidden">
          <div className="skill-badge">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680997908/portfolio/icons/css_ddpjtc.png"
              alt="css"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center p-0 hidden">
          <div className="skill-badge">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680880649/portfolio/icons/js_arqpiz.png"
              alt="js"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center p-0 hidden">
          <div className="skill-badge">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/icons/ts_q9vyqa.png"
              alt="ts"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center p-0 hidden">
          <div className="skill-badge">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680880726/portfolio/icons/bs_zjcqm1.png"
              alt="bs"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center p-0 hidden">
          <div className="skill-badge">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680880787/portfolio/icons/react_g7k5uy.png"
              alt="react"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center p-0 hidden">
          <div className="skill-badge">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/icons/Redux_mv93yn.png"
              alt="redux"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center p-0 hidden">
          <div className="skill-badge">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680997317/portfolio/icons/expressjs_logo_wzixvp_2295cb.png"
              alt="express"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center p-0 hidden">
          <div className="skill-badge">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680880857/portfolio/icons/node_vthzgb.png"
              alt="node"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center p-0 hidden">
          <div className="skill-badge">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680880942/portfolio/icons/mongo_dpryoe.png"
              alt="mongo"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center p-0 hidden">
          <div className="skill-badge">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680880938/portfolio/icons/postgresql_d6uyhn.png"
              alt="postgresql"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center p-0 hidden">
          <div className="skill-badge">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/icons/postman_iothff.png"
              alt="postman"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
