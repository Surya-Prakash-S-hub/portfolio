import React from "react";
import Navigation from "./Components/NavSection";
import Footer from "./Components/FootSection";
import Home from "./Components/MainComponents/HomeSection";
import About from "./Components/MainComponents/AboutSection";
import Experience from "./Components/MainComponents/ExprSection";
import Contact from "./Components/MainComponents/ContSection";

function App() {

  return (
    <>
    <Navigation />
    <Home />
    <About />
    <Experience />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
