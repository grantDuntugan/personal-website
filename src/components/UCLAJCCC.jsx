import { Container, Figure, Row } from "react-bootstrap";
import dotplot from "../imgs/dotplot-no-labels.PNG";
import heatmap from "../imgs/heatmap-no-labels.PNG";

const UCLAJCCC = () => {
  return (
    <main style={{ fontFamily: "Montserrat" }}>
      <Container fluid className="bg-dark info-text">
        I interned at the Jonsson Comprehensive Cancer Center as a programmer
        analyst. While I can't post any pictures or describe too much in detail
        until the research paper regarding my work has released (legal reasons),
        I can describe some of the analyses I was involved in.
        <br />
        <br />
        Given a couple of datasets involving clinical and genomic information, I
        was responsible for cleaning and organizing the data into an R dataframe
        as well as perform meaningful statistical tests and generate
        visualizations to present significant results. Here are some examples of
        the graphs I made without any labels:
      </Container>
      <Container className="d-flex flex-column justify-content-center">
        <Row>
          <Figure className="d-flex justify-content-center">
            <Figure.Image src={dotplot} />
          </Figure>
        </Row>
        <Row>
          <Figure className="d-flex justify-content-center">
            <Figure.Image src={heatmap} />
          </Figure>
        </Row>
      </Container>
      <Container fluid className="bg-dark info-text">
        I mainly used non-parametric tests as most of our clinical data was not
        expected to have a normal distribution. I used Kendall's correlation
        coefficient for ordinal to ordinal variable relationships, and found
        effect sizes with the Chi-Squared Test of Independence as well as the
        Kruskal-Wallis test.
      </Container>
      <Container fluid className="bg-dark info-text">
        While the analysis was very "data science" heavy, I still applied many
        aspects of software engineering to the job including scrum meetings,
        GitHub code management, and working with R packages. The lab I worked in
        had coding standards and their own plotting packages I had to quickly
        learn and adapt to.
      </Container>
      <Container fluid className="bg-dark info-text">
        In addition to this, I was even able to point out a serious
        inconsistency within our dataset which saved our team from inaccurate
        analyses. We handled this by stratifying by subcategories within our
        dataframe, which will be the main strategy of dealing with this dataset
        in the future.
      </Container>
    </main>
  );
};

export default UCLAJCCC;
