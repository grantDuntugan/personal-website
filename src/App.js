import "./styles/App.css";
import { useState } from "react";
import TopNavbar from "./components/TopNavbar";
import Home from "./components/Home";
import ImpastaRosta from "./components/ImpastaRosta";

const App = () => {
  const [page, setPage] = useState("Home");

  const getPage = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "ImpastaRosta":
        return <ImpastaRosta />;
      default:
        return (
          <main>
            Sorry, this page doesn't exist. Either because I made a mistake or
            because I was too lazy to make this page. It's a 50/50 to be honest.
          </main>
        );
    }
  };

  return (
    <>
      <TopNavbar setPage={setPage} />
      {getPage()}
    </>
  );
};

export default App;
