import { Container, Figure, Button } from "react-bootstrap";
import "../styles/styles.css";
import titleScreen from "../imgs/fb-title.PNG";
import enemyPicture from "../imgs/fb-enemy.PNG";
import testPicture from "../imgs/fb-test.PNG";
import scorePicture from "../imgs/fb-score.PNG";

const FingerBreaker = () => {
  return (
    <main style={{ fontFamily: "Montserrat" }}>
      <Container fluid className="bg-dark info-text">
        Finger Breaker is a typing game I made for fun using Pygame. The goal of
        the game is to defeat monsters by typing out words that appear on the
        screen.
      </Container>
      <Container fluid className="figure-container">
        <Figure>
          <Figure.Caption>Title Screen</Figure.Caption>
          <Figure.Image src={titleScreen} />
        </Figure>
      </Container>
      <Container fluid className="bg-dark info-text">
        When you click the start button, you'll be brought to a screen with an
        enemy in the middle and a word to type. Each word typed correctly will
        bring the enemy's health down. Once the enemy has reached 0 hp, then you
        will gain money which you can trade to gain more damage per word typed.
      </Container>
      <Container fluid className="figure-container">
        <Figure>
          <Figure.Caption>Defeat the spider!</Figure.Caption>
          <Figure.Image src={enemyPicture} />
        </Figure>
      </Container>
      <Container fluid className="bg-dark info-text">
        Along with this gamemode, there is a secret game mode that is
        essentially a typing test. This can be accessed by typing "test" in the
        title screen. The typing test will give you a timer and a word to type.
        For each word typed correctly, you will gain a point. But be careful!
        The more words you type correctly, the less time you will have to type
        the other words! When you run out of lives, you will be given a final
        screen showing your score.
      </Container>
      <Container fluid className="figure-container">
        <Figure>
          <Figure.Caption>How fast can you type?</Figure.Caption>
          <Figure.Image src={testPicture} />
          <Figure.Image src={scorePicture} />
        </Figure>
      </Container>
      <Container fluid className="bg-dark info-text">
        Given more time, I hope to rework the monster gamemode to include player
        health. This way, it pressures the player to type faster and allows for
        a system that will allow the player to build up their typing speed the
        more they play. I would also add an option to buy health with money in
        order to balance the choice between buying damage and health.
      </Container>
    </main>
  );
};

export default FingerBreaker;
