//-React Imports
import React from "react";

//-Style Imports
import styles from "./ModelsSection.module.css";

const ModelsSection = ({ zIndex, picture, picture2, onClick }) => {
  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <button
        className={styles.Picture}
        style={{
          backgroundImage: "url(" + picture + ")",
        }}
      ></button>
      <div className={styles.SubContainer}>
        <button
          className={styles.Title}
          onClick={() => {
            onClick();
          }}
        >
          <h2>3D MODELS</h2>
        </button>

        <button
          className={styles.Picture2}
          style={{
            backgroundImage: "url(" + picture2 + ")",
          }}
        ></button>
      </div>
    </section>
  );
};

export default ModelsSection;
