import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  return (
    <Container id="projects" className="mb-4">
      <Row xs={12}>
        <Col>
          <h1 className="text-center text-md-left">Projects</h1>
          <p>
            I'm currently working on polishing up more of my projects, you can
            have a look at the repositories on GitHub:
          </p>
          <div className="links justify-content-center justify-content-md-start">
            <a
              href="https://github.com/yasirozdemir/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
