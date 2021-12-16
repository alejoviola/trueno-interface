//React Imports
import React from "react";

//Styles Imports
import styles from "./Gallery.module.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Gallery = ({ zIndex, picture, picture2, picture3, picture4 }) => {
  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    merge: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      769: {
        items: 1,
      },
    },
  };

  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <OwlCarousel {...options} style={{ padding: "0", margin: "0" }}>
        <div
          className={`${styles.Picture}`}
          style={{ backgroundImage: "url(" + picture + ")" }}
        ></div>
        <div
          className={`${styles.Picture}`}
          style={{ backgroundImage: "url(" + picture2 + ")" }}
        ></div>
        <div
          className={`${styles.Picture}`}
          style={{ backgroundImage: "url(" + picture3 + ")" }}
        ></div>
        <div
          className={`${styles.Picture}`}
          style={{ backgroundImage: "url(" + picture4 + ")" }}
        ></div>
      </OwlCarousel>
    </section>
  );
};

export default Gallery;
