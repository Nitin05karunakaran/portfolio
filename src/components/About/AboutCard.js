import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Nitin Karunakaran</span>{" "}
            from <span className="purple">Kerala, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">TutorComp</span>.
            <br />I hold a B.Tech in{" "}
            <span className="purple">Information Technology</span> from{" "}
            <span className="purple">Adi Shankara Institute of Engineering and Technology</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking 🍽️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nitin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
