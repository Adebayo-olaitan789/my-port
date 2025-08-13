import React, { useState, useEffect } from "react";
import { Navbar as BNavbar, Nav, Container } from "react-bootstrap";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BNavbar
      expand="lg"
      fixed="top"
      className={`${
        scrolled ? "bg-dark" : "bg-transparent"
      } transition-all py-3`}
      variant="dark"
    >
      <Container>
        <BNavbar.Brand href="#home" className="fw-bold fs-3">
          <span className="text-primary">ADE</span>BAYO
        </BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="mx-2">
              About
            </Nav.Link>
            <Nav.Link href="#projects" className="mx-2">
              Projects
            </Nav.Link>
            <Nav.Link href="#skills" className="mx-2">
              Skills
            </Nav.Link>
            <Nav.Link href="#contact" className="mx-2">
              Contact
            </Nav.Link>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};

export default Navbar;
