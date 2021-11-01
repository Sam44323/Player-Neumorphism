import React from "react";
import "./App.scss";
import AlbumContainer from "./components/AlbumContainer";
import PlayerControls from "./components/PlayerControls";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Left">
        <AlbumContainer />
      </div>
      <div className="Right">
        <PlayerControls />
      </div>
    </div>
  );
};

export default App;
