import { Container, Row, Col, Figure, Button, Collapse } from "react-bootstrap";
import { useState } from "react";
import bobaPicture from "../imgs/boba-picture.JPG";
import "../styles/styles.css";

const AboutMe = () => {
  const [open, setOpen] = useState({
    introCourses: false,
    tools: false,
    systems: false,
    advancedDS: false,
    compTheory: false,
    algo: false,
    softwareEng: false,
    operatingSys: false,
  });

  return (
    <main style={{ fontFamily: "Montserrat" }}>
      <Container className="d-flex justify-content-center text-large fs-1">
        About Me
      </Container>
      <Container
        fluid
        className="bg-dark"
        style={{
          padding: "3vw",
        }}
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
      <Container className="d-flex justify-content-center text-large fs-1">
        Computer Science Classes
      </Container>
      <Container fluid className="info-text bg-dark" style={{ padding: "3vw" }}>
        So far, I've taken the following classes:
        <br />
        <br />
        <ul className="cs-classes">
          <li className={open.introCourses ? "down-arrow" : ""}>
            <Button
              onClick={() =>
                setOpen({ ...open, ...{ introCourses: !open.introCourses } })
              }
              variant="dark"
              aria-expanded={open.introCourses}
            >
              CSE 8A, CSE 8B, CSE 12: Introductory Courses and Basic Data
              Structures
            </Button>
          </li>
          <Collapse in={open.introCourses} className="class-description">
            <div style={{ color: "white" }}>
              These classes are introductory courses that started off my coding
              career. In Python and Java, we went through the basics of coding
              along with the simple data structures such as arrays, arraylists,
              2D arrays, linked lists, hashmaps, and more. We also went over OOP
              topics such as inheritance, abstraction, polymorphism, ADTs, etc.
            </div>
          </Collapse>
          <li className={open.tools ? "down-arrow" : ""}>
            <Button
              onClick={() => setOpen({ ...open, ...{ tools: !open.tools } })}
              variant="dark"
              aria-expanded={open.tools}
            >
              CSE 15L: Software Tools and Techniques Laboratory
            </Button>
          </li>
          <Collapse in={open.tools} className="class-description">
            <div style={{ color: "white" }}>
              This class worked with SE tools such as debuggers, the CLI, and
              Git.
            </div>
          </Collapse>
          <li className={open.systems ? "down-arrow" : ""}>
            <Button
              onClick={() =>
                setOpen({ ...open, ...{ systems: !open.systems } })
              }
              variant="dark"
              aria-expanded={open.systems}
            >
              CSE 30: Computer Organization and Systems Programming
            </Button>
          </li>
          <Collapse in={open.systems} className="class-description">
            <div style={{ color: "white" }}>
              Here we learned to program in C and ARM in a UNIX environment.
              There was a large emphasis on pointers and memory management.
            </div>
          </Collapse>
          <li className={open.advancedDS ? "down-arrow" : ""}>
            <Button
              onClick={() =>
                setOpen({ ...open, ...{ advancedDS: !open.advancedDS } })
              }
              variant="dark"
              aria-expanded={open.advancedDS}
            >
              CSE 100: Advanced Data Structures
            </Button>
          </li>
          <Collapse in={open.advancedDS} className="class-description">
            <div style={{ color: "white" }}>
              In C++, we learned advanced data structures with a large emphasis
              on runtimes and optimizations. We implemented different types of
              trees, tries, and graphs. A few of these projects show up under
              the "Miscellaneous Projects" tab where I created a graph analyzer
              that takes in a csv file of nodes and edges and can run multiple
              analyses such as generate an MST and find a shortest path from one
              node to another. I also created a Huffman Coding Tree for
              compressing and decompressing files here.
            </div>
          </Collapse>
          <li className={open.compTheory ? "down-arrow" : ""}>
            <Button
              onClick={() =>
                setOpen({ ...open, ...{ compTheory: !open.compTheory } })
              }
              variant="dark"
              aria-expanded={open.compTheory}
            >
              CSE 105: Theory of Computability
            </Button>
          </li>
          <Collapse in={open.compTheory} className="class-description">
            <div style={{ color: "white" }}>
              This is a computational theory class where we learned about finite
              and push-down automata, context-free languages, the Turing
              machine, and regular expressions. We also discusesed ideas of
              undecidability and the halting problem.
            </div>
          </Collapse>
          <li className={open.algo ? "down-arrow" : ""}>
            <Button
              onClick={() => setOpen({ ...open, ...{ algo: !open.algo } })}
              variant="dark"
              aria-expanded={open.algo}
            >
              CSE 101: Design and Analysis of Algorithms
            </Button>
          </li>
          <Collapse in={open.algo} className="class-description">
            <div style={{ color: "white" }}>
              Imagine Leetcode problems stuffed into one class. We learned about
              creating efficient algorithms for sorting, searching, pattern
              matching, graphs, and networks. Rather than coding the solutions,
              we would use pseudocode and rigorously prove our solutions could
              solve the problem and the runtime of the solution.
            </div>
          </Collapse>
          <li className={open.softwareEng ? "down-arrow" : ""}>
            <Button
              onClick={() =>
                setOpen({ ...open, ...{ softwareEng: !open.softwareEng } })
              }
              variant="dark"
              aria-expanded={open.softwareEng}
            >
              CSE 110: Software Engineering
            </Button>
          </li>
          <Collapse in={open.softwareEng} className="class-description">
            <div style={{ color: "white" }}>
              One of my favorite classes, this was a project-based course where
              I teamed up with a group of 9 to build a recipe website. We
              simulated scrums and sprints, used Slack to communicate, and used
              GitHub to manage our project through an issue board and a CI/CD
              pipeline. You can find this project under the tab "Impasta Rosta",
              where we built the entire website using HTML/CSS/JS.
            </div>
          </Collapse>
          <li className={open.operatingSys ? "down-arrow" : ""}>
            <Button
              onClick={() =>
                setOpen({ ...open, ...{ operatingSys: !open.operatingSys } })
              }
              variant="dark"
              aria-expanded={open.operatingSys}
            >
              CSE 120: Principles of Computer Operating Systems
            </Button>
          </li>
          <Collapse in={open.operatingSys} className="class-description">
            <div style={{ color: "white" }}>
              The basics of how the OS works. The idea of the kernel,
              concurrency, memory management, virtual memory, file systems,
              scheduling, and security. In this class, I had to implement parts
              of an OS using nachOS in Java. These parts included semaphores,
              locks, the file system, and the virtual memory.
            </div>
          </Collapse>
        </ul>
      </Container>
      <Container className="d-flex justify-content-center text-large fs-1">
        Math Classes
      </Container>
      <Container fluid className="info-text bg-dark" style={{ padding: "3vw" }}>
        Of course, I'm also partly a Math major, so I've also taken my fair
        share of math courses as well. Although it doesn't involve direct
        computer science experience, I'll list them here so you know what I've
        written 50+ pages of proofs about:
        <ul style={{ padding: "3vh" }}>
          <li>
            <span className="math-class-title">
              MATH 18, MATH 170A, MATH 102: Linear Algebra
            </span>
            <br />
            <Container>
              Because this has ties to machine learning, I'll explain a little
              here. I went over matrix decompositions (QR and SVD), and
              implemented these decompositions to solve for a least squares
              problem in MATLAB.
            </Container>
          </li>
          <li>
            <span className="math-class-title">
              MATH 154: Discrete Mathematics and Graph Theory
            </span>
            <br />
            <Container>
              Again, similar to CS, I explored trees, walks, paths,
              connectivity, cycles, matching theory, flows, Hamiltonian and
              Eulerian cycles, and the famous traveling salesman problem.
            </Container>
          </li>
          <li>
            <span className="math-class-title">
              MATH 20C, MATH 20E: Multivariable Calculus
            </span>
          </li>
          <li>
            <span className="math-class-title">
              MATH 109: Mathematical Reasoning (Introduction to Proofs)
            </span>
          </li>
          <li>
            <span className="math-class-title">
              MATH 170B: Numerical Analysis: Approximation and Nonlinear
              Equations
            </span>
          </li>
          <li>
            <span className="math-class-title">
              MATH 180A: Introduction to Probability and Statistics
            </span>
          </li>
          <li>
            <span className="math-class-title">
              MATH 184: Enumerative Combinatorics
            </span>
          </li>
          <li>
            <span className="math-class-title">
              MATH 103A, MATH 103B: Group Theory, Ring Theory, Field Theory,
              Irreducibility of Polynomials
            </span>
          </li>
        </ul>
      </Container>
      <Container className="d-flex justify-content-center text-large fs-1">
        Future Studies
      </Container>
      <Container fluid className="info-text bg-dark" style={{ padding: "3vw" }}>
        I'm not done with my education quite yet and still have a lot to learn.
        This quarter, I'm taking a cryptography class to learn about challenging
        problems within security: a very modern and practical issue. I'm also
        taking a project-based data science course in order to learn how to use
        computers to analyze data effectively through tests and presentations
        within a group. In the future, I plan to further my computer science
        abilities by studying machine learning, computer networks, database
        principles and applications, and more. If you couldn't tell by now, I'm
        really into computers.
      </Container>
    </main>
  );
};

export default AboutMe;
