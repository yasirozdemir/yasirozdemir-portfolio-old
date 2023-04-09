import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const About = () => {
  return (
    <Container fluid id="about" className="my-5 py-0 py-md-5">
      <Row className="justify-content-center">
        <Col xs={10} className="about_col_up mt-0 mb-5 p-0">
          <h1>About Me</h1>
          <div className="about-me-par">
            <p>Hi, there! It's Muhammed Yasir 🧑‍💻</p>
            <p>
              I was born and grow up in Turkey. I'm super interested in aviation
              & space 🚀 I love to travel and meet people that has different
              cultural backgrounds from all around the world 🌎 I'm also a cat
              father, and love all the animals 🐱
            </p>
            <p>
              I'm a full-stack developer, an amateur mobile photographer ,and a
              full time learner 💻 I like to write, and trying to improve my
              writing skills, I'm sharing some of my essays on Medium ✏️
            </p>
          </div>
          <div className="links">
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
      <Row className="about_row_down justify-content-center">
        <Col xs={5} md={3} lg={2} xl={1} className="skill-badge m-2 m-md-3">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/icons/html_txesmj.png"
            alt="html"
          />
        </Col>
        <Col xs={5} md={3} lg={2} xl={1} className="skill-badge m-2 m-md-3">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680997908/portfolio/icons/css_ddpjtc.png"
            alt="css"
          />
        </Col>
        <Col xs={5} md={3} lg={2} xl={1} className="skill-badge m-2 m-md-3">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680880649/portfolio/icons/js_arqpiz.png"
            alt="js"
          />
        </Col>
        <Col xs={5} md={3} lg={2} xl={1} className="skill-badge m-2 m-md-3">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/icons/ts_q9vyqa.png"
            alt="ts"
          />
        </Col>
        <Col xs={5} md={3} lg={2} xl={1} className="skill-badge m-2 m-md-3">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680880726/portfolio/icons/bs_zjcqm1.png"
            alt="bs"
          />
        </Col>
        <Col xs={5} md={3} lg={2} xl={1} className="skill-badge m-2 m-md-3">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680880787/portfolio/icons/react_g7k5uy.png"
            alt="react"
          />
        </Col>
        <Col xs={5} md={3} lg={2} xl={1} className="skill-badge m-2 m-md-3">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/icons/Redux_mv93yn.png"
            alt="redux"
          />
        </Col>
        <Col xs={5} md={3} lg={2} xl={1} className="skill-badge m-2 m-md-3">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680997317/portfolio/icons/expressjs_logo_wzixvp_2295cb.png"
            alt="express"
          />
        </Col>
        <Col xs={5} md={3} lg={2} xl={1} className="skill-badge m-2 m-md-3">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680880857/portfolio/icons/node_vthzgb.png"
            alt="node"
          />
        </Col>
        <Col xs={5} md={3} lg={2} xl={1} className="skill-badge m-2 m-md-3">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680880942/portfolio/icons/mongo_dpryoe.png"
            alt="mongo"
          />
        </Col>
        <Col xs={5} md={3} lg={2} xl={1} className="skill-badge m-2 m-md-3">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680880938/portfolio/icons/postgresql_d6uyhn.png"
            alt="postgresql"
          />
        </Col>
        <Col xs={5} md={3} lg={2} xl={1} className="skill-badge m-2 m-md-3">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/icons/postman_iothff.png"
            alt="postman"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
