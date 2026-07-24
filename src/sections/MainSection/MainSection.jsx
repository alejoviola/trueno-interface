//-React Imports
import React from "react";

//-Style Imports
import styles from "./MainSection.module.css";

import Scroll from "../../components/Scroll/Scroll";

const MainSection = ({ zIndex }) => {
  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <Scroll />

      <video className={styles.BackgroundVideo} autoPlay loop muted>
        <source src="./assets/reel.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default MainSection;
