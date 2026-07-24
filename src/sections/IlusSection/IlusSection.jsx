//-React Imports
import React from "react";

//-Style Imports
import styles from "./IlusSection.module.css";

const IlusSection = ({ zIndex, picture, onClick1, onClickTitle }) => {
  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <button
        className={styles.Title}
        onClick={() => {
          onClickTitle();
        }}
      >
        <h2>ILUSTRACIONES</h2>
      </button>
      <div className={styles.PictureContainer}>
        <div className={styles.ButtonContainer}>
          <button
            className={styles.Picture}
            style={{
              backgroundImage: "url(" + picture + ")",
            }}
            onClick={() => {
              onClick1();
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default IlusSection;
