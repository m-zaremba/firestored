import React, { useState } from "react";
import { firestore } from "./firebase/firebase.utils";

import DATA from "./data";
import Loader from './components/loader.component';

import "./App.css";

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
        <button onClick={() => addCollectionsAndDocuments("books", DATA)}>
          ADD DATA
        </button>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Firestored;
