import React from "react";
import styles from "../styles/PlayerControls.module.scss";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
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
        <Slider aria-label="slider-ex-1" defaultValue={0}>
          <SliderTrack
            style={{
              height: "10px",
              borderRadius: "17.5px",
              background: "#DEDDE3",
              padding: "9px 0",
              boxShadow:
                "-3px -3px 5px #FFFFFF, 3px 3px 5px rgba(0, 0, 0, 0.05), inset 3px 3px 5px rgba(0, 0, 0, 0.05), inset -3px -3px 5px #FFFFFF",
            }}
          >
            <SliderFilledTrack
              style={{
                width: "100%",
                margin: "0 4px",
                borderRadius: "31px",
                background:
                  "linear-gradient(327.56deg, #5D24D6 19.23%, #7E74ED 81.76%)",
                boxShadow:
                  "0px 2px 3px rgba(43, 72, 180, 0.4), inset 1px 1px 3px rgba(255, 255, 255, 0.4)",
              }}
            />
          </SliderTrack>
          <SliderThumb
            boxSize={6}
            style={{
              border: "none",
              outline: "none",
            }}
          >
            <img
              src={sliderThumb}
              alt="thumb"
              style={{
                maxWidth: "none",
                marginTop: "14px",
              }}
            />
          </SliderThumb>
        </Slider>
        <div className={styles.TimerSection}>
          <p>0 : 00 : 00</p>
          <p>4 : 01 : 30</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
