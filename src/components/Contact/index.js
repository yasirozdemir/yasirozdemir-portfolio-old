import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const { REACT_APP_SERV_ID, REACT_APP_TEMP_ID, REACT_APP_USER_KEY } =
    process.env;
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    const result = await emailjs.sendForm(
      REACT_APP_SERV_ID,
      REACT_APP_TEMP_ID,
      form.current,
      REACT_APP_USER_KEY
    );
    console.log(result);
  };
  return (
    <Container fluid>
      <Row id="contact">
        <Col lg={6} className="d-none d-lg-block">
          Planning to put an illustration here :D
        </Col>
        <Col xs={12} lg={6}>
          <form ref={form} onSubmit={sendEmail}>
            <div className="group">
              <label>Name</label>
              <input type="text" name="user_name" required />
            </div>
            <div className="group">
              <label>Email</label>
              <input type="email" name="user_email" required />
            </div>
            <div className="group">
              <label>Message</label>
              <textarea rows="8" name="message" required />
            </div>
            <button type="submit">Send</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
