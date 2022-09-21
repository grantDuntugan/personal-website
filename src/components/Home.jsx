import { Container, Row, Col, Figure } from "react-bootstrap";
import bobaPicture from "../imgs/boba-picture.JPG";
import "../styles/styles.css";

const Home = () => {
  return (
    <main style={{ fontFamily: "Montserrat" }}>
      <Container
        fluid
        className="bg-dark"
        style={{ padding: 5, paddingBottom: 30, paddingTop: 40 }}
      >
        <Row>
          <Col className="info-text d-flex align-items-center">
            Hi, my name is Grant! I am a student at UCSD studying Math-CS hoping
            to be working in software engineering one day. On this website,
            you'll find some of the projects I've worked on either at school,
            internships, or even on my own for fun. Hopefully you'll enjoy this
            showcase I've set up!
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Figure>
              <Figure.Image src={bobaPicture} />
              <Figure.Caption style={{ color: "black" }}>
                Coding with boba!
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
