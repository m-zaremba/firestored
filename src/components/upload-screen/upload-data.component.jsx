import React, { useState } from "react";
import { firestore } from "../../firebase/firebase.utils";

import logo from "../../images/3411083.jpg";

import Button from "../button/button.component";
import Loader from "../loader/loader.component";
import ErrorPopup from "../error-popup/error-popup.component";
import SuccessPopup from "../success-popup/success-popup.component";
import TextInput from "../text-input/text-input.component";
import DataInput from "../data-input/data-input.component";

const UploadData = () => {
  const [loading, setLoading] = useState(false);
  const [firebaseUploadError, setFirebaseUploadError] = useState(false);
  const [dataParseError, setDataParseError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState();
  const [collectionName, setCollectionName] = useState("");
  const [rawData, setRawData] = useState("");
  const [dataToUpload, setDataToUpload] = useState(null);

  const onInputChange = (event) => {
    setCollectionName(event.target.value);
  };

  const handleChange = (event) => {
    setRawData(event.target.value);
    if (dataToUpload !== null) {
      setDataToUpload(null);
    }
  };

  const confirmDataBeforeParsing = () => {
    let parsedData;
    try {
      parsedData = JSON.parse(rawData);
      setDataToUpload(parsedData);
    } catch (error) {
      setDataParseError(true);
      setErrorMessage(error.message);
      console.log(error.message);
    }
  };

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
      .catch((error) => {
        setLoading(false);
        setFirebaseUploadError(true);
        setErrorMessage(error.message);
        console.log(error.message);
      });
  };

  let allowUploadConditions = dataToUpload !== null && collectionName !== "";

  return (
    <>
      {!firebaseUploadError && !loading && !success && (
        <div className="content-wrapper">
          <img src={logo} alt="" />
          <TextInput name="collection title" onChange={onInputChange} />
          <DataInput dataToUpload={dataToUpload} onChange={handleChange} />
          <Button
            action={() => confirmDataBeforeParsing()}
            text={dataToUpload === null ? "validate data" : "ok"}
            style={
              rawData === ""
                ? {
                    pointerEvents: "none",
                    opacity: 0.5,
                  }
                : null
            }
            dataValidated={dataToUpload}
            rawData={rawData}
          />
          <Button
            action={() =>
              addCollectionsAndDocuments(collectionName, dataToUpload)
            }
            text={"add data"}
            style={
              !allowUploadConditions
                ? {
                    pointerEvents: "none",
                    opacity: 0.5,
                  }
                : null
            }
          />
        </div>
      )}
      {loading && <Loader />}
      {success && <SuccessPopup />}
      {(firebaseUploadError || dataParseError) && <ErrorPopup errorMessage={errorMessage} />}
    </>
  );
};

export default UploadData;
