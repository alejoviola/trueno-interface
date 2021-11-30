//-Imports
import React, { useEffect, useState } from "react";
import "./App.css";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

//- SECTIONS IMPORTS
import { MainSection, ModelsSection } from "./sections";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <ReactScrollWheelHandler
      className="container"
      upHandler={(e) => console.log("scroll up")}
      downHandler={(e) => setModal(true)}
    >
      <MainSection zIndex={0}></MainSection>

      {modal && <ModelsSection zIndex={1}></ModelsSection>}
    </ReactScrollWheelHandler>
  );
}

export default App;
