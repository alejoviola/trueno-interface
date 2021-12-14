//-Imports
import React, { useEffect, useState } from "react";
import "./App.css";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

//- COMPONENTS IMPORTS
import NavBar from "./components/NavBar/NavBar";
import styles from "./components/NavBar/NavBar.module.css";

//- SECTIONS IMPORTS
import {
  MainSection,
  ModelsSection,
  IlusSection,
  MotionSection,
  Footer,
} from "./sections";

//- PICTURES IMPORTS
import models from "./lib/models.json";

function App() {
  const [modal, setModal] = useState(0);
  const [previusModal, setPreviusModal] = useState(0);

  //- MODAL
  const [showModal, setShowModal] = useState(false);

  console.log(modal);
  console.log(previusModal);

  const NavItems = () => {
    return (
      <>
        <li className={styles.NavItem}>
          <button
            className={`${styles.NavButton} ${
              modal == 0 ? styles.NavSelected : styles.NavNoSelected
            }`}
            onClick={() => {
              setPreviusModal(modal);
              setModal(0);
              setShowModal(false);
            }}
          >
            INICIO
          </button>
        </li>
        <li className={styles.NavItem}>
          <button
            className={`${styles.NavButton} ${
              modal == 1 ? styles.NavSelected : styles.NavNoSelected
            }`}
            onClick={() => {
              setPreviusModal(modal);
              setModal(1);
              setShowModal(false);
            }}
          >
            3D MODELS
          </button>
        </li>
        <li className={styles.NavItem}>
          <button
            className={`${styles.NavButton} ${
              modal == 2 ? styles.NavSelected : styles.NavNoSelected
            }`}
            onClick={() => {
              setPreviusModal(modal);
              setModal(2);
              setShowModal(false);
            }}
          >
            MOTION
          </button>
        </li>
        <li className={styles.NavItem}>
          <button
            className={`${styles.NavButton} ${
              modal == 3 ? styles.NavSelected : styles.NavNoSelected
            }`}
            onClick={() => {
              setPreviusModal(modal);
              setModal(3);
              setShowModal(false);
            }}
          >
            ILUSTRACION
          </button>
        </li>
        <li className={styles.NavItem}>
          <button
            className={`${styles.NavButton} ${
              modal == 4 ? styles.NavSelected : styles.NavNoSelected
            }`}
            onClick={() => {
              setPreviusModal(modal);
              setModal(4);
              setShowModal(false);
            }}
          >
            PAGINAS WEB
          </button>
        </li>
        <li className={styles.NavItem}>
          <button
            className={`${styles.NavButton} ${
              modal == 4 ? styles.NavSelected : styles.NavNoSelected
            }`}
            onClick={() => {
              setPreviusModal(modal);
              setModal(4);
              setShowModal(false);
            }}
          >
            CONTACTO
          </button>
        </li>
      </>
    );
  };

  console.log(models.models.moto.pictures.portada);

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
      <NavBar
        NavItems={NavItems}
        showModal={showModal}
        setShowModal={(value) => {
          setShowModal(value);
        }}
      />

      {(modal === 0 || previusModal === 0) && (
        <MainSection zIndex={modal === 0 ? 1 : 0} />
      )}
      {(modal === 1 || previusModal === 1) && (
        <ModelsSection
          zIndex={modal === 1 ? 1 : 0}
          picture={models.models.moto.pictures.portada}
          picture2={models.models.pistol.pictures.portada}
        />
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
