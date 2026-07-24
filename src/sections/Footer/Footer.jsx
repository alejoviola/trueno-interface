//-React Imports
import React from "react";

//-Style Imports
import styles from "./Footer.module.css";

//- Images Imports
import ruido from "./assets/ruido.png";

const Footer = ({ zIndex }) => {
  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <div className={styles.SubContainer}>
        <div className={styles.Ruido}></div>
        <a href="mailto:truenoagencia@gmail.com" className={styles.Mail}>
          truenoagencia@gmail.com
        </a>
        <div className={styles.Social}>
          <a
            href="https://www.instagram.com/agencia.trueno/?hl=es"
            className={styles.Instagram}
          ></a>
          <a
            href="https://www.artstation.com/agenciatrueno"
            className={styles.Art}
          ></a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
