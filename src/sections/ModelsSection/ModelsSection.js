//-React Imports
import React from "react";

//-Style Imports
import styles from "./ModelsSection.module.css";

const ModelsSection = ({ zIndex }) => {
  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <div className={styles.Picture}></div>
      <div className={styles.SubContainer}>
        <div className={styles.Title}>
          <h2>3D MODELS</h2>
        </div>

        <div className={styles.Picture2}></div>
      </div>
    </section>
  );
};

export default ModelsSection;
