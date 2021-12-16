//-React Imports
import React from "react";

//-Style Imports
import styles from "./Footer.module.css";

const Footer = ({ zIndex }) => {
  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <div className={styles.SubContainer}>
        <h1>TRUENERS</h1>
      </div>
    </section>
  );
};

export default Footer;
