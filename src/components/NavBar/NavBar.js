//- React and SPRING
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

//- Styles Imports
import styles from "./NavBar.module.css";

const NavBar = ({ NavItems, showModal, setShowModal, back }) => {
  //- ANIMATION SVG CROSS
  const animDuration = "0.3s";

  const animatedBar1 = useSpring({
    x1: showModal ? 5 : 5,
    x2: showModal ? 95 : 95,
    y1: showModal ? -5 : 50,
    y2: showModal ? 75 : 50,
  });
  const animatedBar2 = useSpring({
    x1: showModal ? 95 : 95,
    x2: showModal ? 5 : 5,
    y1: showModal ? -5 : 50,
    y2: showModal ? 75 : 50,
  });

  return (
    <>
      <header className={styles.Container}>
        <button
          className={styles.LogoOrange}
          onClick={() => {
            back();
          }}
        >
          TRUENO
        </button>

        <button
          className={styles.BurgerMenu}
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <svg
            className={styles.Burger}
            viewBox="0 0 100 50"
            width="35"
            height="35"
            overflow="visible"
          >
            {!showModal && (
              <g>
                <rect
                  className={styles.BurgerBar}
                  height="15"
                  fill="#ff8b00"
                  style={{ animationDuration: "0.9s" }}
                />
                <rect
                  y="30"
                  className={styles.BurgerBar}
                  height="15"
                  fill="#ff8b00"
                  style={{ animationDuration: "0.7s" }}
                />
                <rect
                  y="60"
                  className={styles.BurgerBar}
                  height="15"
                  fill="#ff8b00"
                  style={{ animationDuration: "0.5s" }}
                />
              </g>
            )}
            {showModal && (
              <g className={styles.Cross}>
                <animated.line
                  {...animatedBar1}
                  stroke="#ff8b00"
                  strokeWidth="15"
                />
                <animated.line
                  {...animatedBar2}
                  stroke="#ff8b00"
                  strokeWidth="15"
                />
              </g>
            )}
          </svg>
        </button>
      </header>

      {showModal && (
        <nav className={styles.NavContainer}>
          <ul className={styles.NavItemContainer}>
            <NavItems />
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
