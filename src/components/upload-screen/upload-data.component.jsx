import React, { useState } from "react";
import { firestore } from "../../firebase/firebase.utils";

import logo from "../../images/3411083.jpg";
import Button from "../button/button.component";
import Loader from "../loader/loader.component";

import DATA from "../../data";

const UploadData = () => {
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
    <>
      {!loading ? (
        <div className="content-wrapper">
          <img src={logo} alt="" />
          <Button
            action={() => addCollectionsAndDocuments("books", DATA)}
            text={"add data"}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default UploadData;
