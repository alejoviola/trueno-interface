//-React Imports
import React from "react";

//-Style Imports
import styles from "./WorkSection.module.css";

const WorkSection = ({
  zIndex,
  picture,
  picture2,
  picture3,
  picture4,
  onClick1,
  onClick2,
  onClick3,
  onClick4,
}) => {
  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <div className={`${styles.PictureContainer} ${styles.One}`}>
        <div className={styles.ButtonContainer}>
          <button
            className={styles.Button}
            style={{
              backgroundImage: "url(" + picture + ")",
            }}
            onClick={() => {
              onClick1();
            }}
          />
        </div>
      </div>

      <div className={`${styles.PictureContainer} ${styles.Two}`}>
        <div className={styles.ButtonContainer}>
          <button
            className={styles.Button}
            style={{
              backgroundImage: "url(" + picture2 + ")",
            }}
            onClick={() => {
              onClick2();
            }}
          />
        </div>
      </div>

      <div className={`${styles.PictureContainer} ${styles.Three}`}>
        <div className={styles.ButtonContainer}>
          <button
            className={styles.Button}
            style={{
              backgroundImage: "url(" + picture3 + ")",
            }}
            onClick={() => {
              onClick3();
            }}
          />
        </div>
      </div>

      <div className={`${styles.PictureContainer} ${styles.Four}`}>
        <div className={styles.ButtonContainer}>
          <button
            className={styles.Button}
            style={
              picture4
                ? { backgroundImage: "url(" + picture4 + ")" }
                : { backgroundColor: "#7c02f6" }
            }
            onClick={() => {
              onClick4();
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
