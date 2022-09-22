import { Container, Figure } from "react-bootstrap";
import EmbeddedVideo from "./EmbeddedVideo";
import "../styles/styles.css";

import landingScreen from "../imgs/espresso-landing.png";
import homeScreen from "../imgs/espresso-home.PNG";
import leaderboard from "../imgs/espresso-leaderboard.PNG";
import singleTask from "../imgs/espresso-task.PNG";
import taskPage from "../imgs/espresso-task-page.PNG";
import rewardsPage from "../imgs/espresso-rewards-page.PNG";
import createReward from "../imgs/espresso-create-reward.PNG";
import createBoard from "../imgs/espresso-create-board.PNG";

const Espresso = () => {
  return (
    <main>
      <Container fluid className="bg-dark info-text">
        Espresso is a competitive productivity app that I created with a team of
        six at a Software Engineering internship at SDSC. The main goal of the
        app was to get friends to compete with each other over the amount of
        productive tasks they do in a week. In the app, you can create groups
        with other people to motivate yourself to workout. Each time you submit
        a task you completed, you'll be awarded a number of points. At the end
        of the week, the person with the top three most points will be awarded
        Beans, which is a virtual currency people can redeem for arbitrary
        rewards amongst their groups. There are a ton of things that you can do
        with this app, so here's a small demo video of the app. Note that this
        video was designed for someone to talk over it in a presentation, so it
        doesn't have audio.
      </Container>
      <EmbeddedVideo ID="aRnYhrHGSwc" />
      <Container fluid className="bg-dark info-text">
        The first thing that you'll notice is that there is a login and signup
        screen. The authentication system along with the entire database for the
        app was handled using Firebase. Once you log in, you'll be taken to the
        homescreen where you can see all of the groups that you're in and all
        the tasks you scheduled. These are under "My boards".
      </Container>
      <Container
        fluid
        className="bg-light figure-container d-flex justify-content-evenly"
      >
        <Figure>
          <Figure.Caption>Signup Screen</Figure.Caption>
          <Figure.Image src={landingScreen} />
          <Figure.Image src={homeScreen} />
        </Figure>
      </Container>
      <Container fluid className="bg-dark info-text">
        After clicking on a board, you can see a leaderboard of people with
        their profile pictures and the number of points that they have during
        the week. From there you can use the bottom navbar to create tasks for
        that board.
      </Container>
      <Container
        fluid
        className="bg-light figure-container d-flex justify-content-evenly"
      >
        <Figure>
          <Figure.Caption>
            Challenge your friends to working out or cleaning their house!
          </Figure.Caption>
          <Figure.Image src={leaderboard} />
        </Figure>
      </Container>
      <Container fluid className="bg-dark info-text">
        When you create tasks, you'll be able to create a title, description,
        and a point value for how much that task is worth. You can even pick the
        date the task is due by as well as if there is evidence required to be
        submitted along with the completion of the task. Tasks are then sorted
        into one of four categories: <b>Upcoming</b>, <b>On Hold</b>,{" "}
        <b>Completed</b>, and <b>Overdue</b>. If you're one of the admins of the
        leaderboard, you can also approve other people's task completions so
        that they can receive their points.
      </Container>
      <Container
        fluid
        className="bg-light figure-container d-flex justify-content-evenly"
      >
        <Figure>
          <Figure.Caption>Handle Tasks</Figure.Caption>
          <Figure.Image src={singleTask} />
          <Figure.Image src={taskPage} />
        </Figure>
      </Container>
      <Container fluid className="bg-dark info-text">
        From the leaderboard, you can also click on "Rewards" in order to see
        the rewards you can redeem in your group. This is my favorite part of
        the project (because I spent most of my time on this page!) These
        rewards are created by the people in the group and are meant to be fun
        things such as "Make a TikTok" or "Buy everyone a drink". Once you click
        on the redeem button on a reward card, you will use your points and the
        reward will be moved to the "Used" section so you can show everyone that
        you earned your reward. In addition to redeeming rewards with points,
        you can also set some rewards to be redeemed only if you're third place,
        second place, or first place.
      </Container>
      <Container
        fluid
        className="bg-light figure-container d-flex justify-content-evenly"
      >
        <Figure>
          <Figure.Caption>
            Maybe you can finally get your friend to do an embarrasing dance?
          </Figure.Caption>
          <Figure.Image src={rewardsPage} />
          <Figure.Image src={createReward} />
        </Figure>
      </Container>
      <Container fluid className="bg-dark info-text">
        One of the last core features we had was the ability to create boards.
        In the settings to create or edit your leaderboards, you can choose a
        title, description, cover picture, and set the members of the group by
        typing in their name. You can even set the refresh rate of the board if
        a week is too long or too short.
      </Container>
      <Container
        fluid
        className="bg-light figure-container d-flex justify-content-evenly"
      >
        <Figure>
          <Figure.Caption>
            For those with multiple friend groups! Or for organizing
            productivity spaces!
          </Figure.Caption>
          <Figure.Image src={createBoard} />
        </Figure>
      </Container>
      <Container fluid className="bg-dark info-text">
        Because this app was not meant to be commercialized and required a
        paid-Firebase account to work, this app is not located on the App Store.
        Instead, you can find this app on Expo.
      </Container>
    </main>
  );
};

export default Espresso;
