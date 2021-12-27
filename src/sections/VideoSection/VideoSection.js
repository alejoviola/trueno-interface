//-React Imports
import React from "react";

//-Style Imports
import "../../../node_modules/video-react/dist/video-react.css";
import styles from "./VideoSection.module.css";

//- Components Imports
import { Player } from "video-react";

const VideoSection = ({ zIndex, video }) => {
  return (
    <section className={styles.Container} style={{ zIndex: zIndex }}>
      <div className={styles.Player}>
        <Player playsInline poster="/assets/poster.png" src={video} />
      </div>
    </section>
  );
};

export default VideoSection;
