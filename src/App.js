import React from "react";
import "./App.css";

import { addCollectionsAndDocuments } from "./firebase/firebase.utils";
import DATA from "./firebase.data";

function App() {
  const addData = () => addCollectionsAndDocuments("books", DATA);

  return (
    <div className="App">
      <button onClick={() => addData()}>ADD DATA</button>
    </div>
  );
}

export default App;
