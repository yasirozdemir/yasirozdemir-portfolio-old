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
            have a look at all the repositories on GitHub
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
          imgSrc="https://res.cloudinary.com/yasirdev/image/upload/v1684745973/portfolio/projects/linkedin_pexq2v.jpg"
          title="LinkedIn Clone"
          description="A clone that users can create their profiles, add experiences, and see what others posted."
          toolsArray={["react", "redux", "bootstrap", "css"]}
        />
        <ProjectCard
          ghLink="https://github.com/pappkartoni/U2-BW-Deezify"
          imgSrc="https://res.cloudinary.com/yasirdev/image/upload/v1684745973/portfolio/projects/spotify_fd2uks.jpg"
          title="Spotify Clone"
          description="A clone that users can play music, have a look at the albums and artist."
          toolsArray={["html", "css", "javascript", "bootstrap"]}
        />
        <ProjectCard
          ghLink="https://github.com/Flovedev/U1-W4-BuildWeek"
          imgSrc="https://res.cloudinary.com/yasirdev/image/upload/v1684745973/portfolio/projects/epicode_rio1gr.jpg"
          title="Epicode Benchmark Clone"
          description="Epicode's benchmark webpage. It's basically a quiz app with 10 questions, a timer, and a result page."
          toolsArray={["html", "css", "javascript"]}
        />
      </Row>
    </Container>
  );
};

export default Projects;
