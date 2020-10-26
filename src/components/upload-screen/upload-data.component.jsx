import React, { useState } from "react";
import { firestore } from "../../firebase/firebase.utils";

import logo from "../../images/3411083.jpg";
import Button from "../button/button.component";
import Loader from "../loader/loader.component";

import DATA from "../../data";
import ErrorIndicator from "../error-indicator/error-indicator.component";
import SuccessIndicator from "../success-indicator/success-indicator.component";

const UploadData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState()

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
        setSuccess(true);
        console.log("Data firestored successfully");
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  };

  return (
    <>
      {(!error && !loading && !success) && <div className="content-wrapper">
        <img src={logo} alt="" />
        <Button
          action={() => addCollectionsAndDocuments("books", DATA)}
          text={"add data"}
        />
      </div>}
      {loading && <Loader />}
      {success && <SuccessIndicator/>}
      {error && <ErrorIndicator />}
    </>
  );
};

export default UploadData;
