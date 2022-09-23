import { useState } from "react";
import TopNavbar from "./components/TopNavbar";
import AboutMe from "./components/AboutMe";
import ImpastaRosta from "./components/ImpastaRosta";
import Espresso from "./components/Espresso";
import FingerBreaker from "./components/FingerBreaker";
import UCLAJCCC from "./components/UCLAJCCC";
import Miscellaneous from "./components/Miscellaneous";

const App = () => {
  const [page, setPage] = useState("AboutMe");

  const getPage = () => {
    switch (page) {
      case "AboutMe":
        return <AboutMe />;
      case "ImpastaRosta":
        return <ImpastaRosta />;
      case "Espresso":
        return <Espresso />;
      case "FingerBreaker":
        return <FingerBreaker />;
      case "UCLA JCCC":
        return <UCLAJCCC />;
      case "Miscellaneous":
        return <Miscellaneous />;
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
