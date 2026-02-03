import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useRef } from "react";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = "Full Stack Developer";
    let i = 0;
    const typeWriter = () => {
      if (i < text.length && textRef.current) {
        textRef.current.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    setTimeout(typeWriter, 1000);
  }, []);

  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="text-center text-lg-start">
            <h5 className="text-primary mb-3">Hello, I'm</h5>
            <h1 className="display-1 fw-bold mb-3">ADEBAYO.A</h1>
            <h2 className="mb-4">
              <span className="text-primary">I'm a </span>
              <span ref={textRef} className="fw-bold"></span>
              <span className="typing-cursor">|</span>
            </h2>
            <p className="lead mb-4">
              Transforming ideas into exceptional digital experiences with
              modern technologies and creative solutions.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                className="rounded-pill px-4"
              >
                Hire Me
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                href="#projects"
                className="rounded-pill px-4"
              >
                View My Work
              </Button>
            </div>
          </Col>
          <Col lg={4} className="d-none d-lg-block text-center">
            <div className="profile-img-container">
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
