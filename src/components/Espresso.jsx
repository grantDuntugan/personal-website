import { Container, Figure } from "react-bootstrap";
import EmbeddedVideo from "./EmbeddedVideo";
import "../styles/styles.css";

const Espresso = () => {
  return (
    <main>
      <Container fluid className="bg-dark info-text">
        Espresso is a competitive workout app that I created with a team of six
        at a Software Engineering internship at SDSC.
      </Container>

      <EmbeddedVideo ID="aRnYhrHGSwc" />
    </main>
  );
};

export default Espresso;
