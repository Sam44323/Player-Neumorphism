import React from "react";
import styles from "../styles/AlbumContainer.module.scss";
import { likeSong, addToPlaylist, share } from "../assets/index";

const AlbumContainer: React.FC = () => {
  return (
    <div className={styles.AlbumContainer}>
      <section className={styles.AlbumImageSection}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61waYHWxV%2BL._SL1200_.jpg"
          alt="album-cover"
        />
      </section>
      <section className={styles.AlbumDetailsControlsSection}>
        <div className={styles.Sectional}>
          <p id={styles.Header}>Now Playing</p>
          <section className={styles.AlbumDetails}>
            <p>I Giorni</p>
            <p>Ludovico Einaudi</p>
            <p>Island Essential Einaudi</p>
          </section>
        </div>
        <div className={styles.Sectional}>
          <section className={styles.AlbumControls}>
            {[likeSong, addToPlaylist, share].map((icon, index) => (
              <div key={index} className={styles.ControlsContainer}>
                <img src={icon} alt="icon" />
              </div>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

export default AlbumContainer;
