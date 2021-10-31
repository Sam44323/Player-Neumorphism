import React from "react";
import styles from "../styles/PlayerControls.module.scss";

const PlayerControls: React.FC = () => {
  return (
    <div className={styles.PlayerControlsContainer}>
      <section className={styles.TopContainer}></section>
      <div className={styles.BottomContainer}></div>
    </div>
  );
};

export default PlayerControls;
