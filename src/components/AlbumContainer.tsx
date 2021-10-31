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
        <p>Now Playing</p>
        <section className={styles.AlbumDetails}>
          <p>Purple Haze</p>
          <p>Jimi Hendrix</p>
          <p>Woodstock</p>
        </section>
        <section className={styles.AlbumControls}>
          {[likeSong, addToPlaylist, share].map((icon, index) => (
            <div key={index} className={styles.ControlsContainer}>
              <img src={icon} alt="icon" />
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default AlbumContainer;
