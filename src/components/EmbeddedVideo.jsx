import { Container } from "react-bootstrap";
import "../styles/styles.css";

const EmbeddedVideo = (props) => {
  return (
    <Container className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${props.ID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Container>
  );
};

export default EmbeddedVideo;
