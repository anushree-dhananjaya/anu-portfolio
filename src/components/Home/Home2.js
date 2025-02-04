import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’ve developed a deep passion for data, and along the way, 
            I’ve definitely learned a thing or two, I think... 🤷‍♀️


              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, SQL, and cloud platforms like AWS. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building  &nbsp;
              <i>
                <b className="purple"> robust data pipelines, optimizing big data solutions, </b> and
                also in areas related to{" "}
                <b className="purple">
                developing cloud-native architectures.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for data engineering by working with tools like 
               <b className="purple">Apache Spark, AWS Lambda,</b> and
              <i>
                <b className="purple">
                  {" "}
                  frameworks like Kafka
                </b>
              </i>
              &nbsp; while also diving into 
              <i>
                <b className="purple"> real-time data processing and analytics.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
              
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anushree-dhananjaya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anushree-dhananjaya-74213565/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/a_n_u___d_j/profilecard/?igsh=cDJsdXZlNzlvY2l1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
