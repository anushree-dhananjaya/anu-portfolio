import { Col, Row } from "react-bootstrap";
import {
  DiCss3,
  DiGit,
  DiHtml5,
  DiJava,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact
} from "react-icons/di";

import {
  SiAmazonapigateway,
  SiAmazonaws,
  SiAmazondynamodb,
  SiAmazons3,
  SiAwslambda,
  SiOracle
} from 'react-icons/si';


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        {/* <Col xs={4} md={2} className="tech-icons">
          <Sisql />
        </Col> */}
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiOracle />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazons3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAwslambda />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonapigateway />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazondynamodb />
        </Col>
      </Row>

  );
}

export default Techstack;
