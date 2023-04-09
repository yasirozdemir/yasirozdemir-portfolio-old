import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = ({ observer }) => {
  const contactElements = document.querySelectorAll(".hidden");
  contactElements.forEach((el) => observer.observe(el));

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
    <Container>
      <Row id="contact" className="justify-content-center pr-lg-3 mb-3 mb-lg-5">
        <Col
          xs={12}
          sm={10}
          md={6}
          className="contact__left_up d-flex flex-column justify-content-center align-items-center pb-3 mb-4 pb-lg-0 mb-lg-0 hidden px-0"
        >
          <h1 className="text-center mb-0">Contact Me!</h1>
          <div className="img-wrapper">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680865177/portfolio/Contact-us_imkk4f.png"
              alt="Illustration from freesvgillustration.com"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </div>
        </Col>
        <Col xs={12} sm={10} md={6} className="contact__right_down px-0">
          <form ref={form} onSubmit={sendEmail}>
            <div className="group hidden">
              <input type="text" name="user_name" placeholder="Name" required />
            </div>
            <div className="group hidden">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
            </div>
            <div className="group hidden">
              <textarea
                rows="8"
                name="message"
                placeholder="Your message"
                required
              />
            </div>
            <div className="group hidden">
              <button type="submit" className="mx-0">
                Send
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
