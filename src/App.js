import { useState } from "react";
import TopNavbar from "./components/TopNavbar";
import Home from "./components/Home";
import ImpastaRosta from "./components/ImpastaRosta";
import Espresso from "./components/Espresso";
import FingerBreaker from "./components/FingerBreaker";

const App = () => {
  const [page, setPage] = useState("Home");

  const getPage = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "ImpastaRosta":
        return <ImpastaRosta />;
      case "Espresso":
        return <Espresso />;
      case "FingerBreaker":
        return <FingerBreaker />;
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
