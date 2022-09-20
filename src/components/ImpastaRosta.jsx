import { Container, Figure } from "react-bootstrap";
import impastaHomePage from "../imgs/impasta-home.PNG";
import impastaRecipePage from "../imgs/impasta-recipe.PNG";
import impastaRecipeCard from "../imgs/impasta-recipe-card.PNG";
import impastaRecipeInstructions from "../imgs/impasta-recipe-instructions.PNG";
import impastaEditPage from "../imgs/impasta-edit-recipe.PNG";

const ImpastaRosta = () => {
  return (
    <main style={{ fontFamily: "Montserrat" }}>
      <Container
        fluid
        className="bg-secondary"
        style={{ fontSize: "x-large", color: "white", padding: "3vw" }}
      >
        Impasta Rosta is a recipe website I built along with nine other students
        for a project-oriented class at UCSD. (The class was CSE 110 if you were
        interested!)
      </Container>
      <Container fluid className="bg-dark" style={{ padding: "3vw" }}>
        <Figure>
          <Figure.Caption style={{ color: "white" }}>
            Impasta Rosta Home Page
          </Figure.Caption>
          <Figure.Image src={impastaHomePage} />
        </Figure>
        <Figure>
          <Figure.Caption style={{ color: "white" }}>
            Recipe Search Page
          </Figure.Caption>
          <Figure.Image src={impastaRecipePage} />
        </Figure>
      </Container>
      <Container
        fluid
        className="bg-secondary"
        style={{ fontSize: "x-large", color: "white", padding: "3vw" }}
      >
        This app is made for college students who have no experience cooking.
        Using the Spoonacular API, users are provided with a plethora of recipes
        to choose from, including a thumbnail of the recipe picture. If the user
        wants to make that recipe, they can click on the recipe card to be
        brought to the list of ingredients along with the instructions to make
        the food.
      </Container>
      <Container fluid className="bg-dark" style={{ padding: "3vw" }}>
        <Figure>
          <Figure.Caption style={{ color: "white" }}>
            Impasta Rosta Recipe Page
          </Figure.Caption>
          <Figure.Image src={impastaRecipeCard} />
          <Figure.Image src={impastaRecipeInstructions} />
        </Figure>
      </Container>
      <Container
        fluid
        className="bg-secondary"
        style={{ fontSize: "x-large", color: "white", padding: "3vw" }}
      >
        Once you find a recipe you like, you can add it to a cookbook to get
        back to it later. And once you become an expert, you might even want to
        edit the recipe yourself!
      </Container>
      <Container fluid className="bg-dark" style={{ padding: "3vw" }}>
        <Figure>
          <Figure.Caption style={{ color: "white" }}>
            Edit your saved recipes!
          </Figure.Caption>
          <Figure.Image src={impastaEditPage} />
        </Figure>
      </Container>
      <Container
        fluid
        className="bg-secondary"
        style={{ fontSize: "x-large", color: "white", padding: "3vw" }}
      >
        If you would like to take a look, you can find the website here:
        <br />
        <a href="https://impasta-rosta.netlify.app">
          https://impasta-rosta.netlify.app
        </a>
      </Container>
    </main>
  );
};

export default ImpastaRosta;
