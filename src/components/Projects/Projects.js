import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tuitionApp from "../../Assets/Projects/online_tuition_app.png";
import schoolApp from "../../Assets/Projects/school_college_app.png";
import whiteboardApp from "../../Assets/Projects/whiteboard_meeting_app.png";
import examApp from "../../Assets/Projects/exam_web_app.png";
import tutorcompWebsite from "../../Assets/Projects/tutorcomp_website.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tuitionApp}
              isBlog={false}
              title="Online Tuition Platform"
              description="A web application designed for conducting online tuition classes. Integrates a payment gateway, supports file sharing between users, provides order tracking, and includes automated report generation features."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schoolApp}
              isBlog={false}
              title="School/College Application"
              description="An educational management application featuring quiz and exam modules, scheduling and conducting online live classes, and easy file-sharing options between students and educators."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whiteboardApp}
              isBlog={false}
              title="Whiteboard & Video Meeting App"
              description="A real-time online collaboration application designed for conducting interactive classes and team meetings, featuring a dynamic digital whiteboard and secure video conferencing."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={examApp}
              isBlog={false}
              title="Exam Web Application"
              description="A secure web application designed to host online exams in real-time, providing student exam navigation and reliable progress tracking."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutorcompWebsite}
              isBlog={false}
              title="TutorComp Company Website"
              description="Designed and built the main web presence for TutorComp. Optimized the site for smooth performance, clean responsive design, and user-friendly experience."
              demoLink="https://tutorcomp.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
