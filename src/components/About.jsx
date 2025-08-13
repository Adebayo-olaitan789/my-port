import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import mine from "../assets/image/mine.jpeg";

const About = () => {
  return (
    <section id="about" className="section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-4 fw-bold section-title">About Me</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="section-content">
              <Row className="align-items-center">
                <Col lg={5} className="mb-4 mb-lg-0">
                  <img
                    src={mine}
                    alt="About Me"
                    className="img-fluid rounded"
                    style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
                  />
                </Col>
                <Col lg={7}>
                  <h3 className="mb-4">Who I Am</h3>
                  <p className="lead">
                    I'm a passionate Full Stack Developer with over 5 years of
                    experience in building web applications and digital
                    experiences that users love.
                  </p>
                  <p>
                    With expertise in React, Node.js, and modern web
                    technologies, I focus on creating clean, efficient, and
                    user-friendly solutions. I believe in the power of
                    technology to transform businesses and improve lives.
                  </p>
                  <div className="d-flex flex-wrap mt-4">
                    <div className="me-4 mb-3">
                      <h6 className="text-primary">Name:</h6>
                      <p>Adebayo.A</p>
                    </div>
                    <div className="me-4 mb-3">
                      <h6 className="text-primary">Email:</h6>
                      <p>Anurudeen511@gmail.com</p>
                    </div>
                    <div className="me-4 mb-3">
                      <h6 className="text-primary">Phone:</h6>
                      <p>07066111881, 09033625429</p>
                    </div>
                    <div className="mb-3">
                      <h6 className="text-primary">Location:</h6>
                      <p>Nigeria, Osun State</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col lg={12}>
                  <h3 className="mb-4 text-center">What I Do</h3>
                </Col>
                {[
                  {
                    title: "Front-end Development",
                    description:
                      "Creating responsive, interactive user interfaces with modern frameworks like React.",
                  },
                  {
                    title: "Back-end Development",
                    description:
                      "Building robust server-side applications and APIs with Node.js, Express, and MongoDB.",
                  },
                  {
                    title: "UI/UX Design",
                    description:
                      "Designing intuitive and beautiful user experiences that solve real problems.",
                  },
                ].map((service, index) => (
                  <Col lg={4} md={6} className="mb-4" key={index}>
                    <Card
                      className="h-100 bg-dark text-white border-0"
                      style={{ borderRadius: "15px" }}
                    >
                      <Card.Body className="p-4">
                        <div className="mb-3 text-primary">
                          <i
                            className={`bi bi-${
                              index === 0
                                ? "code-slash"
                                : index === 1
                                ? "server"
                                : "palette"
                            } fs-2`}
                          ></i>
                        </div>
                        <Card.Title>{service.title}</Card.Title>
                        <Card.Text>{service.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
