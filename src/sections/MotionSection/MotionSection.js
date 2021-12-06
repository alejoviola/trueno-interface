//-React Imports
import React from "react";

//-Style Imports
import styles from "./MotionSection.module.css";

const MotionSection = ({ zIndex }) => {
  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <div className={styles.Pictures}>
        <div className={styles.PictureOne}></div>
        <div className={styles.PictureTwo}></div>
      </div>
      <div className={styles.Title}>
        <h2></h2>
      </div>
    </section>
  );
};

export default MotionSection;
