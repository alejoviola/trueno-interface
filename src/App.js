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
  WorkSection,
  Gallery,
} from "./sections";

//- PICTURES IMPORTS
import models from "./lib/models.json";

function App() {
  const [modal, setModal] = useState(0);
  const [previusModal, setPreviusModal] = useState(0);

  //- MODAL
  const [showModal, setShowModal] = useState(false);

  //- PICTURES DEL MENU
  const [picture, setPicture] = useState("");
  const [picture2, setPicture2] = useState("");
  const [picture3, setPicture3] = useState("");
  const [picture4, setPicture4] = useState("");

  //- PICTURES DE GALLERY
  const [item, setItem] = useState("");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");
  const [item4, setItem4] = useState("");

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

  return (
    <ReactScrollWheelHandler
      className="container"
      upHandler={(e) => {
        if (modal > 0 && modal < 5) {
          setPreviusModal(modal);
          setModal(modal - 1);
        } else {
          console.log("No view");
        }
      }}
      downHandler={(e) => {
        if (modal < 4 && modal > -1) {
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
        back={() => {
          setPreviusModal(modal);
          setModal(0);
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
          onClick={() => {
            setPicture(models.models.moto.pictures.portada);
            setPicture2(models.models.auris.pictures.portada);
            setPicture3(models.models.pistol.pictures.portada);
            setPreviusModal(modal);
            setModal(5);
          }}
          onClick1={() => {
            setItem(models.models.moto.pictures[1]);
            setItem2(models.models.moto.pictures[2]);
            setItem3(models.models.moto.pictures[3]);
            setItem4(models.models.moto.pictures[4]);
            setPreviusModal(modal);
            setModal(6);
          }}
          onClick2={() => {
            setItem(models.models.pistol.pictures[1]);
            setItem2(models.models.pistol.pictures[2]);
            setItem3(models.models.pistol.pictures[3]);
            setItem4(models.models.pistol.pictures[4]);
            setPreviusModal(modal);
            setModal(6);
          }}
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

      {(modal === 5 || previusModal === 5) && (
        <WorkSection
          zIndex={modal === 5 ? 1 : 0}
          picture={picture}
          picture2={picture2}
          picture3={picture3}
          picture4={picture4}
        />
      )}

      {(modal === 6 || previusModal === 6) && (
        <Gallery
          zIndex={modal === 6 ? 1 : 0}
          picture={item}
          picture2={item2}
          picture3={item3}
          picture4={item4}
        />
      )}
    </ReactScrollWheelHandler>
  );
}

export default App;
