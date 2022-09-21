import { Container, Figure } from "react-bootstrap";
import "../styles/styles.css";

const Espresso = () => {
  return (
    <main>
      <Container fluid className="bg-dark info-text">
        Espresso is a competitive workout app that I created with a team of six
        at a Software Engineering internship at SDSC.
      </Container>

      <Container className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/aRnYhrHGSwc`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </Container>
    </main>
  );
};

export default Espresso;
