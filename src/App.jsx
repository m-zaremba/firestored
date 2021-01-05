import React, { useState } from "react";

import "./App.css";

import ConfigScreen from "./components/config-screen/config-screen.component";
import UploadData from "./components/upload-screen/upload-data.component";

const Firestored = () => {
  const [dbConfigured, setDbConfigured] = useState(true);

  return (
    <div className="App">
      {!dbConfigured ? (
        <ConfigScreen setDbConfigured={setDbConfigured} />
      ) : (
        <UploadData dbConfigured={dbConfigured} />
      )}
    </div>
  );
};

export default Firestored;
