//-Imports
import React from "react";
import "./App.css";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

//- SECTIONS IMPORTS
import { MainSection } from "./sections";

import $ from "jquery";

function App() {
  return (
    <ReactScrollWheelHandler
      className="container"
      upHandler={(e) => console.log("scroll up")}
      downHandler={(e) => console.log("scroll down")}
    >
      <MainSection></MainSection>
    </ReactScrollWheelHandler>
  );
}

export default App;
