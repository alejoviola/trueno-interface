//-Imports
import React, { useEffect, useState } from "react";
import "./App.css";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

//- SECTIONS IMPORTS
import {
  MainSection,
  ModelsSection,
  IlusSection,
  MotionSection,
  Footer,
} from "./sections";

function App() {
  const [modal, setModal] = useState(0);
  const [previusModal, setPreviusModal] = useState(0);

  //-

  console.log(modal);
  console.log(previusModal);

  return (
    <ReactScrollWheelHandler
      className="container"
      upHandler={(e) => {
        if (modal > 0) {
          setPreviusModal(modal);
          setModal(modal - 1);
        } else {
          console.log("No view");
        }
      }}
      downHandler={(e) => {
        if (modal < 4) {
          setPreviusModal(modal);
          setModal(modal + 1);
        } else {
          console.log("No view");
        }
      }}
    >
      {(modal === 0 || previusModal === 0) && (
        <MainSection zIndex={modal === 0 ? 1 : 0} />
      )}
      {(modal === 1 || previusModal === 1) && (
        <ModelsSection zIndex={modal === 1 ? 1 : 0} />
      )}
      {(modal === 2 || previusModal === 2) && (
        <IlusSection zIndex={modal === 2 ? 1 : 0} />
      )}
      {(modal === 3 || previusModal === 3) && (
        <MotionSection zIndex={modal === 3 ? 1 : 0} />
      )}
      {(modal === 4 || previusModal === 4) && (
        <Footer zIndex={modal === 4 ? 1 : 0} />
      )}
    </ReactScrollWheelHandler>
  );
}

export default App;
