import React, { useState } from "react";

import { configFirebase } from "../../firebase/firebase.utils";

import Button from "../button/button.component";
import logo from "../../images/2828682.jpg";

import "./config-screen.styles.css";
import TextInput from "../text-input/text-input.component";

const ConfigScreen = ({ setDbConfigured }) => {
  const [credentials, setCredentials] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    setCredentials({
      ...credentials,
      [event.target.name]: value,
    });
  };

  return (
    <div className="config-screen_wrapper">
      <img src={logo} alt="graphic of people working on IT project" />
      <div className="form">
        <TextInput name="apiKey" onChange={handleChange} />
        <TextInput name="authDomain" onChange={handleChange} />
        <TextInput name="databaseURL" onChange={handleChange} />
        <TextInput name="projectId" onChange={handleChange} />
        <TextInput name="storageBucket" onChange={handleChange} />
        <TextInput name="messagingSenderId" onChange={handleChange} />
        <TextInput name="appId" onChange={handleChange} />
      </div>
      <Button
        style={
          Object.keys(credentials).length < 7
            ? {
                pointerEvents: "none",
                opacity: 0.5,
              }
            : null
        }
        action={() => {
          configFirebase(credentials) || setDbConfigured(true);
        }}
        text={"Configure firestore"}
      />
    </div>
  );
};

export default ConfigScreen;
