import React, { useState } from "react";
import { firestore } from "./firebase/firebase.utils";

import DATA from "./data";
import Loader from "./components/loader/loader.component";

import logo from "./images/3411083.jpg";
import "./App.css";
import Button from "./components/button/button.component";

const Firestored = () => {
  const [loading, setLoading] = useState(false);

  const addCollectionsAndDocuments = (collectionKey, objectsToAdd) => {
    setLoading(true);

    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    batch
      .commit()
      .then(() => {
        setLoading(false);
        console.log("Data firestored successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      {!loading ? (
        <div className="content-wrapper">
          <img src={logo} alt="" />
          <Button action={() => addCollectionsAndDocuments("books", DATA)}/>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Firestored;
