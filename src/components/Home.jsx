import { Container, Row, Col } from "react-bootstrap";
import bobaPicture from "../imgs/boba-picture.JPG";
import "../styles/Home.css";

const Home = () => {
  return (
    <main>
      <Container
        fluid
        className="bg-dark"
        style={{ padding: 5, paddingBottom: 30 }}
      >
        <Row>
          <Col className="info-text">
            Hi, my name is Grant! I am a student at UCSD studying Math-CS hoping
            to be working in software engineering one day. On this website,
            you'll find some of the projects I've worked on either at school,
            internships, or even on my own for fun. Hopefully you'll enjoy this
            showcase I've set up!
          </Col>
          <Col>
            <img id="boba-picture" src={bobaPicture} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
