import React from "react";
import styles from "../styles/PlayerControls.module.scss";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import {
  playerControlSync,
  playerControlLoop,
  playerControlLeft,
  playerControlPlay,
  playerControlRight,
  playerControlLoopRight,
  playerControlSettings,
} from "../assets/index";

const PlayerControls: React.FC = () => {
  const PrettoSlider = styled(Slider)({
    color: "#52af77",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

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
        <PrettoSlider valueLabelDisplay="auto" defaultValue={20} />
      </div>
    </div>
  );
};

export default PlayerControls;
