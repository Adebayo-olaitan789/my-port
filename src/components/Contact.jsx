import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fyoi8hq", // Replace with your actual service ID
        "template_qqeeilm", // Replace with your actual template ID
        e.target,
        "23cC6xqy4YwEV7PV3" // Replace with your actual public key
      )
      .then(
        (result) => {
          setStatus({
            submitted: true,
            success: true,
            message: "Thank you! Your message has been sent successfully.",
          });
        },
        (error) => {
          setStatus({
            submitted: true,
            success: false,
            message: "Failed to send message. Please try again.",
          });
        }
      );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-4 fw-bold section-title">Contact Me</h2>
            <p className="lead">Get in touch</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="section-content">
              <Row>
                <Col lg={5} className="mb-4 mb-lg-0">
                  <h3 className="mb-4">Let's talk about everything!</h3>
                  <p>
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your vision.
                  </p>

                  <div className="contact-info mt-5">
                    <div className="d-flex mb-4">
                      <div className="contact-icon me-3">
                        <i className="bi bi-geo-alt text-primary fs-4"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Location</h5>
                        <p>Nigeria, Osun state</p>
                      </div>
                    </div>

                    <div className="d-flex mb-4">
                      <div className="contact-icon me-3">
                        <i className="bi bi-envelope text-primary fs-4"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Email</h5>
                        <p>anurudeen511@gmail.com</p>
                      </div>
                    </div>

                    <div className="d-flex mb-4">
                      <div className="contact-icon me-3">
                        <i className="bi bi-telephone text-primary fs-4"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Call</h5>
                        <p>+234 7066111881</p>
                      </div>
                    </div>

                    <div className="social-links mt-5">
                      <h5 className="mb-3">Follow Me</h5>
                      <div className="d-flex gap-3">
                        <a href="#" className="social-icon">
                          <i className="bi bi-linkedin fs-4 text-primary"></i>
                        </a>
                        <a href="#" className="social-icon">
                          <i className="bi bi-github fs-4 text-primary"></i>
                        </a>
                        <a href="#" className="social-icon">
                          <i className="bi bi-twitter fs-4 text-primary"></i>
                        </a>
                        <a href="#" className="social-icon">
                          <i className="bi bi-instagram fs-4 text-primary"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={7}>
                  {status.submitted && (
                    <Alert variant={status.success ? "success" : "danger"}>
                      {status.message}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="bg-dark text-white border-secondary"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Your Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="bg-dark text-white border-secondary"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter subject"
                        required
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Enter your message"
                        required
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      className="w-100 rounded-pill"
                    >
                      Send Message
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
