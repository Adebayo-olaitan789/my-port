import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 bg-dark text-white">
      <Container>
        <Row className="text-center">
          <Col>
            <div className="mb-3">
              <span className="fw-bold fs-4">
                <span className="text-primary">ADE</span>BAYO
              </span>
            </div>
            <div className="social-icons d-flex justify-content-center gap-3 mb-3">
              <a href="#" className="social-icon">
                <i className="bi bi-linkedin fs-5 text-primary"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-github fs-5 text-primary"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-twitter fs-5 text-primary"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-instagram fs-5 text-primary"></i>
              </a>
            </div>
            <p>© {currentYear} Adebayo.A. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
