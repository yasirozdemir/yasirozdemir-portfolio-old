import { Container, Row } from "react-bootstrap";

const CustomFooter = () => {
  return (
    <Container fluid>
      <Row
        className="flex-column justify-content-center align-items-center py-3"
        style={{ borderBlockStart: "solid 1px rgba(173, 173, 173, 0.5)" }}
      >
        <p className="mb-1 text-center">A fancy quote will show up here :D</p>
        <small style={{ color: "rgb(173, 173, 173" }}>
          2022 © Muhammed Yasir Ozdemir
        </small>
      </Row>
    </Container>
  );
};

export default CustomFooter;
