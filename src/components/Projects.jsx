import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import coin from "../assets/image/coin.jpeg";
import food from "../assets/image/food.jpeg";
import water from "../assets/image/water.jpeg";
import capture from "../assets/image/capture.jpg";
import capture2 from "../assets/image/capture2.jpg";
import capture5 from "../assets/image/capture5.jpg";

const Projects = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "coin-mining",
      category: "Web Development",
      image: coin,
      description: "A unique website for mining coin",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Stripe API",
      ],
      github: "https://github.com/Adebayo-olaitan789/lastrollin",
      website: "miningsite.netlify.app",
    },
    {
      id: 2,
      title: "food ingredient",
      category: "Web development",
      image: food,
      description: "A responsive website built with modern technologies.",
      technologies: ["React", "Material-UI", "Redux", "React DnD"],
      github: "https://github.com/Adebayo-olaitan789/food",
      website: "https://foodlasp.netlify.app/",
    },
    {
      id: 3,
      title: "water consumption",
      category: "Web development",
      image: water,
      description:
        "An innovative web app that generates Water Generation Solutions using AI-Driven Adaptive Automated Control.",
      technologies: ["React", "D3.js", "Bootstrap", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/water-consumption",
      website: "https://water-consumption-app.com",
    },
    {
      id: 4,
      title: "Real Estate Listing Platform",
      category: "Web Development",
      image: capture2,
      description:
        "A property listing platform with advanced search features, interactive maps, and virtual tours.",
      technologies: ["React", "boostrap"],
      github: "https://github.com/Adebayo-olaitan789/poly-ibd",
      website: "https://poly-ibd.netlify.app/",
    },
    {
      id: 5,
      title: "A ecoomece website",
      category: "Web Application",
      image: capture5,
      description: "an interactive e-shop website ",
      technologies: ["React", "boostrap"],
      github: "https://github.com/Adebayo-olaitan789/e-shop",
      website: "https://e-shopgadget.netlify.app/",
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "Personal Project",
      image: capture,
      description:
        "A personal portfolio website with 3D elements, interactive UI, and responsive design.",
      technologies: ["React", "Three.js", "Bootstrap", "GSAP", "Node.js"],
      github: "https://github.com/yourusername/portfolio",
      website: "https://yourportfolio.com",
    },
  ];

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section id="projects" className="section bg-dark text-white">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-4 fw-bold section-title">My Projects</h2>
            <p className="lead">Here are some of my recent works</p>
          </Col>
        </Row>
        <Row>
          {projects.map((project) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <Card
                className="project-card h-100 bg-dark text-white border-0 overflow-hidden"
                style={{ borderRadius: "15px" }}
              >
                <div className="position-relative">
                  <Card.Img variant="top" src={project.image} />
                  <div
                    className="project-overlay d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100"
                    style={{ background: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <Button
                      variant="outline-light"
                      className="rounded-circle me-2"
                      onClick={() => handleShow(project)}
                    >
                      <i className="bi bi-eye"></i>
                    </Button>
                    <Button
                      variant="outline-light"
                      className="rounded-circle me-2"
                      href={project.github}
                      target="_blank"
                    >
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button
                      variant="outline-light"
                      className="rounded-circle"
                      href={project.website}
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <span className="badge bg-primary mb-2">
                    {project.category}
                  </span>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-truncate">
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Project Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="bg-dark text-white border-0">
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Row>
            <Col md={6}>
              <img
                src={selectedProject?.image}
                alt={selectedProject?.title}
                className="img-fluid rounded mb-3"
              />
            </Col>
            <Col md={6}>
              <h5>Project Details</h5>
              <p>{selectedProject?.description}</p>
              <h6 className="mt-4">Technologies Used:</h6>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {selectedProject?.technologies.map((tech, index) => (
                  <span key={index} className="badge bg-primary">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="d-flex gap-2 mt-3">
                <Button
                  variant="outline-light"
                  href={selectedProject?.github}
                  target="_blank"
                >
                  <i className="bi bi-github me-1"></i> GitHub
                </Button>
                <Button
                  variant="outline-primary"
                  href={selectedProject?.website}
                  target="_blank"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i> Live Site
                </Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Projects;
