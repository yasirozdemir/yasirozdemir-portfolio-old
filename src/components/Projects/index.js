import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Projects = () => {
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
        <Col>
          <div className="project-card">
            <div>
              <img
                src="https://media.licdn.com/dms/image/D4D22AQG9J2dYwO6b8A/feedshare-shrink_2048_1536/0/1680953358932?e=1683763200&v=beta&t=h8P3MhVFp3x8znRxxAIlc17GgF3BvSc4VOPe49COD1c"
                alt="project"
                className="w-100"
              />
            </div>
            <div>
              <h5 className="text-center">LinkedIn Clone</h5>
              <p className="m-0">
                A clone that users can create their profiles, add experiences,
                and see what others posted.
              </p>
            </div>
            <div className="badge-container">
              <span className="tool-badge react">React</span>
              <span className="tool-badge redux">Redux</span>
              <span className="tool-badge bootstrap">Bootstrap</span>
            </div>
          </div>
        </Col>
        <Col>
          <div className="project-card">
            <div>
              <img
                src="https://media.licdn.com/dms/image/D4D22AQGaCX1YyyS93A/feedshare-shrink_2048_1536/0/1680159831974?e=1683763200&v=beta&t=0r5HcjNEng5ksRnk-ExHeKggOeEl8tea8YjnFrdpGGc"
                alt="project"
                className="w-100"
              />
            </div>
            <div>
              <h5 className="text-center">Spotify Clone</h5>
              <p className="m-0">
                A clone that users can play music, have a look at the albums and
                artist.
              </p>
            </div>
            <div className="badge-container">
              <span className="tool-badge html">HTML</span>
              <span className="tool-badge css">CSS</span>
              <span className="tool-badge javascript">JavaScript</span>
            </div>
          </div>
        </Col>
        <Col>
          <div className="project-card">
            <div>
              <img
                src="https://media.licdn.com/dms/image/C4D22AQGlDhx_vNY-7A/feedshare-shrink_2048_1536/0/1671395931002?e=1683763200&v=beta&t=n35obbg6yQNPq99Cw-eT6k3jRAHLuStcZXakbIlJTZE"
                alt="project"
                className="w-100"
              />
            </div>
            <div>
              <h5 className="text-center">Epicode Benchmark Clone</h5>
              <p className="m-0">
                Epicode's benchmark webpage. It's basically a quiz app with 10
                questions, a timer, and a result page.
              </p>
            </div>
            <div className="badge-container">
              <span className="tool-badge html">HTML</span>
              <span className="tool-badge css">CSS</span>
              <span className="tool-badge javascript">JavaScript</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
