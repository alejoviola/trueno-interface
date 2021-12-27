//-React Imports
import React from "react";

//-Style Imports
import styles from "./MotionSection.module.css";

const MotionSection = ({
  zIndex,
  picture1,
  picture2,
  onClickTitle,
  onClickOne,
  onClickTwo,
}) => {
  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <div className={styles.Pictures}>
        <div className={styles.PictureContainer1}>
          <div className={styles.ButtonContainer}>
            <button
              className={styles.PictureOne}
              style={{
                backgroundImage: "url(" + picture1 + ")",
              }}
              onClick={() => {
                onClickOne();
              }}
            ></button>
          </div>
        </div>
        <div className={styles.PictureContainer2}>
          <div className={styles.ButtonContainer}>
            <button
              className={styles.PictureTwo}
              style={{
                backgroundImage: "url(" + picture2 + ")",
              }}
              onClick={() => {
                onClickTwo();
              }}
            ></button>
          </div>
        </div>
      </div>
      <button
        className={styles.Title}
        onClick={() => {
          onClickTitle();
        }}
      >
        <h2>MOTION GRAPHICS</h2>
      </button>
    </section>
  );
};

export default MotionSection;
