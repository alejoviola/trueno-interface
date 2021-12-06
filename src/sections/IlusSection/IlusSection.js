//-React Imports
import React from "react";

//-Style Imports
import styles from "./IlusSection.module.css";

const IlusSection = ({ zIndex }) => {
  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <div className={styles.Title}>
        <h2>ILUSTRACION</h2>
      </div>
      <div className={styles.Picture}></div>
    </section>
  );
};

export default IlusSection;
