//- React and SPRING
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

//- Styles Imports
import styles from "./NavBar.module.css";

const NavBar = () => {
  //- MODAL
  const [showModal, setShowModal] = useState(false);

  //- ANIMATION SVG CROSS
  const animDuration = "0.3s";
  const animatedBuger = useSpring({
    from: { width: 0 },
    to: { width: 100 },
  });

  console.log(animatedBuger.width);

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
    <nav className={styles.Container}>
      <button className={styles.LogoOrange} onClick={() => {}}>
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
                stroke-width="15"
              />
              <animated.line
                {...animatedBar2}
                stroke="#ff8b00"
                stroke-width="15"
              />
            </g>
          )}
        </svg>
      </button>
    </nav>
  );
};

export default NavBar;
