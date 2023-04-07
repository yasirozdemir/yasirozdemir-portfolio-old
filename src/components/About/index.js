import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const About = () => {
  return (
    <Container fluid id="about">
      <Row className="justify-content-center">
        <Col xs={12} lg={10} className="about_col">
          <h1>ABOUT ME</h1>
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
          <h2>Tech Stack</h2>
          <ul className="tech-stack">
            <li>
              <img
                src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/html_txesmj.png"
                alt="html"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/yasirdev/image/upload/v1680878839/portfolio/css_vvbtkf.png"
                alt="css"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/js_pbgkgw.png"
                alt="js"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/ts_q9vyqa.png"
                alt="ts"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/bs_thiogx.png"
                alt="bs"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/react_awfte0.png"
                alt="react"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/Redux_mv93yn.png"
                alt="redux"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/yasirdev/image/upload/v1680879039/portfolio/express_azjmqo.png"
                alt="express"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/nodejs_vavnzn.jpg"
                alt="node"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/mongo_yzq9w3.png"
                alt="mongo"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/postgresql_uxhnvy.png"
                alt="postgresql"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/postman_iothff.png"
                alt="postman"
              />
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
