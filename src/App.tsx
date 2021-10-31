import React from "react";
import "./App.scss";
import AlbumContainer from "./components/AlbumContainer";
import PlayerControls from "./components/PlayerControls";

const App: React.FC = () => {
  return (
    <div className="App">
      <AlbumContainer />
      <PlayerControls />
    </div>
  );
};

export default App;
