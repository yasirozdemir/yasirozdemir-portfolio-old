import ProjectCard from "./ProjectCard";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Projects = ({ observer }) => {
  const projects = document.querySelectorAll(".projects-row .col");
  projects.forEach((el) => observer.observe(el));

  return (
    <Container id="projects" className="mb-5">
      <Row>
        <Col xs={12}>
          <h1 className="text-center text-md-left">Projects</h1>
          <p>
            I'm currently working on polishing up more of my projects, you can
            have a look at the repositories on GitHub
          </p>
          <div className="links justify-content-center justify-content-md-start">
            <a
              href="https://github.com/yasirozdemir/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </Col>
      </Row>
      <Row
        className="projects-row mt-3 justify-content-center"
        xs={1}
        sm={2}
        md={3}
      >
        <ProjectCard
          ghLink="https://github.com/pappkartoni/U2-BW-Deezify"
          imgSrc="https://media.licdn.com/dms/image/D4D22AQG9J2dYwO6b8A/feedshare-shrink_2048_1536/0/1680953358932?e=1683763200&v=beta&t=h8P3MhVFp3x8znRxxAIlc17GgF3BvSc4VOPe49COD1c"
          title="LinkedIn Clone"
          description="A clone that users can create their profiles, add experiences, and see what others posted."
          toolsArray={["react", "redux", "bootstrap", "css"]}
        />
        <ProjectCard
          ghLink="https://github.com/pappkartoni/U2-BW-Deezify"
          imgSrc="https://media.licdn.com/dms/image/D4D22AQGaCX1YyyS93A/feedshare-shrink_2048_1536/0/1680159831974?e=1683763200&v=beta&t=0r5HcjNEng5ksRnk-ExHeKggOeEl8tea8YjnFrdpGGc"
          title="Spotify Clone"
          description="A clone that users can play music, have a look at the albums and artist."
          toolsArray={["html", "css", "javascript", "bootstrap"]}
        />
        <ProjectCard
          ghLink="https://github.com/Flovedev/U1-W4-BuildWeek"
          imgSrc="https://media.licdn.com/dms/image/C4D22AQGlDhx_vNY-7A/feedshare-shrink_2048_1536/0/1671395931002?e=1683763200&v=beta&t=n35obbg6yQNPq99Cw-eT6k3jRAHLuStcZXakbIlJTZE"
          title="Epicode Benchmark Clone"
          description="Epicode's benchmark webpage. It's basically a quiz app with 10 questions, a timer, and a result page."
          toolsArray={["html", "css", "javascript"]}
        />
      </Row>
    </Container>
  );
};

export default Projects;
