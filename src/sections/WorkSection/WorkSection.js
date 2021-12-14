//-React Imports
import React from "react";

//-Style Imports
import styles from "./WorkSection.module.css";

const WorkSection = ({ zIndex, picture, picture2, picture3, picture4 }) => {
  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <button
        className={`${styles.Button} ${styles.One}`}
        style={{
          backgroundImage: "url(" + picture + ")",
        }}
      />
      <button
        className={`${styles.Button} ${styles.Two}`}
        style={{
          backgroundImage: "url(" + picture2 + ")",
        }}
      />
      <button
        className={`${styles.Button} ${styles.Three}`}
        style={{
          backgroundImage: "url(" + picture3 + ")",
        }}
      />
      <button
        className={`${styles.Button} ${styles.Four}`}
        style={
          picture4
            ? { backgroundImage: "url(" + picture4 + ")" }
            : { backgroundColor: "#7c02f6" }
        }
      />
    </section>
  );
};

export default WorkSection;
