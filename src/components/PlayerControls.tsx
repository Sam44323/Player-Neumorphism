import React from "react";
import styles from "../styles/PlayerControls.module.scss";

import {
  playerControlSync,
  playerControlLoop,
  playerControlLeft,
  playerControlPlay,
  playerControlRight,
  playerControlLoopRight,
  playerControlSettings,
  sliderThumb,
} from "../assets/index";

const PlayerControls: React.FC = () => {
  return (
    <div className={styles.PlayerControlsContainer}>
      <section className={styles.TopContainer}>
        <div className={styles.LeftControls}>
          <img src={playerControlSync} alt="sync-icon" />
          <img src={playerControlLoop} alt="loop-icon" />
        </div>
        <div className={styles.CenterControls}>
          <img src={playerControlLeft} alt="left-icon" />
          <img src={playerControlPlay} alt="play-icon" />
          <img src={playerControlRight} alt="right-icon" />
        </div>
        <div className={styles.RightControls}>
          <img src={playerControlLoopRight} alt="another-loop-icon" />
          <img src={playerControlSettings} alt="settings-icon" />
        </div>
      </section>
      <div className={styles.BottomContainer}>
        <input type="range" />
      </div>
    </div>
  );
};

export default PlayerControls;
