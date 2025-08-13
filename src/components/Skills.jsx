import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "React.js", percentage: 92 },
    { name: "Bootstrap", percentage: 88 },
    { name: "Three.js", percentage: 75 },
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 85 },
    { name: "Express", percentage: 82 },
    { name: "MongoDB", percentage: 78 },
    { name: "PostgreSQL", percentage: 75 },
    { name: "RESTful APIs", percentage: 90 },
  ];

  return (
    <section id="skills" className="section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-4 fw-bold section-title">My Skills</h2>
            <p className="lead">My technical level</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="section-content">
              <Row>
                <Col lg={6} className="mb-4 mb-lg-0">
                  <h3 className="mb-4">Frontend Development</h3>
                  {frontendSkills.map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-bold">{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <ProgressBar
                        now={skill.percentage}
                        variant="primary"
                        style={{ height: "10px", borderRadius: "5px" }}
                      />
                    </div>
                  ))}
                </Col>
                <Col lg={6}>
                  <h3 className="mb-4">Backend Development</h3>
                  {backendSkills.map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-bold">{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <ProgressBar
                        now={skill.percentage}
                        variant="success"
                        style={{ height: "10px", borderRadius: "5px" }}
                      />
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
