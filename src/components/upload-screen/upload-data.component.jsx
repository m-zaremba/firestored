import React, { useState } from "react";
import { firestore } from "../../firebase/firebase.utils";

import logo from "../../images/3411083.jpg";
import Button from "../button/button.component";
import Loader from "../loader/loader.component";

import ErrorIndicator from "../error-indicator/error-indicator.component";
import SuccessIndicator from "../success-indicator/success-indicator.component";
import TextInput from "../text-input/text-input.component";
import DataInput from "../data-input/data-input.component";

const UploadData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState();
  const [collectionName, setCollectionName] = useState('');
  const [rawData, setRawData] = useState('');
  const [dataToUpload, setDataToUpload] = useState(null);

  const onInputChange = (event) => {
    setCollectionName(event.target.value)
  }

  const handleChange = (event) => {
    setRawData(event.target.value);
  }

  const confirmDataBeforeParsing = () => {
    let parsedData = JSON.parse(rawData);
    setDataToUpload(parsedData)

  }

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
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err.message);
      });
  };

  let allowUploadConditions = dataToUpload !== null && collectionName !== '';


  return (
    <>
      {(!error && !loading && !success) && <div className="content-wrapper">
        <img src={logo} alt="" />
        <TextInput name="collection title" onChange={onInputChange}/>
        <DataInput onChange={handleChange} />
        <Button
          action={() => confirmDataBeforeParsing()}
          text={"validate data"}
          style={rawData === '' ? {
          pointerEvents: "none",
          opacity: 0.5
        } : null}
        />
        <Button
          action={() => addCollectionsAndDocuments(collectionName, dataToUpload)}
          text={"add data"}
          style={!allowUploadConditions ? {
          pointerEvents: "none",
          opacity: 0.5
        } : null}
        />
      </div>}
      {loading && <Loader />}
      {success && <SuccessIndicator/>}
      {error && <ErrorIndicator />}
    </>
  );
};

export default UploadData;
