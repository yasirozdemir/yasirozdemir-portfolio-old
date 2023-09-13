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
      <Row>
        <Col className="d-flex justify-content-center">
          <iframe
            className="w-100"
            style={{ aspectRatio: "16/9" }}
            src="https://www.youtube.com/embed/_rA3CapbmYA?si=4lq6PjnzEtQRmTnv"
            title="What ai Movie Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
      <Row
        className="projects-row mt-3 justify-content-center"
        xs={1}
        md={2}
        lg={3}
      >
        <ProjectCard
          ghLink="https://github.com/yasirozdemir/capstone-project-fe"
          imgSrc="https://res.cloudinary.com/yasirdev/image/upload/v1684784752/portfolio/projects/11_wzqban.png"
          title="What ai Movie"
          description="What ai Movie is a web app that users can search for movies depending on their feeling, thoughts or desires."
          toolsArray={[
            "react",
            "redux",
            "bootstrap",
            "css",
            "express",
            "typescript",
            "mongoDB",
            "postman",
          ]}
        />
        <ProjectCard
          ghLink="https://github.com/yasirozdemir/u3-bw-linkedin"
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
