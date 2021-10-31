import React from "react";
import styles from "../styles/AlbumContainer.module.scss";

const AlbumContainer: React.FC = () => {
  return (
    <div className={styles.AlbumContainer}>
      <section className={styles.AlbumImageSection}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61waYHWxV%2BL._SL1200_.jpg"
          alt="album-cover"
        />
      </section>
      <section className={styles.AlbumDetailsControlsSection}></section>
    </div>
  );
};

export default AlbumContainer;
