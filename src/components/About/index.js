import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { easeOut, motion as m } from "framer-motion";

const About = () => {
  return (
    <m.div
      initial={{ y: "-100%", opacity: 0.5 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5, ease: easeOut }}
    >
      <Container fluid id="about">
        <Row>
          <Col xs={12} lg={4} className="about__left_up">
            <h1>ABOUT ME</h1>
            <div className="about-me-par">
              <p>Hi, there! It's Muhammed Yasir 🧑‍💻</p>
              <p>
                I was born and grow up in Turkey. I'm super interested in
                aviation & space 🚀 I love to travel and meet people that has
                different cultural backgrounds from all around the world 🌎 I'm
                also a cat father, and love all the animals 🐱
              </p>
              <p>
                I'm a full-stack developer, an amateur mobile photographer ,and
                a full time learner 💻 I like to write, and trying to improve my
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
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>Redux.js</li>
              <li>HTTP</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>NoSQL Databases</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Relational Databases</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
              <li>Postman</li>
              <li>Cloudinary</li>
              <li>Vercel</li>
              <li>Railway</li>
              <li>Cyclic</li>
            </ul>
          </Col>
          <Col xs={12} lg={8} className="about__right_down"></Col>
        </Row>
      </Container>
    </m.div>
  );
};

export default About;
