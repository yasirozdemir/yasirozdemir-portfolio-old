import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

const Contact = ({ observer }) => {
  const contactElements = document.querySelectorAll(".hidden");
  contactElements.forEach((el) => observer.observe(el));

  const alertOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const { REACT_APP_SERV_ID, REACT_APP_TEMP_ID, REACT_APP_USER_KEY } =
    process.env;
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const user_name = document.getElementsByName("user_name")[0].value;
      const user_email = document.getElementsByName("user_email")[0].value;
      const message = document.getElementsByName("message")[0].value;
      const mail = {
        user_name,
        user_email,
        message,
      };
      const result = await emailjs.send(
        REACT_APP_SERV_ID,
        REACT_APP_TEMP_ID,
        mail,
        REACT_APP_USER_KEY
      );
      if (result.status === 200) {
        toast.success("Your message has been sent!", alertOptions);
        document.querySelector("#contact form").reset();
      } else toast.error("Something went wrong :(", alertOptions);
    } catch (error) {
      toast.error(error, alertOptions);
    }
  };

  return (
    <>
      <Container className="pt-5">
        <Row
          id="contact"
          className="justify-content-center pr-lg-3 mb-4 mb-lg-5"
        >
          <Col
            xs={12}
            sm={10}
            md={6}
            className="contact__left_up d-flex flex-column justify-content-center align-items-center pb-3 mb-4 pb-lg-0 mb-lg-0 hidden px-2 px-sm-0"
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
          <Col
            xs={12}
            sm={10}
            md={6}
            className="contact__right_down px-2 px-sm-0"
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="group hidden">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
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
    </>
  );
};

export default Contact;
