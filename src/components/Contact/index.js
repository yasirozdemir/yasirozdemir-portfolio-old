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
      <Row id="contact" className="justify-content-center no-gutters pr-lg-5">
        <Col
          xs={12}
          sm={10}
          md={7}
          lg={6}
          className="contact__left_up d-flex flex-column justify-content-center align-items-center pb-3 mb-4 pb-lg-0 mb-lg-0"
        >
          <h1 className="text-center mb-0">Contact Me!</h1>
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1680865177/portfolio/Contact-us_imkk4f.png"
            alt="Illustration from freesvgillustration.com"
            id="contact-img"
            style={{ maxWidth: "100%", maxHeight: "400px" }}
          />
        </Col>
        <Col xs={12} sm={10} md={7} lg={6} className="contact__right_down ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="group">
              <input type="text" name="user_name" placeholder="Name" required />
            </div>
            <div className="group">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
            </div>
            <div className="group">
              <textarea
                rows="8"
                name="message"
                placeholder="Your message"
                required
              />
            </div>
            <button type="submit" className="mx-0">
              Send
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
