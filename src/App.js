import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar
        title="Awesome Text Editor"
        home="Home"
        about="About"
        dropdown="Get More"
        action="work in progress"
        another_action="work in progress"
        something_else="work in progress"
        disable="Disable"
        search="Search"
      />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to Analyse below!" />
        <About />
      </div>
    </>
  );
}

export default App;
